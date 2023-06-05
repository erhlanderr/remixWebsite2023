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
            <Box textAlign={'center'} minHeight={'33vh'} backgroundColor={'brand.mwBlue'} overflow={'hidden'} position={'relative'}>
                <ContainerLayout display={'flex'} flexDirection={'column'} justifyContent='center' height='100%' >
                    <Box py={32} color="white">
                        <Header1 >
                            {header.title}
                        </Header1>
                        <Subtitle5>
                            {header.subTitle}
                        </Subtitle5>
                    </Box>
                </ContainerLayout>
                <Box position={'absolute'} top={0} bottom={0} left={0} right={0} overflow={'hidden'}>
                    <ParticlesLayout/>
                </Box>
            </Box>

        </>
    );
}

export default PageHeader;
