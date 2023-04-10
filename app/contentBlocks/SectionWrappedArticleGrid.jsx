import React from "react";
import SectionWrappers from "../components/sectionWrappers";
import ArticleGridHeaderImageCard from "../components/ArticleGridHeaderImageCard";
import MarkdownContent from "../components/markdownContent";
import Grid from "../components/gridModule";
import SectionCTA from "../components/SectionCTA";

const SectionWrappedArticleGrid = ({
  sectionSize,
  sectionCustomClasses,
  articles,
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
  sectionBackgroundColour,
  markdown,
  title,
  subtitle,
  textAlignment,
  passPaddingTop,
  ctaTitle,
  ctaLink,
  $type,
}) => {
  return (
    <SectionWrappers
      type={$type}
      passPaddingTop={passPaddingTop}
      sectionIsEqual={sectionIsEqual}
      sectionIsPaddingReversed={sectionIsPaddingReversed}
      sectionSize={sectionSize}
      sectionCustomClasses={sectionCustomClasses}
      sectionBackgroundColour={sectionBackgroundColour}
    >
      {(title || subtitle || markdown) && (
        <Grid contentWrapper={true}>
          <div className={`column is-8 mb-7 is-offset-2`}>
            {title ? (
              <div className={`block has-text-centered`}>
                <div className="section-title has-title-dividers">
                  <div className="title-decoration">
                    <h2 className="title is-2 has-text-centered">{title}</h2>
                  </div>
                </div>
              </div>
            ) : null}
            {subtitle ? (
              <div className={`block ${markdown ? "mb-6" : null}`}>
                <h4 className="subtitle is-4 is-line-height-medium has-text-centered has-text-weight-normal">
                  {subtitle}
                </h4>
              </div>
            ) : null}
            {markdown && (
              <div
                className={`content ${textAlignment ? "has-text-" + textAlignment : "has-text-left"
                  }`}
              >
                <MarkdownContent markdown={markdown} />
              </div>
            )}
          </div>
        </Grid>
      )}

      <div
        className={`columns is-flex-wrap-wrap is-flex ${customColumnsClasses ? customColumnsClasses : ""
          }`}
      >
        {articles &&
          articles.map((article, i) => (
            <React.Fragment key={i}>
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
                article={article}
                key={i}
              />
            </React.Fragment>
          ))}
      </div>

      {ctaTitle && ctaLink && (
        <div className="pt-6">
          <SectionCTA
            ctaTitle={ctaTitle}
            ctaLink={ctaLink}
            ctaStyle={"medium"}
          />
        </div>
      )}
    </SectionWrappers>
  );
};

export default SectionWrappedArticleGrid;
