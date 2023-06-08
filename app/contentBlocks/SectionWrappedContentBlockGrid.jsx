import React from "react";

import Grid from "../components/layout/GridLayout"
import MarkdownContent from "../components/helpers/Markdown";
import { Box } from "@chakra-ui/react";
import { DecoratedHeader, Subtitle } from "../components/helpers/Header";

function SectionWrappedContentBlockGrid({
  textAlignment,
  markdown,
  columnWidth,
  title,
  subtitle,
}) {
  const columnOffsetWidth = (columnWidth) => {
    switch (columnWidth) {
      case "full":
        return "is-12";
      case "half":
        return "is-6 is-offset-3";
      case "two-thirds":
        return "is-two-thirds is-offset-2";
      case "one-quarter":
        return "is-4 is-offset-4";
      default:
        return "is-12";
    }
  };

  return (
    <React.Fragment>
      <Grid contentWrapper={true}>
        <div
          className={`column ${columnWidth ? columnOffsetWidth(columnWidth) : "is-full"
            }`}
        >
          {title ? (
            <Box
              textAlign={'center'}
              paddingBottom={!!subtitle ? 2 : 6}
            >
              <DecoratedHeader
                headerType="h2"
              >
                {title}
              </DecoratedHeader>
            </Box>
          ) : null}
          {subtitle ? (
            <Box
              textAlign={'center'}
              paddingBottom={markdown ? 6 : 0}
            >
              <Subtitle
              headerType="h5"
              >
                {subtitle}
              </Subtitle>
            </Box>
          ) : null}
          {markdown && (
            <Box
              textAlign={textAlignment ? textAlignment : 'center'}
            >
              <MarkdownContent>{markdown}</MarkdownContent>
            </Box>
          )}
        </div>
      </Grid>
    </React.Fragment>
  );
}

export default SectionWrappedContentBlockGrid;
