import React from "react";


import SectionCTA from "../components/SectionCTA";
import { Box } from "@chakra-ui/react";

const SectionWrappedSectionCTA = ({
  ctaTitle,
  ctaLink,
  ctaSize,
}) => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <SectionCTA ctaTitle={ctaTitle} ctaLink={ctaLink} ctaStyle={ctaSize} />
    </Box>
  );
};

export default SectionWrappedSectionCTA;
