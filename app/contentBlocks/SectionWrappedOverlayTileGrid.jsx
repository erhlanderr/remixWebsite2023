import React from "react";

import SectionWrappers from "../components/sectionWrappers";
import Grid from "../components/gridModule";
import OverLayTileBackgroundImage from "../components/OverLayTileBackgroundImage";

const SectionWrappedOverlayTileGrid = ({
  tiles,
  textAlignment,
  sectionCustomClasses,
  tileColor,
  tileColorActive,
  columnDesktop,
  columnTablet,
}) => {

  console.log("columnDesktop ==>", columnDesktop);
    console.log("columnTablet ==>", columnTablet);
    // console.log("columnMobile ==>", columnMobile);
  return ( 
    <SectionWrappers 
      sectionCustomClasses={"are-coloured-overlay-transition has-text-white"}
      textAlignment={textAlignment} 
    >



      <Grid multiline={true} columnDesktop={columnDesktop ? columnDesktop : 3} columnTablet={columnTablet ? columnTablet : 2}>
        {tiles.map((tile, i) => (
          <OverLayTileBackgroundImage
            key={tile.key || i}
            {...tile}
            tileColor={"black"}
            tileColorActive={tileColorActive}
            
          />
        ))}
      </Grid>
    </SectionWrappers>
  );
};

export default SectionWrappedOverlayTileGrid;
