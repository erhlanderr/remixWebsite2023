import React from "react";

import SectionWrappers from "../components/sectionWrappers";
import SectionCTA from "../components/SectionCTA";

const SectionWrappedSectionCTA = ({
  ctaTitle,
  ctaLink,
  sectionIsEqual,
  sectionSize,
  ctaSize,
  type,
}) => {
  return (
    <React.Fragment>
      <SectionCTA ctaTitle={ctaTitle} ctaLink={ctaLink} ctaStyle={ctaSize} />
    </React.Fragment>
  );
};

export default SectionWrappedSectionCTA;
