import React from "react";
import MarkdownContent from "../components/helpers/Markdown";
import GridLayout from "../components/layout/GridLayout";
import { DecoratedHeader, Header, Subtitle } from "../components/helpers/Header";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";


function SectionWrappedPageIntro({
    introductionTitle,
    introductionSubTitle,
    introIcons,
    markdown,
}) {
    return (
        <React.Fragment>
            <Box>
                <Grid templateColumns='repeat(12, 1fr)'>
                    <GridItem colStart={4} colEnd={10} textAlign={'center'}>
                        {introductionTitle || introductionSubTitle ? (
                            <div className="double-block">
                                {introductionTitle && (
                                    <Box>
                                        <DecoratedHeader headerType="h2">
                                            {introductionTitle}
                                        </DecoratedHeader>
                                    </Box>
                                )}
                                {introductionSubTitle && (
                                    <Box mb={4}>
                                        <Subtitle headerType="h4">
                                            {introductionSubTitle}
                                        </Subtitle>
                                    </Box>
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
                            <MarkdownContent>
                                {markdown}
                            </MarkdownContent>
                        )}
                    </GridItem>
                </Grid>
            </Box>

        </React.Fragment>
    );
}

export default SectionWrappedPageIntro;
