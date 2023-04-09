import React from "react";

import SectionWrappers from "../components/sectionWrappers";
import SectionCTA from "../components/SectionCTA";

const SectionWrappedSectionCTA = ({ 
  ctaTitle, 
  ctaLink, 
  sectionIsEqual,
  sectionSize,
  ctaSize,
}) => {
  return (
    <SectionWrappers
      sectionCustomClasses="has-text-centered"
      sectionSize={sectionSize}
      sectionIsEqual={sectionIsEqual}
    >
      <SectionCTA ctaTitle={ctaTitle} ctaLink={ctaLink} ctaStyle={ctaSize} />
    </SectionWrappers>
  );
};

export default SectionWrappedSectionCTA;
