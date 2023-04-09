import React from "react";
import SectionWrappers from "../components/sectionWrappers";
import Grid from "./partials/Grid";
import ImageContentModule from "./ImageContentModule";
import Markdown from "markdown-to-jsx";

const SectionWrappedImageContentModuleGrid = ({
  modules,
  sectionCustomClasses,
  gridCustomClasses,
  textAlignment,
  sectionSize,
  ratioDesktop,
  ratioMobile,
  scaleDown,
  sectionIsEqual,
}) => {
  return (
    <SectionWrappers
      sectionSize={sectionSize}
      sectionIsEqual={sectionIsEqual} 
      sectionCustomClasses={
        sectionCustomClasses ? sectionCustomClasses : "has-medium-icons"
      }
      textAlignment={textAlignment ? textAlignment : "centered"}
    >
      <Grid gridCustomClasses={gridCustomClasses ? gridCustomClasses : ""}>
        {modules &&
          modules.map((module) => (
            <ImageContentModule
              title={module.title}
              image={module.image}
              imageLink={module.imageLink}
              ratioDesktop={ratioDesktop}
              ratioMobile={ratioMobile}
              scaleDown={scaleDown}
            >
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
            </ImageContentModule>
          ))}
      </Grid>
    </SectionWrappers>
  );
};

export default SectionWrappedImageContentModuleGrid;
