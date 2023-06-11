import React from "react";
import ContainerLayout from "./layout/ContainerLayout";
import {
    Box, Heading
} from "@chakra-ui/react";
import { ShadowSubtitle, ShadowHeader } from "./helpers/Header";
import ParticlesLayout from "./layout/ParticlesLayout";
import { BackgroundImageLoader } from "./helpers/ImageLoader";


function PageHeader({ header }) {
    return (
        <>
            <Box
                textAlign={'center'}
                minHeight={'33vh'}
                overflow={'hidden'}
                position={'relative'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent='center'
                backgroundColor={header.backgroundImage === null && 'brand.mwPrimary'}>
                <ContainerLayout height='100%' >
                    <Box position='relative' zIndex={3} py={32} color="white">
                        <Box pb={4}>
                            <ShadowHeader
                                headerType="h1"
                                headerVariant='pageHeaderTitle'
                                color="white"

                            >
                                {header.title}
                            </ShadowHeader>
                        </Box>
                        {header.subTitle && <ShadowSubtitle
                            headerType="h5"
                        >
                            {header.subTitle}
                        </ShadowSubtitle>}
                    </Box>
                </ContainerLayout>
                {header.backgroundImage !== null ? <BackgroundImageLoader imageUrl={header.backgroundImage} /> : <ParticlesLayout />}
            </Box>

        </>
    );
}

export default PageHeader;
