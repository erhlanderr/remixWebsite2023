import React from "react";

import Grid from "../components/layout/GridLayout";
import TileContentModule from "../components/TileContentModule";
import Markdown from "markdown-to-jsx";

const SectionWrappedTilesModuleGrid = ({
  tiles,
  levelItems,
  numericalIcons,
  alignTop,
  levelMobile,
  tileColour,
  tilePadding,
  tileRadius,
  isHoverable,
  iconLarger,
}) => {
  let columnWidths;
  if (tiles.length !== 0) {
    if (tiles.length === 3 || 6 || 5 || 9) {
      columnWidths = "is-4";
    } else if (tiles.length === 4 || 7 || 8) {
      columnWidths = "is-3";
    } else if (tiles.length === 2) {
      columnWidths = "is-6";
    } else {
      columnWidths = "is-full";
    }
  }

  return (
    <React.Fragment>
      <Grid columnDesktop={columnWidths}>
        {tiles &&
          tiles.map((module, index) => (
            <React.Fragment key={index}>

              <TileContentModule
                isHoverable={isHoverable}
                tileColour={tileColour}
                tilePadding={6}
                tileRadius={3}
                columnWidths={columnWidths}
                title={module.title}
                icon={module.icon}
                link={module.link}
                ctaLinkName={module.ctaLinkName}
                iconLarger={iconLarger}
                iconColor={module.iconColor}
                levelItems={levelItems}
                numericalIcons={numericalIcons}
                alignTop={alignTop}
                levelMobile={levelMobile}
                ratioDesktop={module.ratioDesktop}
                ratioMobile={module.ratioMobile}
                image={module.image}
                scaleDown={module.scaleDown}
                altImageText={module.altImageText}
                thisTileColour={module.thisTileColour}
                tileTextColourDark={module.tileTextColourDark}
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
              </TileContentModule>
            </React.Fragment>
          ))}
      </Grid>
    </React.Fragment>
  );
};

export default SectionWrappedTilesModuleGrid;
