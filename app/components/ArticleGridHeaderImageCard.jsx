import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import ExpandingTextBox from "./ExpandingTextBox";
import ImageLoader from "./imageLoader";
import {
  useNavigate
} from "@remix-run/react";
import {
  Button,
  Heading,
  Card, CardHeader, CardBody, CardFooter
} from "@chakra-ui/react";
import { Header4 } from "./helpers/Header";



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

    >
      <Card
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
                  <Header4>
                    {article.title}
                  </Header4>
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
      </Card>
    </div>
  );
};
export default ArticleGridHeaderImageCard;
