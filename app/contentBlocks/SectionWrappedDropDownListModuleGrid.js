import React from "react";
import SectionWrappers from "../components/sectionWrappers";
import Grid from "./partials/Grid";
import DropDownListItem from "./DropDownListItem";
import Markdown from "markdown-to-jsx";
const SectionWrappedDropDownListModuleGrid = ({ 
  modules,
  sectionCustomClasses,
  gridCustomClasses, 
  textAlignment, 
  sectionSize, 
  sectionIsEqual,
  columnWidth,
}) => {
  return (
    <SectionWrappers
      sectionSize={sectionSize}
      sectionIsEqual={sectionIsEqual}
      sectionCustomClasses={sectionCustomClasses ? sectionCustomClasses : ""}
      textAlignment={textAlignment ? textAlignment : ""}
    >
      <Grid
        gridCustomClasses={`is-multiline ${
          gridCustomClasses ? gridCustomClasses : ""
        }`}
      >
        {modules &&
          modules.map((module) => (
            <DropDownListItem title={module.title} columnWidth={columnWidth}>
              {module.paragraphs && (
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
                  {module.paragraphs}
                </Markdown>
              )}
              {module.paragraphs && (
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
                  {module.paragraphs}
                </Markdown>
              )}
            </DropDownListItem>
          ))}
      </Grid>
    </SectionWrappers>
  );
};

export default SectionWrappedDropDownListModuleGrid;
