import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionWrappers from "../components/sectionWrappers";
import ArticleGridHeaderImageCard from "../components/ArticleGridHeaderImageCard";
import ImageWithContentToEdge from "../components/ImageWithContentToEdge";
import SectionWrappedSectionTitle from "./SectionWrappedSectionTitle";
import { useContentContext } from "../content/ContentContext";
import Markdown from "markdown-to-jsx";

const SectionWrappedArticleGrid = ({
  sectionSize,
  sectionCustomClasses,
  sectionHasBackground,
  sectionIsEqual,
  columnsDesktop,
  columnsTablet,
  columnsMobile,
  imageRatio,
  footerGrow,
  footerShrink,
  headerGrow,
  headerShrink,
  boxBackgroundColour,
  customColumnsClasses,
  sectionIsPaddingReversed,
  $type,
}) => {
  const location = useLocation();
  const [isArticles, setArticles] = useState(null);
  const { contentRepository, useContent } = useContentContext();
  const articleItems = useContent(
    () => contentRepository.getChildPageContent(location.pathname),
    [location.pathname],
    []
  );

  useEffect(() => {
    var filteredArticles = articleItems.filter(
      (item) => item.route !== location.pathname
    );

    filteredArticles.sort(function (a, b) {
      if (
        !a.data ||
        !a.data.content.navigation.navigationListOrder ||
        !b.data ||
        !b.data.content.navigation.navigationListOrder
      )
        return 0;

      var articleSortableA = a.data.content.navigation.navigationListOrder;
      var articleSortableB = b.data.content.navigation.navigationListOrder;

      if (articleSortableA < articleSortableB) {
        return -1;
      }
      if (articleSortableA > articleSortableB) {
        return 1;
      }

      return 0;
    });
    setArticles(filteredArticles);
  }, [articleItems, location.pathname]);

  return (
    <>
      <SectionWrappedSectionTitle title="Spotlight" />
      <SectionWrappers
        sectionSize="small"
        sectionCustomClasses="has-image-one-third has-offset-image"
        sectionHasBackground={sectionHasBackground}
      >
        {!!isArticles &&
          isArticles.slice(0, 1).map((spotlight, index) => (
            <React.Fragment key={index}>

              <ImageWithContentToEdge
                columnImage={spotlight.data.content.header.backgroundImage}
                columnImageAlt={spotlight.data.content.navigation.title}
                columnImageLink={spotlight.route}
                title={spotlight.data.content.navigation.title}
                ctaCopy={spotlight.data.content.navigation.ctaTitle}
                ctaLink={spotlight.route}
              >
                {spotlight.data.content.navigation?.teaser && (
                  <div className="block">
                    <Markdown
                      options={{
                        overrides: {
                          ul: {
                            props: {
                              className: "custom-list is-medium",
                            },
                          },
                        },
                      }}
                    >
                      {spotlight.data.content.navigation?.teaser}
                    </Markdown>
                  </div>
                )}
              </ImageWithContentToEdge>
            </React.Fragment>
          ))}
      </SectionWrappers>
      <SectionWrappedSectionTitle title="Case Studies" />
      <SectionWrappers
        type={$type}
        sectionIsEqual={sectionIsEqual}
        sectionIsPaddingReversed={sectionIsPaddingReversed}
        sectionSize={sectionSize}
        sectionCustomClasses={sectionCustomClasses}
      >
        <div
          className={`columns is-flex-wrap-wrap is-flex ${customColumnsClasses ? customColumnsClasses : ""
            }`}
        >
          {!!isArticles &&
            isArticles.slice(1).map((article, index) => (
              <>
                <ArticleGridHeaderImageCard
                  columnsDesktop={columnsDesktop}
                  columnsTablet={columnsTablet}
                  columnsMobile={columnsMobile}
                  imageRatio={imageRatio}
                  footerGrow={footerGrow}
                  footerShrink={footerShrink}
                  headerGrow={headerGrow}
                  headerShrink={headerShrink}
                  boxBackgroundColour={boxBackgroundColour}
                  article={{
                    title: article.data.content.header.title,
                    image: article.data.content.header.backgroundImage,
                    content: article.data.content.navigation.teaser,
                    ctaLink: article.route,
                    ctaTitle: article.data.content.navigation.ctaTitle,
                  }}
                  key={index}
                />
              </>
            ))}
        </div>
      </SectionWrappers>
    </>
  );
};

export default SectionWrappedArticleGrid;
