import React from 'react';
import SectionWrappers from './partials/SectionWrappers';
import Grid from './partials/Grid';

function SectionWrappedGrid({
    sectionSize,
    textAlignment,
    sectionIsFluid,
    sectionHasBackground,
    sectionCustomClasses,
    sectionIsEqual,
    noContainer,
    multiline,
    isOffset,
    verticallyCentered,
    justification,
    wrapped,
    gridCustomClasses,
    contentWrapper,
    children
}) {
    return (
        <SectionWrappers
            sectionSize={sectionSize}
            textAlignment={textAlignment}
            sectionIsFluid={sectionIsFluid}
            sectionHasBackground={sectionHasBackground}
            sectionCustomClasses={sectionCustomClasses}
            sectionIsEqual={sectionIsEqual}
            noContainer={noContainer}
        >
            <Grid
                multiline={multiline}
                isOffset={isOffset}
                verticallyCentered={verticallyCentered}
                justification={justification}
                wrapped={wrapped}
                gridCustomClasses={gridCustomClasses}
                contentWrapper={contentWrapper}

            >{children}
            </Grid>
        </SectionWrappers>
    )
};

export default SectionWrappedGrid;