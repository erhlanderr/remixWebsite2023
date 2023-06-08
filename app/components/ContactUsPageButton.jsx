import React from "react";
import { Heading, Box, Flex, Card, CardBody } from "@chakra-ui/react";
import { Header } from "./helpers/Header";
import ContainerLayout from "./layout/ContainerLayout";
import CTAModule from "./CTAModule";

function ContactUsPageButton() {

    return (
        <Box bg="brand.mwDark" py={16}>
            <ContainerLayout>
                <Flex justifyContent={'center'} flexDirection={'row'}>
                    <Flex flexDirection={'column'} gap={8} color={'brand.mwWhite'}> 
                        <Header headerType={'h2'} headerVariant={'decoratedTitle'}>Let's get things started</Header>
                        <Box mx="auto">
                            <CTAModule size="lg" variant={'outlinePrimary'} ctaLink={'/contact-us'} ctaCopy={'Contact Us'}></CTAModule>
                        </Box>
                    </Flex>
                </Flex>
            </ContainerLayout>
        </Box>
    );
}

export default ContactUsPageButton;
