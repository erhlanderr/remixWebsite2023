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
import MarkdownContent from "../components/helpers/Markdown";
import { Box, Grid, GridItem, Flex, Text } from "@chakra-ui/react";

function BlogPost(content) {

  // console.log(content);
  return (
    <React.Fragment>
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        <GridItem colSpan={3}>
          <BlogArticleInfo
            blogArticleAuthor={content?.blogListPostAuthor}
            blogArticleCategory={content?.blogListPostCategory}
            blogArticleDate={content?.blogListPostDate}
          />
          <Box>
            <MarkdownContent>
              {content.postContent}
            </MarkdownContent>
          </Box>
        </GridItem>
        <GridItem>
          {/* <BlogArticleRelatedArticlesPromoted
            blogListPostPromoted={content?.blogListPostPromoted}
          /> */}
        </GridItem>
      </Grid>

      <div className="columns is-desktop blog-footer-container double-gap-touch">
          {/* <BlogArticleAuthor {...data?.authorInfo} /> */}
          <div className="column is-8 is-full-touch">
            <div className="columns single-gap is-multiline">
              <div className="column is-full">
                <div>
                  <h4 className="title is-5 is-marginless">
                    More from MethodWorx
                  </h4>
                </div>
              </div>
              <div className="column is-full is-size-7">
                <div className="columns is-mobile is-flex-wrap-wrap">
                  {/* {relatedArticlesList(data?.relatedAuthorPosts)} */}
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* {console.log("blog content ==> ",content)} */}
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
                <div>
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
    </React.Fragment>
  );
}

export default BlogPost;
