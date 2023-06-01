import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import ExpandingTextBox from "./ExpandingTextBox";
import ImageLoader from "./helpers/ImageLoader";
import {
  useNavigate
} from "@remix-run/react";
import {
  Button,
  Heading,
  Card, CardHeader, CardBody, CardFooter, Flex
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
        height={"100%"}        
        className={`${boxBackgroundColour && "has-background-" + boxBackgroundColour}`}
      >
        <CardHeader p="0">
          {article.image && (
            <ImageLoader
              imageUrl={article.image}
              imageAlt={article?.imageAlt}
            // imageRatioDesktop={}
            // imageRatioMobile={}
            />
          )}
        </CardHeader>
        <CardBody>

          <Flex direction={'column'}>

            {(article.title ||
              article.content ||
              (article.ctaLink && article.ctaTitle)) && (
                <>
                  {article?.title && (
                    <Header4>
                      {article.title}
                    </Header4>
                  )}
                  {article?.content && (
                    <ExpandingTextBox textBoxCopy={article?.content} />
                  )}
                </>
              )}
          </Flex>
        </CardBody>
        {article.ctaLink && article.ctaTitle && (
          <CardFooter>
            <Button onClick={() => navigate(article.ctaLink)}>
              {article.ctaTitle}
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};
export default ArticleGridHeaderImageCard;
