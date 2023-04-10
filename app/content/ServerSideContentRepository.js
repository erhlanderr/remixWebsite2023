import glob from "glob";
import fs from "fs";
import path from "path";
import ContentPage from "./ContentPage";

const getRouteFromPath = (path) => {
  let elements = path.split("/");
  let route = "/";
  for (var i = 2; i < elements.length - 1; i++) {
    route += elements[i];
    if (i !== elements.length - 2) route += "/";
  }
  return route;
};

const getTemplateFromPath = (path) => {
  let elements = path.split("/");
  let template = elements[elements.length - 1].split(".")[0];
  return template;
};

class ContentRepository {
  pages = {};

  filePaths = {};

  fileContent = {};

  constructor() {
    this.pages = {};
    this.filePaths = {};
    this.fileContent = {};
    this.blogAuthors = {};
    this.allBlogs = {};
    this.globalSettings = {};
  }

  clearContent() {
    this.pages = {};
    this.filePaths = {};
    this.fileContent = {};
    this.blogAuthors = {};
    this.allBlogs = {};
    this.globalSettings = {};
  }

  getPages(parent) {
    // console.log("ContentRepository::getPages content entry", parent)
    if (!parent.endsWith("/")) parent += "/";
    if (this.pages[parent]) {
      return this.pages[parent];
    } else {
      let pages = [];
      const files = glob.sync(`./content${parent}/!(blogauthors)**.json`);
      const children = glob.sync(`./content${parent}!(blogauthors)*/**.json`);
      files.forEach((fileName) => {
        pages.push({
          fileName,
          route: getRouteFromPath(fileName),
          template: getTemplateFromPath(fileName),
        });
      });
      children.forEach((fileName) => {
        pages.push({
          fileName,
          route: getRouteFromPath(fileName),
          template: getTemplateFromPath(fileName),
        });
      });
      // console.log("ContentRepository::getPages content", parent, pages, children, files);
      this.pages[parent] = pages;
      return pages;
    }
  }

  getPage(parent) {
    var pages = this.getPages(parent);
    if (!pages || pages.length === 0) return null;
    if (!pages[0].data) {
      const fileName = pages[0].fileName;
      const route = pages[0].route;
      const data = fs.readFileSync(path.resolve(fileName));

      var jsonData = JSON.parse(data);

      pages[0].data = jsonData;

      this.getArticleData(jsonData, route);

      pages[0].data = jsonData;
    }
    return new ContentPage(pages[0].data);
  }

  getChildPageContent(parent, getArticleData) {
    if (typeof getArticleData == "undefined") getArticleData = true;

    var pages = this.getPages(parent);
    if (pages.some((x) => !x.data)) {
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];

        const data = fs.readFileSync(path.resolve(page.fileName));

        var jsonData = JSON.parse(data);

        pages[i].data = jsonData;

        if (getArticleData) {
          this.getArticleData(jsonData, page.route);

          pages[i].data = jsonData;
        }
      }
    }

    return pages;
  }

  getFilePaths(parent) {
    if (!parent) return "{}";

    if (!parent.endsWith("/")) parent += "/";

    if (this.filePaths[parent]) {
      return this.filePaths[parent];
    } else {
      let pages = [];
      const files = glob.sync(`./content${parent}/**.md`);
      files.forEach((fileName) => {
        const data = fs.readFileSync(path.resolve(fileName), "utf8");
        pages.push({
          fileName,
          route: getRouteFromPath(fileName),
          template: getTemplateFromPath(fileName),
        });
      });

      this.filePaths[parent] = pages;
      return pages;
    }
  }

  getFileContentFromParent(parent, fileName, extension) {
    // var paths = this.getFilePaths(parent);

    // if(!paths || !paths.length) return "";

    if (!parent.endsWith("/")) parent += "/";

    var filePath = parent + fileName + "." + extension;

    var content = this.getFileContent(filePath);

    return content;
  }

  getFileContent(filePath) {
    if (!filePath) return "";
    {
      // if (this.fileContent[filePath]) {
      //   console.log('Found in cache')
      //   return this.fileContent[filePath];
      // } else {
      let file = fs.readFileSync("./content" + filePath, "utf8");

      this.fileContent[filePath] = {
        filePath,
        route: getRouteFromPath(filePath),
        template: getTemplateFromPath(filePath),
        content: file,
      };
      return this.fileContent[filePath];
    }
  }
  
  getArticleData(jsonData, route) {
    if (jsonData && jsonData.blogListPostAuthor) {
      const authorInfo = this.getBlogAuthorInfo(
        jsonData.blogListPostAuthor.replace(/\s/g, "")
      );

      if (authorInfo) {
        jsonData.authorInfo = JSON.parse(authorInfo);
      }

      if (typeof jsonData.blogListPostDate == "string") {
        const date = jsonData.blogListPostDate;
        var previousArticleLink = this.getArticleByDate(date, route, false);

        if (previousArticleLink)
          jsonData.previousArticleLink = previousArticleLink;

        var nextArticleLink = this.getArticleByDate(date, route, true);

        if (nextArticleLink) jsonData.nextArticleLink = nextArticleLink;
      }

      var promotedContent = this.getPromotedArticleData(
        jsonData.blogListPostPromoted
      );

      if (promotedContent) {
        jsonData.promotedContent = JSON.parse(promotedContent);
      }

      var relatedCategoryPosts = this.getArticlesByRelationship(
        route,
        null,
        jsonData.blogListPostCategory
      );
      var relatedAuthorPosts = this.getArticlesByRelationship(
        route,
        jsonData.blogListPostAuthor,
        null
      );

      if (relatedCategoryPosts) {
        jsonData.relatedCategoryPosts = relatedCategoryPosts;
      }

      if (relatedAuthorPosts) {
        jsonData.relatedAuthorPosts = relatedAuthorPosts;
      }
    }
  }

  getBlogAuthorInfo(blogAuthorId) {
    // console.log(`Blog Author Id: ${blogAuthorId}`);
    if (!blogAuthorId) return "";

    // console.log(`Blog Author Id Exists: ${this.blogAuthors[blogAuthorId]}`);
    if (this.blogAuthors[blogAuthorId]) return this.blogAuthors[blogAuthorId];

    const authors = glob.sync(`./content/our-blogs/blogauthors/**.json`);

    var filePath = "";

    authors.forEach((element) => {
      // console.log(`Blog Author Element: ${element}`)
      var arr = element.toLowerCase().split("/");
      var last = arr.pop();
      if (last == blogAuthorId.toLowerCase() + ".json") {
        filePath = element;
      }
    });

    if (!filePath || !filePath.length) return "";

    let blogAuthorInfo = fs.readFileSync(
      "./content/our-blogs/blogauthors/" + blogAuthorId + ".json",
      "utf8"
    );
    this.blogAuthors[blogAuthorId] = blogAuthorInfo;

    return blogAuthorInfo;
  }

  getPromotedArticleData(route) {
    // console.log('promoted article route ' + route)
    if (!route) return "";

    let promotedArticlePath = fs.readFileSync(
      "./content" + route + "/ContentPage.json",
      "utf8"
    );

    return promotedArticlePath;
  }

  getArticlesByRelationship(currentArticle, author, category) {
   
    let blogs = this.getChildPageContent("/blog", false);

    // filter out the currentArticle so that l don't have the page that l am on returned

    var allBlogPostsWithoutCurrent = blogs.filter(
      (blog) =>
        blog.data &&
        blog.data.blogListPostAuthor &&
        blog.data.blogListPostCategory &&
        blog.route != currentArticle
    );

    var filteredPages = allBlogPostsWithoutCurrent;
    if (author) {
      filteredPages = filteredPages.filter(
        (blog) =>
          blog.data.blogListPostAuthor.toLowerCase() == author.toLowerCase()
      );
    }

    if (category) {
      filteredPages = filteredPages.filter(
        (blog) =>
          blog.data.blogListPostCategory.toLowerCase() == category.toLowerCase()
      );
    }

    var toReturn = [];

    filteredPages.forEach((obj) =>
      toReturn.push({
        articleLink: obj.route,
        articleTitle: obj.data.blogListPostTitle,
        articleDate: obj.data.blogListPostDate,
        articleDateSortable: obj.data.blogListPostDateSortable,
        articleAuthor: obj.data.blogListPostAuthor,
        articleCategory: obj.data.blogListPostCategory,
      })
    );

    return toReturn;
  }

  getArticleByDate(date, currentArticle, next) { 
    if (!date) return {}; 

    var pages = this.getChildPageContent("/blog", false);

    var filteredPages = pages.filter(
      (x) =>
        typeof x.data != "undefined" && 
        typeof x.data.blogListPostDate == "string" &&
        x.route != currentArticle
    );

    // filteredPages.forEach(element => {
    //   console.log(`currentArticle: ${currentArticle} :: ${element.route}`);
    // });

    // console.log(filteredPages.length);

    filteredPages = filteredPages.filter((x) =>
      next ? x.data.blogListPostDate >= date : x.data.blogListPostDate <= date
    );

    // console.log(filteredPages.length);

    filteredPages.sort(function (a, b) {
      if (
        !a.data ||
        !a.data.blogListPostDate ||
        !b.data ||
        !b.data.blogListPostDate
      )
        return 0;

      var dateSortableA = a.data.blogListPostDate;
      var dateSortableB = b.data.blogListPostDate;

      if (dateSortableA < dateSortableB) {
        return next ? -1 : 1;
      }
      if (dateSortableA > dateSortableB) {
        return next ? 1 : -1;
      }

      return 0;
    });

    if (filteredPages.length) {
      return {
        articleTitle: filteredPages[0].data.blogListPostTitle,
        articleLink: filteredPages[0].route,
      };
    } else {
      return {};
    }
  }

  getMediaPath = (mediaPath) => {
    if (!mediaPath) return undefined;
    var host = process.env.CMS_SERVER_ADDRESS;
    var media = host + mediaPath;
    var promise = new Promise((resolve, reject) => {
      fetch(media, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }).then((response) => {
        this.mediaContent[media] = response
        resolve(this.mediaContent[media]);
      });
    });
    
    console.log("this file content ==> ", this.mediaContent[media]);
    console.log("promise ==> ", promise);

    return promise;
  };

  getContent(contentName) {}
}

export default new ContentRepository();
