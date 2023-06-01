import React from "react";
// import Markdown from "markdown-to-jsx";
import Markdown from "markdown-to-jsx";
import GridLayout from "../components/layout/GridLayout";
import { Header2, Subtitle4 } from "../components/helpers/Header";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";


function SectionWrappedPageIntro({
    type,
    introductionTitle,
    introductionSubTitle,
    introIcons,
    markdown,
}) {
    return (
        <React.Fragment>
            <Grid templateColumns='repeat(12, 1fr)'>
                <GridItem colStart={4} colEnd={10}>
                    <div className="column is-6 is-offset-3">
                        {introductionTitle || introductionSubTitle ? (
                            <div className="double-block">
                                {introductionTitle && (
                                    <div className="block">
                                        <div className="section-title has-title-dividers">
                                            <div className="title-decoration">
                                                <Header2>
                                                    {introductionTitle}
                                                </Header2>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {introductionSubTitle && (
                                    <div className="block">
                                        <div>
                                            <Subtitle4
                                            >
                                                {introductionSubTitle}
                                            </Subtitle4>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : null}
                        {introIcons && (
                            <GridLayout columnDesktop="3" columnTablet="3" columnMobile="1">
                                {introIcons.map((introIcon, index) => {
                                    return (
                                        <Box key={index}>
                                            <Box insetBlock>
                                                <div className="icon is-large-x2-desktop is-medium-x2-touch  has-text-white is-opacity-9 has-background-primary is-rounded">
                                                    {introIcon.icon && (
                                                        <i
                                                            className={`fas fa-${introIcon.icon} fa-2x`}
                                                        ></i>
                                                    )}
                                                </div>
                                                {introIcon.copy && (
                                                    <p className="title is-7 mt-2">
                                                        {introIcon.copy}
                                                    </p>
                                                )}
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </GridLayout>
                        )}

                        {markdown && (
                            <Markdown
                                className="content"
                                options={{
                                    overrides: {
                                        p: {
                                            props: {
                                                className: "block",
                                            },
                                        },
                                        a: {
                                            props: {
                                                target: "_blank",
                                            },
                                        },
                                    },
                                }}
                            >
                                {markdown}
                            </Markdown>
                        )}
                    </div>
                </GridItem>
            </Grid>

        </React.Fragment>
    );
}

export default SectionWrappedPageIntro;
