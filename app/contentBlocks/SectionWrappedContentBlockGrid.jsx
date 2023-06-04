import React from "react";

import Grid from "../components/layout/GridLayout"
import MarkdownContent from "../components/markdownContent";
import { Box } from "@chakra-ui/react";
import { DecoratedHeader2, DecoratedHeader3, Header2, Subtitle4, Subtitle5 } from "../components/helpers/Header";

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
              <DecoratedHeader3>
                {title}
              </DecoratedHeader3>
            </Box>
          ) : null}
          {subtitle ? (
            <Box
              textAlign={'center'}
              paddingBottom={markdown ? 6 : 0}
            >
              <Subtitle5>
                {subtitle}
              </Subtitle5>
            </Box>
          ) : null}
          {markdown && (
            <Box
              textAlign={textAlignment ? textAlignment : 'center'}
            >
              <MarkdownContent markdown={markdown} />
            </Box>
            // <div
            //   className={`${textAlignment ? "has-text-" + textAlignment : "has-text-left"
            //     }`}
            // >
            // </div>
          )}
        </div>
      </Grid>
    </React.Fragment>
  );
}

export default SectionWrappedContentBlockGrid;
