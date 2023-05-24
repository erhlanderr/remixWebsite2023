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
    <SectionWrappers
      type={type}
      sectionCustomClasses="has-text-centered"
      sectionSize={sectionSize}
      sectionIsEqual={sectionIsEqual}
    >
      <SectionCTA ctaTitle={ctaTitle} ctaLink={ctaLink} ctaStyle={ctaSize} />
    </SectionWrappers>
  );
};

export default SectionWrappedSectionCTA;
