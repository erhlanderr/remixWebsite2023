import React from "react";


import Grid from "../components/layout/GridLayout";
import OverLayTileBackgroundImage from "../components/OverLayTileBackgroundImage";

const SectionWrappedOverlayTileGrid = ({
  tiles,
  tileColorActive,
  columnDesktop,
  columnTablet,
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
