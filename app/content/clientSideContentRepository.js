import ContentPage from "./ContentPage";

class ContentRepository {
  pages = {};
  blogPageContent = {};
  fileContent = {};
  globalSettings = {};
  mediaContent = {};

  getPages = (parent) => {
    if (this.pages[parent]) return Promise.resolve(this.pages[parent]);
    else {
      var promise = new Promise((resolve, reject) => {
        fetch(`/_content/pages?parent=${encodeURI(parent)}`)
          .then((response) => response.json())
          .then((pages) => {
            this.pages[parent] = pages;
            resolve(this.pages[parent]);
          });
      });
      return promise;
    }
  };

  getPage = (name) => {
    return this.getPages(name).then((page) => {
      // console.log("ContentRepository::getPage content", name);
      if (!page.data) {
        var promise = new Promise((resolve, reject) => {
          fetch(`/_content/page?name=${encodeURI(name)}`)
            .then((response) => response.json())
            .then((json) => {
              page.data = json.data;
              resolve(new ContentPage(page.data));
            });
        });
        return promise;
      } else {
        return Promise.resolve(new ContentPage(page.data));
      }
    });
  };

  getChildPageContent = (parent) => {
    return this.getPages(parent).then((pages) => {
      // console.log("getChildPageContent::clientside ", parent);
      var missingData = false;

      for (let index = 0; index < pages.length; index++) {
        const childPage = pages[index];
        if (!childPage || !childPage.data) {
          missingData = true;
          break;
        }
      }

      if (missingData) {
        var promise = new Promise((resolve, reject) => {
          fetch(`/_content/childPageContent?parent=${encodeURI(parent)}`)
            .then((response) => response.json())
            .then((json) => {
              this.pages[parent] = json;
              resolve(json);
            });
        });
        return promise;
      } else {
        return Promise.resolve(pages);
      }
    });
  };

  getFilePaths = (parent) => {
    if (this.blogPageContent[parent]) {
      // console.log("getBlogPostContent : clientside : " + this.blogPageContent[parent]);
      return Promise.resolve(this.blogPageContent[parent]);
    } else {
      // console.log("getBlogPostContent : clientside : " + parent);
      var promise = new Promise((resolve, reject) => {
        fetch(`/_content/filePaths?parent=${encodeURI(parent)}`)
          // .then(response => response.text())
          // .then(result => document.getElementById('content').innerHTML = marked(result));
          .then((response) => {
            this.blogPageContent[parent] = response.json();
            resolve(this.blogPageContent[parent]);
          });
      });
      return promise;
    }
  };

  getFileContentFromParent = (filePath, name, extension) => {
    // var paths = this.getFilePaths(filePath);

    if (!filePath.endsWith("/")) filePath += "/";

    filePath = filePath + name + "." + extension;

    if (this.fileContent[filePath])
      return Promise.resolve(this.fileContent[filePath]);

    // var promise = new Promise((resolve, reject) => {
    // });

    return Promise.resolve(this.getFileContent(filePath));
  };

  getFileContent = (filePath) => {
    if (!filePath) return undefined;
    // eslint-disable-next-line no-lone-blocks
    {
      // if (this.fileContent[filePath]) {
      //   return Promise.resolve(this.fileContent[filePath]);
      // } else {
      // console.log("getFileContent : clientside : " + filePath);
      var promise = new Promise((resolve, reject) => {
        fetch(`/_content/fileContent?filePath=${encodeURI(filePath)}`).then(
          (response) => {
            this.fileContent[filePath] = response.json();
            resolve(this.fileContent[filePath]);
          }
        );
      });

      return promise;
    }
  };

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
}

export default new ContentRepository();
