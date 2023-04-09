import React from "react";
import {
    Flex, Grid, Box, Heading, Text, Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ImageLoader from "./imageLoader";
import CTAModule from "./CTAModule";
import {
    useNavigate
} from "@remix-run/react";
function ImageWithContent({
    children,
    columnImage,
    columnImageAlt,
    imageRatioDesktop,
    imageRatioMobile,
    columnImageWidth,
    title,
    subtitle,
    ctaCopy,
    ctaLink,
    spotlightColumn,
    spotlightBackgroundTitle,
    spotlightBackgroundContent,
    spotlightChallengeTitle,
    spotlightChallengeContent,
    spotlightSolutionTitle,
    spotlightSolutionContent,
    isReversed,
    textAlign,
}) {

    const navigate = useNavigate();

    return (
        <>
            <Box>
                {ctaLink ? (
                    <Link to={ctaLink}>
                        {columnImage ? (
                            <ImageLoader
                                imageRatioDesktop={imageRatioDesktop}
                                imageRatioMobile={imageRatioMobile}
                                imageAlt={columnImageAlt}
                                imageUrl={columnImage}
                            />
                        ) : null}
                    </Link>
                ) : (
                    <React.Fragment>
                        {
                            columnImage ? (
                                <ImageLoader
                                    imageRatioDesktop={imageRatioDesktop}
                                    imageRatioMobile={imageRatioMobile}
                                    imageAlt={columnImageAlt}
                                    imageUrl={columnImage}
                                />
                            ) : null
                        }
                    </React.Fragment>
                )}
            </Box>
            <Box>
                {!spotlightColumn ? (
                    <React.Fragment>
                        {(title || subtitle) && (
                            <React.Fragment>
                                <Heading as={"h1"} size={"4xl"}>
                                    {title}
                                </Heading>
                                <Heading as={"h3"} size={"xl"}>{subtitle}</Heading>
                            </React.Fragment>
                        )}
                        {children && (
                            <Box textAlign={textAlign}>
                                {children}
                            </Box>
                        )}
                        {ctaLink && (
                            <Box>
                                <Button onClick={() => navigate(ctaLink)} className="button is-medium">
                                    {ctaCopy}
                                </Button>
                            </Box>
                        )}
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {(title || subtitle) && (
                            <React.Fragment>
                                <Heading as={"h1"} size={"4xl"}>
                                    {title}
                                </Heading>
                                <Heading as={"h3"} size={"xl"}>{subtitle}</Heading>
                            </React.Fragment>
                        )}
                        {children && (
                            <Box textAlign={textAlign}>
                                {children}
                            </Box>
                        )}
                        {ctaLink && (
                            <Box>
                                <CTAModule ctaLink={ctaLink} ctaCopy={ctaCopy} />
                            </Box>
                        )}

                        {spotlightBackgroundContent && (
                            <React.Fragment>
                                <Heading>
                                    {!spotlightBackgroundTitle
                                        ? "BACKGROUND"
                                        : spotlightBackgroundTitle}
                                </Heading>
                                <Text>{spotlightBackgroundContent}</Text>
                            </React.Fragment>
                        )}

                        {spotlightChallengeContent && (
                            <React.Fragment>
                                <Heading>
                                    {!spotlightChallengeTitle
                                        ? "BACKGROUND"
                                        : spotlightChallengeTitle}
                                </Heading>
                                <Text>{spotlightChallengeContent}</Text>
                            </React.Fragment>

                        )}

                        {spotlightSolutionContent && (
                            <React.Fragment>
                                <Heading>
                                    {!spotlightSolutionTitle
                                        ? "BACKGROUND"
                                        : spotlightSolutionTitle}
                                </Heading>
                                <Text>{spotlightSolutionContent}</Text>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                )}
            </Box>
        </>
    );
}

export default ImageWithContent;
