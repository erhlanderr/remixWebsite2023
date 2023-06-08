import React from "react";
import {
  Flex, Grid, Heading, SimpleGrid
} from "@chakra-ui/react";
import SectionWrappers from "~/components/sectionWrappers";
// import Grid from "../components/partials/Grid";
import ImageWithContent from "~/components/imageWithContent";
import Markdown from "markdown-to-jsx";
import { Header, Subtitle } from "../components/helpers/Header";

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

    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
      <ImageWithContent
        columnImage={columnImage}
        columnImageAlt={columnImageAlt}
        columnImageLink={columnImageLink}
        customImageClass={customImageClass}
        columnImageWidth={columnImageWidth}
        imageRatioDesktop={imageRatioDesktop}
        imageRatioTablet={imageRatioTablet}
        imageRatioMobile={imageRatioMobile}
        isContained={isContained}
        title={title}
        subtitle={subtitle}
        ctaCopy={ctaCopy}
        ctaLink={ctaLink}
        contentTitle={contentTitle}
        contentSubTitle={contentSubTitle}
        contentDescription={contentDescription}
        verticallyCentered={verticallyCentered}
        isReversed={isReversed}
        textAlign={textAlign}
      >
        <>
          {contentTitle && <Header headerType="h4">{contentTitle}</Header>}
          {contentSubTitle && (
            <Subtitle headerType="h4">{contentSubTitle}</Subtitle>
          )}
          {contentDescription && (
            <Markdown
              options={{
                disableParsingRawHTML: false,
                overrides: {
                  ul: {
                    props: {
                      className: "custom-list is-medium",
                    },
                  },
                },
              }}
            >
              {contentDescription}
            </Markdown>
          )}
          {content && (
            <Markdown
              options={{
                disableParsingRawHTML: false,
                overrides: {
                  ul: {
                    props: {
                      className: "custom-list is-medium",
                    },
                  },
                },
              }}
            >
              {content}
            </Markdown>
          )}
        </>
      </ImageWithContent>
    </SimpleGrid>
  );
}

export default SectionWrappedImageWithContent;
