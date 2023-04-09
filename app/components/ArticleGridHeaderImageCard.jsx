import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import ExpandingTextBox from "./ExpandingTextBox";
import ImageLoader from "./imageLoader";
import {
  useNavigate
} from "@remix-run/react";
import {
  Button
} from "@chakra-ui/react";


const ArticleGridHeaderImageCard = ({
  article,
  columnsDesktop,
  columnsTablet,
  columnsMobile,
  boxBackgroundColour,
  imageRatio,
  key,
}) => {

  const navigate = useNavigate();

  return (
    <div
      key={key}
      className={`column ${columnsDesktop ? "is-" + columnsDesktop + "-desktop" : "is-6-desktop"
        } ${columnsTablet ? "is-" + columnsTablet + "-tablet" : "is-6-tablet"} ${columnsMobile ? "is-" + columnsMobile + "-mobile" : "is-12-mobile"
        }`}
    >
      <div
        className={`is-flex is-flex-direction-column h100 ${boxBackgroundColour && "has-background-" + boxBackgroundColour
          }`}
      >
        {article.image && (
          <ImageLoader
            imageUrl={article.image}
            imageAlt={article?.imageAlt}
          // imageRatioDesktop={}
          // imageRatioMobile={}
          />
        )}

        {(article.title ||
          article.content ||
          (article.ctaLink && article.ctaTitle)) && (
            <div className="tile has-text-left card-content content">
              {article?.title && (
                <div className={`tile-header mb-0 is-block block`}>
                  <h4 className="title is-5">{article.title}</h4>
                  <hr />
                </div>
              )}
              {article?.content && (
                <div className="tile-body is-block double-block">
                  <ExpandingTextBox textBoxCopy={article?.content} />
                </div>
              )}
              {article.ctaLink && article.ctaTitle && (
                <div className={`tile-footer is-block block`}>
                  <Button onClick={() => navigate(article.ctaLink)}>
                    {article.ctaTitle}
                  </Button>
                </div>
              )}
            </div>
          )}
      </div>
    </div>
  );
};
export default ArticleGridHeaderImageCard;
