import React from "react"
import {
    Container,
    Flex,
    Box,
    Image,
    AspectRatio,
    Button,
    Wrap,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Heading,
    Text
  } from "@chakra-ui/react";
  import ContainerLayout from "./layout/ContainerLayout";
  import {
    Outlet,
    useLoaderData,
    useNavigate,
    Link
  } from "@remix-run/react";
  import logoMWBlue from "../assets/images/logoMWBlue.png";
const SharedHeader = () => {

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <ContainerLayout>
                <Flex justifyContent={"space-between"} py={5}>
                    <Box>
                        <Link to="/">
                            <Image maxW="280px" src={logoMWBlue} />
                        </Link>
                    </Box>
                    <Wrap display={"flex"} alignItems={"center"}>
                        <Button onClick={() => navigate('../services')}>Our Services</Button>
                        <Button onClick={() => navigate('../work')}>Our Work</Button>
                        <Button onClick={() => navigate('../blog')}>Blog</Button>
                        <Button onClick={() => navigate('../about-us')}>About Us</Button>
                        <Button onClick={() => navigate('../contact-us')}>Contact Us</Button>
                    </Wrap>
                </Flex>
            </ContainerLayout>
        </React.Fragment>
    )
}

export default SharedHeader;