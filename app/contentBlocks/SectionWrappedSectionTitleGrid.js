import React from "react";
import SectionWrappers from "../components/partials/SectionWrappers";
import Grid from "../components/partials/Grid";
import SectionTitle from "./partials/SectionTitle";

function SectionWrappedSectionTitleGrid({
  sectionSize,
  textAlignment,
  textAlign,
  title,
  subtitle,
  paragraphs,
  markdown,
}) {
  return (
    <SectionWrappers sectionSize={sectionSize} textAlignment={textAlignment}>
      <Grid>
        <div className="column is-full">
          <SectionTitle
            title={title}
            subtitle={subtitle}
            paragraphs={paragraphs}
            markdown={markdown}
            textAlign={textAlign}
          />
        </div>
      </Grid>
    </SectionWrappers>
  );
}

export default SectionWrappedSectionTitleGrid;
