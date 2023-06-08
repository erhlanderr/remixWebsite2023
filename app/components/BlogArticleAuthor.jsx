import { Heading } from "@chakra-ui/react";
import React from "react";
import { Header } from "./helpers/Header";
// import mwauthor from "./../../images/authors/mwauthor.jpg";

function BlogArticleAuthor({ relatedAuthorArticles }) {
  return (
    <div className={`column is-full-touch ${relatedAuthorArticles && "is-4"}`}>
      <div className="columns single-gap is-mobile">
        <div className="column is-narrow">
          <figure
            style={{ width: 128 + "px", maxHeight: 128 + "px" }}
            className="image has-ratio is-rounded is-1by1"
          >
            {/* <img src={mwauthor} alt="MethodWorx" /> */}
          </figure>
        </div>
        <div className="column">
          <div>
            <div className="block">
              <Header headerType="h5">
                MethodWorx
              </Header>
              <p className="is-size-7">
                MethodWorx is a software development and digital transformation
                agency that uses technology to give businesses a competitive
                edge.
              </p>
            </div>
            <div className="block">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/methodworx"
                className="button is-secondary is-solid is-small"
              >
                <span className="icon is-small">
                  <i className="fab fa-twitter"></i>
                </span>
                <span>follow me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogArticleAuthor;
