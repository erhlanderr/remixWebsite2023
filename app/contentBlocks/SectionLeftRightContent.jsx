import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { ImageLoader } from "../components/helpers/ImageLoader";
import { Header, Subtitle } from "../components/helpers/Header";
import MarkdownContent from "../components/helpers/Markdown";

const SectionLeftRightContent = ({
    title,
    subtitle,
    content,
    columnImage,
    ctaTitle,
    ctaLink,
    leftToRight,
    sectionBackgroundColour
}) => {
    
    console.log("ctaTitle ==> ", ctaTitle)
    console.log("ctaLink ==> ", ctaLink)
    console.log("sectionBackgroundColour ==> ", sectionBackgroundColour)

    return (    
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
            <GridItem order={{md: leftToRight ? 2 : 1}}  colSpan={{ base: 1, sm: 1, md: 2, lg: 3 }}>
                <Header>{title}</Header>
                <Subtitle>{subtitle}</Subtitle>
                <MarkdownContent>{content}</MarkdownContent>
            </GridItem>
            <GridItem order={{md: leftToRight ? 1 : 2}} colSpan={1}>
                <ImageLoader imageUrl={columnImage}  />
            </GridItem>
        </Grid>
    )
}

export default SectionLeftRightContent