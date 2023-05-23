import React, { useEffect, useState } from "react";
// import { useContentContext } from "../content/ContentContext";
import { useLocation } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import SectionWrapper from "../components/sectionWrappers";
import BlogArticleButton from "../components/BlogArticleButton";
import BlogArticleAuthor from "../components/BlogArticleAuthor";
import BlogArticleInfo from "../components/BlogArticleInfo";
import LinkBlock from "../components/LinkBlock";
import BlogArticleRelatedArticlesPromoted from "../components/BlogArticleRelatedArticlesPromoted";
import BlogArticleRelatedArticles from "../components/BlogArticleRelatedArticles";

function BlogPost() {
  // const [isBlogContent, setBlogContent] = useState(null);

  // const { contentRepository, useContent } = useContentContext();
  // const location = useLocation();

  // var parentPathName = "";
  // if (location && location.pathname) parentPathName = location.pathname;

  // const page = useContent(
  //   () => contentRepository.getPage(parentPathName),
  //   [parentPathName]
  // );

  // useEffect(() => {
  //   if (page) {
  //     if (page.data) {
  //       setBlogContent(page?.data.content);
  //     }
  //   }
  // }, [page]);

  // let data;
  // if (page?.data) {
  //   data = page.data;
  // }

  // const formatedDate = (date) => {
  //   return new Date(date).toLocaleDateString("en-GB", { 
  //     day: "numeric",
  //     month: "long",
  //     year: "numeric",
  //   })}

  // const relatedArticlesList = (articlePosts) => {
  //   if (articlePosts !== undefined) {
  //     const categoryList = articlePosts.slice(0, 6).map((record, index) => {
  //       return (
  //         <>
  //           <div
  //             className={`column is-4-tablet-only is-6-mobile ${
  //               articlePosts === data?.relatedAuthorPosts
  //                 ? "is-4-desktop"
  //                 : "is-12-desktop"
  //             }`}
  //             key={index}
  //           >
  //             <div className="content has-text-left">
  //               <LinkBlock
  //                 linkTitle={record.articleTitle}
  //                 linkUrl={record.articleLink}
  //                 linkSubtitle={formatedDate(record.articleDate)}                  
  //               />
  //             </div>
  //           </div>
  //         </>
  //       );
  //     });
  //     return categoryList;
  //   }
  // };

  return (
    <>
      <SectionWrapper
        sectionIsEqual={true}
        sectionCustomClasses="blog-sidebar"
        sectionHasBackground="white"
      >
        {/* {console.log("blog ==> ",data)} */}
        {/* <div className="columns double-gap is-flex-direction-column-touch">
          <div className="column blog-content ">
            <div className="columns is-multiline single-gap is-flex-direction-column">
              <div className="column is-full">
                <BlogArticleInfo
                  blogArticleAuthor={data?.blogListPostAuthor}
                  blogArticleCategory={data?.blogListPostCategory}
                  blogArticleDate={data?.blogListPostDate}
                />
              </div>

              <div className="column is-full are-double-block">
                <div className="blog-page-markdown content">
                  {!!isBlogContent && (
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
                      {isBlogContent.postContent}
                    </Markdown>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="column blog-articles-filtering">
            <div className="columns single-gap ordered-list are-half-block">
              {!!data?.promotedContent && (
                <BlogArticleRelatedArticlesPromoted
                  {...data?.promotedContent}
                />
              )}
              <BlogArticleRelatedArticles
                blogCategory={data?.blogListPostCategory}
              >
                {relatedArticlesList(data?.relatedCategoryPosts)}
              </BlogArticleRelatedArticles>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        sectionIsEqual={true}
        sectionSize="small"
        sectionCustomClasses="blog-footer-buttons has-divider"
        sectionHasBackground="light" 
      >
        <div className="columns is-mobile blog-footer-container">
          <BlogArticleButton
            buttonTitle="Previously"
            {...data?.previousArticleLink}
          />
          <BlogArticleButton buttonTitle="Next" {...data?.nextArticleLink} />
        </div>
      </SectionWrapper>
      <SectionWrapper
        sectionIsEqual={true}
        sectionSize="small"
        sectionCustomClasses="has-small-icons has-divider-touch no-footer-margin mt-0"
      >
        <div className="columns is-desktop blog-footer-container double-gap-touch">
          <BlogArticleAuthor {...data?.authorInfo} />
          <div className="column is-8 is-full-touch">
            <div className="columns single-gap is-multiline">
              <div className="column is-full">
                <div className="content">
                  <h4 className="title is-5 is-marginless">
                    More from MethodWorx
                  </h4>
                </div>
              </div>
              <div className="column is-full is-size-7">
                <div className="columns is-mobile is-flex-wrap-wrap">
                  {relatedArticlesList(data?.relatedAuthorPosts)}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </SectionWrapper>
    </>
  );
}

export default BlogPost;
