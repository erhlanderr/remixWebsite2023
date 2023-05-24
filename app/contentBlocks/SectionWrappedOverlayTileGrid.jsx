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
  type
}) => {


  // console.log("columnMobile ==>", columnMobile);
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default SectionWrappedOverlayTileGrid;
