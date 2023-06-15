import React from "react";

import GridLayout from "../components/layout/GridLayout";
import ImageContent from "../components/ImageContent";
import MarkdownContent from "../components/helpers/Markdown";

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
        modules.map((module, idx) => (
          <React.Fragment key={module.title}>
            <ImageContent
              title={module.title}
              image={module.image}
              imageLink={module.imageLink}
              ratioDesktop={ratioDesktop}
              ratioMobile={ratioMobile}
              scaleDown={scaleDown}
            >
              {module.paragraphs && (
                <MarkdownContent>
                  {module.paragraphs}
                </MarkdownContent>
              )}
            </ImageContent>
          </React.Fragment>
        ))}
    </GridLayout>
  );
};

export default SectionWrappedImageContentModuleGrid;
