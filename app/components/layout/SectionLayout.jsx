import React from 'react';
import {
    Container,
    Box,
    Button,
    Heading,
    Text,
    theme
} from "@chakra-ui/react";
import ContainerLayout from './ContainerLayout';
// import ClientSideLazyLoadComponent from '../ClientSideLazyLoadComponent';

function SectionLayout({
    children,
    type,
    ...props
}) {

    const {
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
        padlessBottom
    } = props;

    const sectionSmall = "2rem"
    const sectionNormal = "4rem"
    const sectionMedium = "8rem"
    const sectionLarge = "16rem"

    const sectionPadding = (columnSize) => {
        switch (columnSize) {
            case "small":
                return sectionSmall;
            case "medium":
                return sectionMedium;
            case "large":
                return sectionLarge;           
            default:
                return sectionNormal;
        }
    }

    const sectionContainerLess = ({noContainer, type}) => {
        if (noContainer) {
            return true;
        } else {
            return false;
        }
    }


    return (
        <React.Fragment>
            {/* <ClientSideLazyLoadComponent> */}
            <Box
                type={type}
                pt={sectionPadding(sectionSize)}
                pb={sectionIsEqual ? sectionPadding(sectionSize) : "1.5rem"}
                px={sectionContainerLess({noContainer, type})  || type === "SectionWrappedArticleCarousel" ? 0 : "1.5rem"}
                className={`${passPaddingTop ? 'pass-footer-margin' : ''} ${padlessBottom === true ? 'is-padless-bottom' : ''} ${(sectionIsFluid === true) ? ' is-fluid' : ''} ${(sectionIsPaddingReversed === true) ? ' is-reversed' : ''} ${sectionBackgroundColour && `has-background-${sectionBackgroundColour}`} ${sectionTextColourLight ? `has-text-white` : `has-text-dark`} ${sectionCustomClasses && `${sectionCustomClasses}`} ${textAlignment && `has-text-${textAlignment}`}`}>
                {sectionContainerLess({noContainer, type}) || type === "SectionWrappedArticleCarousel" ? <React.Fragment>{children}</React.Fragment> : <ContainerLayout>
                    {children}
                </ContainerLayout>}
            </Box>
            {/* </ClientSideLazyLoadComponent> */}
        </React.Fragment>
    );
}

export default SectionLayout;
