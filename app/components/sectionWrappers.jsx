import React from 'react';
import {
    Container,
    Box,
    Button,
    Heading,
    Text,
    theme
} from "@chakra-ui/react";
// import ClientSideLazyLoadComponent from '../ClientSideLazyLoadComponent';

function SectionWrapper({
    children,
    sectionSize,
    sectionIsFluid,
    sectionBackgroundColour,
    sectionTextColourLight,
    sectionCustomClasses,
    sectionIsEqual,
    textAlignment,
    noContainer,
    sectionIsPaddingReversed,
    passPaddingTop,
    padlessBottom,
    type
}) {

    return (
        <React.Fragment>
            {/* <ClientSideLazyLoadComponent> */}
            <Box
                type={type}
                layerStyle={sectionSize + "Section"}
                // p={sectionSize(sectionSize)}
                className={`section ${passPaddingTop ? 'pass-footer-margin' : ''} ${padlessBottom === true ? 'is-padless-bottom' : ''} ${(sectionIsFluid === true) ? ' is-fluid' : ''}${(sectionIsEqual === true) ? ' is-equal-section' : ''} ${(sectionIsPaddingReversed === true) ? ' is-reversed' : ''} ${sectionBackgroundColour && `has-background-${sectionBackgroundColour}`} ${sectionTextColourLight ? `has-text-white` : `has-text-dark`} ${sectionCustomClasses && `${sectionCustomClasses}`} ${textAlignment && `has-text-${textAlignment}`} ${noContainer && 'is-padless-sides'}`}>
                <Container maxWidth={"5xl"}>
                    {children}
                </Container>
            </Box>
            {/* </ClientSideLazyLoadComponent> */}
        </React.Fragment>
    );
}

export default SectionWrapper;
