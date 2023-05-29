import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";


const SectionWrappedArticleMasonaryGrid = ({
  sectionSize,
  sectionCustomClasses,
  articles,
  columnsDesktop,
  columnsTablet,
  columnsMobile,
  imageRatio,
}) => {
  return (
    
      <div className="columns is-multiline">
        {articles &&
          articles.map((article, i) => (
            <div
              className={`column ${
                columnsDesktop
                  ? "is-" + columnsDesktop + "-desktop"
                  : "is-6-desktop"
              } ${
                columnsTablet
                  ? "is-" + columnsTablet + "-tablet"
                  : "is-6-tablet"
              } ${
                columnsMobile
                  ? "is-" + columnsMobile + "-mobile"
                  : "is-12-mobile"
              }`}
            >
              <div className="box">
                <div className="is-block">
                  <LazyLoadImage
                    wrapperClassName={`image has-ratio ${
                      imageRatio ? "is-" + imageRatio : "is-3by2"
                    }`}
                    src={article.image}
                    effect="opacity"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
  );
};

export default SectionWrappedArticleMasonaryGrid;
