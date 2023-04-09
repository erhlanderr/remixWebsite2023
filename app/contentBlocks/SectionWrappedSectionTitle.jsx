import React from "react";
import SectionWrappers from "../components/sectionWrappers";
import SectionTitle from "../components/SectionTitle";
import Markdown from "markdown-to-jsx";
import {
  SimpleGrid,
  Text
} from "@chakra-ui/react";

const SectionWrappedSectionTitle = ({
  title,
  subtitle,
  subtitleBold,
  paragraphs,
  markdown,
  sectionCustomClasses,
  sectionSize,
  textAlignment,
  customColumnClasses,
  sectionIsEqual,
  $type,
}) => {
  return (
    <SectionWrappers
      type={$type}
      sectionSize={sectionSize}
      textAlignment={textAlignment}
      sectionCustomClasses={sectionCustomClasses}
      sectionIsEqual={sectionIsEqual}
    >
      <SimpleGrid>
        <SectionTitle
          title={title}
          subtitle={subtitle}
          subtitleBold={subtitleBold}
          markdown={markdown}
        />
        {paragraphs && (
          <Text>
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
              {paragraphs}
            </Markdown>
          </Text>
        )}
      </SimpleGrid>
    </SectionWrappers>
  );
};

export default SectionWrappedSectionTitle;
