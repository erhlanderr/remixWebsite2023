import React from "react";
import ContainerLayout from "./layout/ContainerLayout";
import {
    Box
} from "@chakra-ui/react";
import { Header1, Subtitle3, Subtitle5 } from "./helpers/Header";
import ParticlesLayout from "./layout/ParticlesLayout";


function PageHeader({ header }) {

   
    console.log("header ==> ", header);
    return (
        <>
            <Box textAlign={'center'} minHeight={'33vh'} backgroundColor={'brand.mwBlue'}>
                <ContainerLayout>
                    <Box py={32} color="white">
                        <Header1 >
                            {header.title}
                        </Header1>
                        <Subtitle5>
                            {header.subTitle}
                        </Subtitle5>
                    </Box>
                </ContainerLayout>
                <ParticlesLayout/>
            </Box>

        </>
    );
}

export default PageHeader;
