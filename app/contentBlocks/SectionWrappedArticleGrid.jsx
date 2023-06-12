import React from "react";
import Grid from "../components/layout/GridLayout";
import SectionCTA from "../components/SectionCTA";

import {
  Button,
  Heading,
  Box,
  Divider,
  Card, CardHeader, CardBody, CardFooter, Flex
} from "@chakra-ui/react";
import { Header } from "../components/helpers/Header";
import { ImageLoader } from "../components/helpers/ImageLoader";
import ExpandingTextBox from "../components/ExpandingTextBox";
import {
  useNavigate,
} from "@remix-run/react";

const SectionWrappedArticleGrid = ({
  articles,
  columnsDesktop,
  columnsTablet,
  columnsMobile,
  boxBackgroundColour,
  ctaTitle,
  ctaLink,
}) => {

  const navigate = useNavigate();

  return (
    <React.Fragment>

      <Grid gridCustomClasses={`is-multiline`}
        columnDesktop={columnsDesktop}
        columnTablet={columnsTablet}
        columnMobile={columnsMobile}
      >
        {articles &&
          articles.map((article, i) => (
            <React.Fragment key={i}>
              <Card
                overflow={'hidden'}
                boxShadow={'none'}
                borderRadius={0}
                height={"100%"}
                className={`${boxBackgroundColour && "has-background-" + boxBackgroundColour}`}
              >
                <CardHeader p="0">
                  {article.image && (
                    <ImageLoader
                      imageUrl={article.image}
                      imageAlt={article?.imageAlt}
                      imageRatioDesktop={'2by1'}
                      imageRatioMobile={'3by1'}
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
                            <Box>
                              <Header headerType="h5">
                                {article.title}
                              </Header>
                              <Divider orientation='horizontal' />
                            </Box>
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
            </React.Fragment>
          ))}
      </Grid>
      {ctaTitle && ctaLink && (
        <Box pt={6}>
          <SectionCTA
            ctaTitle={ctaTitle}
            ctaLink={ctaLink}
            ctaStyle={"medium"}
          />
        </Box>
      )}
    </React.Fragment>
  );
};

export default SectionWrappedArticleGrid;
