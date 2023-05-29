import React from "react";
import SectionTitle from "../components/SectionTitle";

function SectionWrappedSectionTitleGrid({
  textAlign,
  title,
  subtitle,
  paragraphs,
  markdown,
}) {
  return (

    <SectionTitle
      title={title}
      subtitle={subtitle}
      paragraphs={paragraphs}
      markdown={markdown}
      textAlign={textAlign}
    />
  );
}

export default SectionWrappedSectionTitleGrid;
