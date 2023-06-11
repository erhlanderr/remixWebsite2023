import React from "react";
import {
  Box,
  Flex, Grid, Heading, SimpleGrid
} from "@chakra-ui/react";
import SectionWrappers from "~/components/sectionWrappers";
// import Grid from "../components/partials/Grid";
import ImageWithContent from "~/components/imageWithContent";
import MarkdownContent from "../components/helpers/Markdown";
import { Header, Subtitle } from "../components/helpers/Header";
import { Link } from "@remix-run/react";
import { ImageLoader } from "../components/helpers/ImageLoader";
import GridLayout from "../components/layout/GridLayout";

function SectionWrappedImageWithContent({
  isContained,
  verticallyCentered,
  title,
  subtitle,
  columnImage,
  columnImageAlt,
  columnImageLink,
  customImageClass,
  imageRatioDesktop,
  imageRatioTablet,
  imageRatioMobile,
  ctaCopy,
  ctaLink,
  contentTitle,
  contentSubTitle,
  contentDescription,
  content,
  isReversed,
  columnImageWidth,
  textAlign,
  type,
}) {
  return (

    <GridLayout columnDesktop="2" columnTablet="2" columnMobile="1">
      <Box>
        {ctaLink ? (
          <Link to={ctaLink}>
            {columnImage ? (
              <ImageLoader
                imageRatioDesktop={imageRatioDesktop}
                imageRatioMobile={imageRatioMobile}
                imageAlt={columnImageAlt}
                imageUrl={columnImage}
                containImage={true}
              />
            ) : null}
          </Link>
        ) : (
          <React.Fragment>
            {
              columnImage ? (
                <ImageLoader
                  imageRatioDesktop={imageRatioDesktop}
                  imageRatioMobile={imageRatioMobile}
                  imageAlt={columnImageAlt}
                  imageUrl={columnImage}
                  containImage={true}
                />
              ) : null
            }
          </React.Fragment>
        )}
      </Box>
      <Box>
        <Box mb={6}>
          {title && <Header headerType="h3">{title}</Header>}
          {subtitle && <Subtitle headerType="h5">{subtitle}</Subtitle>}
        </Box>
        {content && (
          <MarkdownContent>
            {content}
          </MarkdownContent>
        )}
      </Box>
    </GridLayout>
  );
}

export default SectionWrappedImageWithContent;
