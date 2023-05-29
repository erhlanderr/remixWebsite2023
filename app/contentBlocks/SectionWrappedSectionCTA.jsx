import React from "react";


import SectionCTA from "../components/SectionCTA";

const SectionWrappedSectionCTA = ({
  ctaTitle,
  ctaLink,
  ctaSize,
}) => {
  return (
    <React.Fragment>
      <SectionCTA ctaTitle={ctaTitle} ctaLink={ctaLink} ctaStyle={ctaSize} />
    </React.Fragment>
  );
};

export default SectionWrappedSectionCTA;
