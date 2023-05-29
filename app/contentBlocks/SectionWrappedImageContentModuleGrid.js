import React from "react";

import GridLayout from "../components/layout/GridLayout";
import ImageContent from "../components/ImageContent";
import Markdown from "markdown-to-jsx";

const SectionWrappedImageContentModuleGrid = ({
  modules,
  gridCustomClasses,
  ratioDesktop,
  ratioMobile,
  scaleDown,
}) => {
  return (
    
      <GridLayout gridCustomClasses={gridCustomClasses ? gridCustomClasses : ""}>
        {modules &&
          modules.map((module) => (
            <ImageContent
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
            </ImageContent>
          ))}
      </GridLayout>
  );
};

export default SectionWrappedImageContentModuleGrid;
