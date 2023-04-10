import path from "path";
import fetch from "node-fetch";
import fs from "fs";
import url from "url";
import request from 'request'
import { StaticRouter } from "react-router-dom";
import compression from "compression";
import "core-js/stable";
import "regenerator-runtime/runtime";
import express from "express";
import React from "react";
import Helmet from "react-helmet";
import ReactDOMServer from "react-dom/server";

import ServerSideContentRepository from "../content/ServerSideContentRepository";
import App from "../root";
import { ContentContext } from "../content/ContentContext";

import expressSitemapXml from "express-sitemap-xml";
import { Server } from "http";
import { _ } from "core-js";
import { FSWatcher } from "chokidar";

const PORT = 8000;
const app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

//
//  redirects!!
app.get("/home/", (req, res) => res.redirect(302, "/"));
app.get("/contact-us", (req, res) => res.redirect(302, "/contact-us"));
app.get("/the-dynamics-365-sales-accelerator", (req, res) =>
  res.redirect(302, "/services/the-dynamics-365-sales-accelerator")
);

//
//  sitemap
app.use(
  expressSitemapXml(async () => {
    const pages = [];
    const recursePages = async (parent) => {
      const currentPages = ServerSideContentRepository.getPages(parent);
      for (const i in currentPages) {
        const page = currentPages[i];
        if (!pages.includes(page.route)) pages.push(page.route);
        if (page.route !== parent) await recursePages(page.route);
      }
    };
    await recursePages("/");
    return pages;
  }, "https://methodworx.com")
);

const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
require("dotenv").config();
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");

var transportCredentials = {
  auth: {
    api_key: process.env.SENDGRID_API_KEY,
  },
};

const smtpTrans = nodemailer.createTransport(sgTransport(transportCredentials));

smtpTrans.verify((err, success) => {
  err
    ? console.log(`=== Error at email server ${err} ===`)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/contact-us", (req, res) => {
  let mailInfo = {
    from: `${req.body.emailName} ${req.body.emailAddress}`, // sender address
    to: "sales@methodworx.com", // list of receivers
    subject: `${req.body.emailSubject}`, // Subject line
    text: `${req.body.emailName} (${req.body.emailAddress}) enquiry: ${req.body.emailMessage}`, // plain text body
    html: `<p><b>${req.body.emailName} </b><br/>(${req.body.emailAddress})<br/><br/>enquiry: ${req.body.emailMessage}</p>`, // html body
  };

  smtpTrans.sendMail(mailInfo, (err) => {
    if (err) {
      console.log(err);
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

app.use(compression());
const router = express.Router();

router.use("^/sitemap.xml", (req, res) => {
  return res.send("xml");
});

const serverRenderer = async (req, res, next) => {
  if (req.query.refresh === "true") {
    await getContentFromServer();
    ServerSideContentRepository.clearContent();
    return res.redirect(req.originalUrl.split("?").shift());
  }

  const context = {};

  let html = ReactDOMServer.renderToString(
    <StaticRouter location={req.originalUrl} context={context}>
      <ContentContext.Provider
        value={{
          contentRepository: ServerSideContentRepository,
          useContent: (callback) => {
            return callback();
          },
        }}
      >
        <App />
      </ContentContext.Provider>
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();

  // console.log('helment', helmet.title.toString());

  fs.readFile(path.resolve("./build/index.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }
    return res.send(
      data
        .replace(
          '<html lang="en">',
          `<html lang="en" ${helmet.htmlAttributes.toString()}>`
        )
        .replace(`<title>React App</title>`, `${helmet.title.toString()}`)
        .replace(
          `<meta charset="utf-8"/>`,
          `${helmet.meta.toString()}<meta charset="utf-8"/>`
        )
        .replace(`<body>`, `<body ${helmet.bodyAttributes.toString()}>`)
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
};

router.use("^/_content/pages", async (req, res) => {
  res.send(ServerSideContentRepository.getPages(req.query.parent));
});

router.use("^/_content/page", async (req, res) => {
  res.send(ServerSideContentRepository.getPage(req.query.name));
});

router.use("^/_content/filePaths", async (req, res) => {
  res.send(ServerSideContentRepository.getFilePaths(req.query.parent));
});

router.use("^/_content/fileContent", async (req, res) => {
  res.send(ServerSideContentRepository.getFileContent(req.query.filePath));
});

router.use("^/_content/childPageContent", async (req, res) => {
  res.send(ServerSideContentRepository.getChildPageContent(req.query.parent));
});

router.use("^/_content/mediaPath", async (req, res) => {
  res.send(ServerSideContentRepository.getMediaPath(req.query.mediaPath));
});

router.use("^/_content/refresh", async (req, res) => {
  await getContentFromServer();
  ServerSideContentRepository.clearContent();
  return res.redirect("/");
});

router.use("^/media/**", (req, res) => {
  try {
    request.get(`${process.env.CMS_SERVER_ADDRESS}${req.originalUrl}`).pipe(res);
  }
  catch (err) {
  }
});

router.use("^/$", serverRenderer);

router.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

router.use("^/*", serverRenderer);

// tell the app to use the above rules
app.use(router);

app.use(express.static("./build"));

const deleteFolderRecursive = function (path) {
  var files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function (file, index) {
      var curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

const getContentFromServer = async () => {
  const serverAddress = process.env.CMS_SERVER_ADDRESS;
  const fetcher = async (root) => {
    let globalSettings = await fetch(`${serverAddress}/global-settings`);
    let content = await fetch(`${serverAddress}${root}`);
    if (content.status === 200) {
      
      let json = await content.json();

      if (json) {
        if (!fs.existsSync(`./content${root}`)) {
          fs.mkdirSync(`./content${root}`);
        }
        fs.writeFileSync(
          `./content/${root}/${json.template}.json`,
          JSON.stringify(json, null, 2)
        );
        if (globalSettings.status === 200) {
          let jsonSettings = await globalSettings.json();
          if (!fs.existsSync(`./content/settings`)) {
            fs.mkdirSync(`./content/settings`);
          }
          fs.writeFileSync(
            `./content/settings/${jsonSettings.template}.json`,
            JSON.stringify(jsonSettings, null, 2)
          );
        }

        if (json.children) {
          let promises = json.children.map(async (child) => {
            await fetcher(child.url);
          });
          await Promise.all(promises, globalSettings);
        }
      }
    }
  };

  deleteFolderRecursive(`./content`);
  deleteFolderRecursive(`./settings`);
  await fetcher("/");
};

getContentFromServer()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SSR running on port ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex);
  });
