import React from "react";
import { Link } from "react-router-dom";
import BlogArticleInfo from "./BlogArticleInfo";
import Markdown from "markdown-to-jsx";
import { Heading } from "@chakra-ui/react";

function BlogArticleRelatedArticlesPromoted({
  blogListPostTitle,
  blogListPostPreview,
  blogListPostImage,
  blogListPostPromoted,
  blogListPostAuthor,
  blogListPostCategory,
  blogListPostDate,
}) {
  const BlogPromotedHeader = ({ blogListPostImage, blogListPostTitle }) => {
    return (
      <article
        className={`tile ${!blogListPostImage && "has-background-primary"}`}
      >
        <figure className="image is-3by2 is-16by9-tablet-only is-4by3-mobile">
          <div className="overlay">
            <div className="overlay-content">
              <div className="overlay-body">
                <span className="icon is-large">
                  <i className="fas fa-3x fa-search-plus"></i>
                </span>
              </div>
            </div>
          </div>
          {blogListPostImage && (
            <img
              className="lazy"
              data-object-fit="contain"
              alt={
                !blogListPostTitle
                  ? "A MethodWorx blog post"
                  : blogListPostTitle
              }
              src={blogListPostImage}
            />
          )}
        </figure>
      </article>
    );
  };

  const trimLink = (link) => {
    let trimedLink;
    var lastChar = link.substr(link.length - 1);
    if (lastChar.indexOf("/") > -1) {
      trimedLink = link.substr(0, link.length - 1);
    } else {
      trimedLink = link;
    }
    return trimedLink;
  };

  return (
    <div className="column list-order-1-touch is-half-tablet-only is-full-mobile has-text-left">
      <div className="border-white-ter-bottom mb-4">
        <div className="columns is-mobile is-multiline">
          <div className="column is-full">
            <div className="block">
              <h5 className="title is-5">Related Story</h5>
            </div>
          </div>
          <div className="column is-one-thirds-touch is-one-thirds-mobile is-full-desktop are-overlay-transition">
            <div className="card-image">
              {blogListPostImage && blogListPostPromoted ? (
                <Link to={trimLink(blogListPostPromoted)}>
                  <BlogPromotedHeader
                    blogListPostImage={blogListPostImage}
                    blogListPostTitle={blogListPostTitle}
                  />
                </Link>
              ) : (
                <BlogPromotedHeader
                  blogListPostImage={blogListPostImage}
                  blogListPostTitle={blogListPostTitle}
                />
              )}
            </div>
          </div>
          <div className="column is-two-thirds-touch is-two-thirds-mobile is-full-desktop">
            <div className="content has-text-left is-small">
              {!blogListPostTitle ? null : (
                <div className="normal-block">
                  <Heading
                    as="h5"
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
              <div className="block">
                <p className="is-size-7">
                  {blogListPostPreview && (
                    <Markdown
                      options={{
                        overrides: {
                          ul: {
                            props: {
                              className: "custom-list is-medium",
                            },
                          },
                          blockquote: {
                            props: {
                              className: "blog-testimonial is-medium",
                            },
                          },
                        },
                      }}
                    >
                      {blogListPostPreview}
                    </Markdown>
                  )}{" "}
                  {blogListPostPromoted && (
                    <Link
                      to={trimLink(blogListPostPromoted)}
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
    </div>
  );
}

export default BlogArticleRelatedArticlesPromoted;
