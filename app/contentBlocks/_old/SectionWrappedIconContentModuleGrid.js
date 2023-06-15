import React from "react";

import Grid from "./partials/Grid";
import IconContentModule from "./IconContentModule";
import Markdown from "markdown-to-jsx";

const SectionWrappedIconContentModuleGrid = ({
  tiles,
  sectionCustomClasses,
  textAlignment,
  sectionSize,
  sectionIsEqual,
  columnDesktop,
  columnTablet,
  columnMobile,
  iconLarger,
  $type,
}) => {
  return (
    <SectionWrappers
      type={$type}
      sectionSize={sectionSize}
      sectionIsEqual={sectionIsEqual}
      sectionCustomClasses={sectionCustomClasses ? sectionCustomClasses : ""}
      textAlignment={textAlignment ? textAlignment : "centered"}
    >
      <Grid gridCustomClasses={`is-multiline`}>
        {tiles &&
          tiles.map((module, index) => (
            <React.Fragment key={index}>
              <IconContentModule
                iconLarger={iconLarger}
                title={module.title}
                icon={module.icon}
                iconImage={module.iconImage}
                iconAlt={module.iconAlt}
                iconLink={module.iconLink}
                iconColor={module.iconColor}
                imageAltText={module.imageAltText}
                image={module.image}
                imageLink={module.imageLink}
                columnDesktop={columnDesktop}
                columnTablet={columnTablet}
                columnMobile={columnMobile}
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
                {module.ctaLinkName ? (
                  <div className="block">                    
                    <button className="button">{module.ctaLinkName}</button>
                  </div>
                ) : null}
              </IconContentModule>
            </React.Fragment>
          ))}
      </Grid>
    </SectionWrappers>
  );
};

export default SectionWrappedIconContentModuleGrid;
