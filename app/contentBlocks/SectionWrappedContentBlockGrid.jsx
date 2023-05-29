import React from "react";

import Grid from "../components/layout/GridLayout"
import MarkdownContent from "../components/markdownContent";
import { Heading } from "@chakra-ui/react";
import { Header2, Subtitle4 } from "../components/helpers/Header";

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
            <div
              className={`block has-text-centered ${!!subtitle ? "" : "mb-6"}`}
            >
              <div className="section-title has-title-dividers">
                <div className="title-decoration">
                  <Header2>
                    {title}
                  </Header2>
                </div>
              </div>
            </div>
          ) : null}
          {subtitle ? (
            <div className={`block ${markdown ? "mb-6" : null}`}>
              <Subtitle4
              >
                {subtitle}
              </Subtitle4>
            </div>
          ) : null}
          {markdown && (
            <div
              className={`content ${textAlignment ? "has-text-" + textAlignment : "has-text-left"
                }`}
            >
              <MarkdownContent markdown={markdown} />
            </div>
          )}
        </div>
      </Grid>
    </React.Fragment>
  );
}

export default SectionWrappedContentBlockGrid;
