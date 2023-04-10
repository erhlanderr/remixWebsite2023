import React from "react";

function BlogArticleInfo({
  blogArticleAuthor,
  blogArticleCategory,
  blogArticleDate,
}) {

  return (
    <>
      {
        <div className="blog-info-level is-left">
          {blogArticleDate && (
            <div className="blog-info">
              <p className="is-info">Date</p>
              <span>
                {new Date(blogArticleDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          )}
          {blogArticleCategory && (
            <div className="blog-info">
              <p className="is-info">Category</p>
              <span>{blogArticleCategory}</span>
            </div>
          )}
          {blogArticleAuthor && (
            <div className="blog-info">
              <p className="is-info">Author</p>
              <span>{blogArticleAuthor}</span>
            </div>
          )}
        </div>
      }
    </>
  );
}

export default BlogArticleInfo;
