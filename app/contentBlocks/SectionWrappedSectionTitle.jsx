import React from "react";

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
}) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default SectionWrappedSectionTitle;
