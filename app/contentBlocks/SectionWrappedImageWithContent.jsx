import React from "react";
import {
  Flex, Grid, SimpleGrid
} from "@chakra-ui/react";
import SectionWrappers from "~/components/sectionWrappers";
// import Grid from "../components/partials/Grid";
import ImageWithContent from "~/components/imageWithContent";
import Markdown from "markdown-to-jsx";

function SectionWrappedImageWithContent({
  sectionSize,
  sectionIsEqual,
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
  sectionBackgroundColour,
  sectionTextColourLight,
  ctaCopy,
  ctaLink,
  contentTitle,
  contentSubTitle,
  contentDescription,
  content,
  isReversed,
  columnImageWidth,
  textAlign,
  $type,
}) {
  return (
    <SectionWrappers
      type={$type}
      sectionSize={sectionSize}
      sectionIsEqual={sectionIsEqual}
      sectionBackgroundColour={sectionBackgroundColour}
      sectionTextColourLight={sectionTextColourLight}
    >
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
            {contentTitle && <h6 className="title is-4">{contentTitle}</h6>}
            {contentSubTitle && (
              <p className="subtitle is-4">{contentSubTitle}</p>
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
    </SectionWrappers>
  );
}

export default SectionWrappedImageWithContent;
