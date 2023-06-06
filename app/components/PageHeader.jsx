import React from "react";
import ContainerLayout from "./layout/ContainerLayout";
import {
    Box, Heading
} from "@chakra-ui/react";
import {ShadowSubtitle5, Header } from "./helpers/Header";
import ParticlesLayout from "./layout/ParticlesLayout";


function PageHeader({ header }) {
    return (
        <>
            <Box textAlign={'center'} minHeight={'33vh'} backgroundColor={'brand.mwBlue'} overflow={'hidden'} position={'relative'} display={'flex'} flexDirection={'column'} justifyContent='center'>
                <ContainerLayout  height='100%' >
                    <Box position='relative' zIndex={3}  py={32} color="white">
                        <Box pb={4}>
                            <Header 
                                headerType="h1" 
                                headerVariant='pageHeaderTitle'
                                >
                                    {header.title}
                            </Header>
                        </Box>
                        <ShadowSubtitle5>
                            {header.subTitle}
                        </ShadowSubtitle5>
                    </Box>
                </ContainerLayout>
                <Box className="pan-left" zIndex={2} bgGradient='linear(to-tl, #cc6aa5, #3e91cc, #2dcca7)' w={'100%'} h={'100%'} top={0} right={0} backgroundSize={'600% 600%'} opacity={0.6} position={'absolute'} />
                <Box zIndex={1} position={'absolute'} top={0} bottom={0} left={0} right={0} overflow={'hidden'}>
                    <ParticlesLayout/>
                </Box>
            </Box>

        </>
    );
}

export default PageHeader;
