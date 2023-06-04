import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LinkBlock from "./LinkBlock";
import Markdown from "markdown-to-jsx";
import ContainerLayout from "./layout/ContainerLayout";
import {
    Container,
    Box,
    Button,
    Heading,
    Text,
    theme,
    Grid,
    GridItem
} from "@chakra-ui/react";
import { Header1, Header4, Header5, Subtitle3 } from "./helpers/Header";
// import Particles from "react-tsparticles";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesLayout from "./layout/ParticlesLayout";
let particleNumber;
let framesPerSecond;
let particleOpacity;
// import { useContentContext } from "../content/ContentContext";


function PageHeader({ header }) {

   
    console.log("header ==> ", header);
    return (
        <>
            <Box textAlign={'center'} minHeight={'33vh'} backgroundColor={'brand.mwBlue'}>
                <ContainerLayout>
                    <Box py={32} color="white">
                        <Header1>
                            {header.title}
                        </Header1>
                        <Subtitle3>
                            {header.subTitle}
                        </Subtitle3>
                    </Box>
                </ContainerLayout>
                <ParticlesLayout/>
            </Box>

        </>
    );
}

export default PageHeader;
