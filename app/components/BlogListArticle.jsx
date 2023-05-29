import React from "react";
import { Link } from "react-router-dom";
import BlogArticleInfo from "./BlogArticleInfo";
import Markdown from "markdown-to-jsx";
import { Heading } from "@chakra-ui/react";

function BlogListArticle({
  blogListPostTitle,
  blogListPostPreview,
  BlogPreviewMax,
  blogListPostImage,
  blogListPostLink,
  blogListPostAuthor,
  blogListPostCategory,
  blogListPostDate,
  BlogListClassesLayout,
  onClick,
}) {

  return (
    <>
      <div className={`column ${BlogListClassesLayout}`}>
        <div className="box has-background-white">
          <div className="card-content card-parent">
            <div className="card-header has-text-white">
              <div className="card-image">
                {blogListPostLink ? (
                  <Link onClick={onClick} to={blogListPostLink}>
                    <article
                      className={`tile ${!blogListPostImage && "has-background-primary"
                        }`}
                    >
                      <figure className="image is-3by2">
                        <div className="overlay">
                          <div className="overlay-content">
                            <div className="overlay-body">
                              <span className="icon is-large">
                                <i className="fas fa-3x fa-search-plus"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <img
                          src={blogListPostImage}
                          alt={
                            !blogListPostTitle
                              ? "A MethodWorx blog post"
                              : blogListPostTitle
                          }
                        />
                      </figure>
                    </article>
                  </Link>
                ) : (
                  <article
                    className={`tile ${!blogListPostImage && "has-background-primary"
                      }`}
                  >
                    <div className="image is-3by2"></div>
                  </article>
                )}
              </div>
            </div>
            <div className="card-body">
              <div className="content are-half-block">
                {!blogListPostTitle ? null : (
                  <div className="normal-block">
                    <Heading as="h5"
                      className="border-white-ter-bottom"
                    >
                      {blogListPostTitle}
                    </Heading>
                  </div>
                )}
                <div className="block">
                  <BlogArticleInfo
                    blogArticleAuthor={blogListPostAuthor}
                    blogArticleCategory={blogListPostCategory}
                    blogArticleDate={blogListPostDate}
                  />
                </div>
                <p className="is-size-7">
                  {blogListPostPreview && (
                    <Markdown
                      className="content"
                      options={{
                        overrides: {
                          p: {
                            props: {
                              className: "block",
                            },
                          },
                          a: {
                            props: {
                              target: "_blank",
                            },
                          },
                        },
                      }}
                    >
                      {blogListPostPreview}
                    </Markdown>
                  )}
                  {blogListPostLink && (
                    <Link
                      onClick={onClick}
                      to={blogListPostLink}
                      className="link has-text-weight-semibold"
                    >
                      <b>read more</b>
                    </Link>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogListArticle;
