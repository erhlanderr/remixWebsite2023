import {
  Links,
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  Meta
} from "@remix-run/react";
import { json, MetaFunction } from "@remix-run/node";
import { ServerStyleContext, ClientStyleContext } from './context';
import { useContext, useEffect, useState } from "react";
import { ChakraProvider } from '@chakra-ui/react';
import { withEmotionCache } from "@emotion/react";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import slickCarousel from "./assets/styles/css/slick.css";
import particles from "./assets/styles/css/tsparticles.css";
import animations from "./assets/styles/css/animations.css";
import bulmaStyles from "./assets/styles/css/bulma.min.css";
import Theme from "./assets/styles/Theme";

export const meta = ({ data }) => {
  return [{ title: `${data.title} | Bespoke Software London | MethodWorx` }];
};


export const loader = async ({ request, params }) => {
  let route;
  if (params.page) {
    route = params.page
  } else {
    route = "/"
  }

  const globalSettings = await fetch(process.env.CMS_SERVER_ADDRESS + "/global-settings");
  const globalSettingsData = await globalSettings.json();

  const routeChildren = await fetch(process.env.CMS_SERVER_ADDRESS);
  const routeChildrenData = await routeChildren.json();

  const res = await fetch(process.env.CMS_SERVER_ADDRESS + "/" + route);
  const data = await res.json();

  return json({
    globalSettings: globalSettingsData,
    routeChildren: routeChildrenData,
    route,
    data: data,
    title: data.content.header.title,
  });
}

export let links = () => {
  return [
    { rel: "stylesheet", href: slickCarousel },
    { rel: "stylesheet", href: particles },
    { rel: "stylesheet", href: animations },
    { rel: "stylesheet", href: bulmaStyles },
    { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
  ]
}



const Document = withEmotionCache(
  ({ children }, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(' ')}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>

          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);


export default function App() {
  const { globalSettings, routeChildren, route, data, title } = useLoaderData();
  // console.log("title ==>", data.content.header.title);
  return (
    <Document>
      <ChakraProvider theme={Theme}>
        <Navigation globalSettings={globalSettings} />
        <Outlet context={title} />
        <Footer childRoutes={routeChildren.children} />
      </ChakraProvider>
    </Document>
  );
}
