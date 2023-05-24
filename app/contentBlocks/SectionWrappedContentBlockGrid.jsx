import React from "react";
import SectionWrappers from "../components/sectionWrappers";
import Grid from "../components/gridModule"
import MarkdownContent from "../components/markdownContent";

function SectionWrappedContentBlockGrid({
  sectionSize,
  textAlignment,
  sectionCustomClasses,
  sectionBackgroundColour,
  sectionIsEqual,
  markdown,
  columnWidth,
  title,
  subtitle,
  type,
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
                  <h2 className="title is-2 has-text-centered">{title}</h2>
                </div>
              </div>
            </div>
          ) : null}
          {subtitle ? (
            <div className={`block ${markdown ? "mb-6" : null}`}>
              <h4 className="subtitle is-4 is-line-height-medium has-text-centered has-text-weight-normal">
                {subtitle}
              </h4>
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
