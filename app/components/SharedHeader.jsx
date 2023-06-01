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
    Text,
    SimpleGrid
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
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <React.Fragment>
            <ContainerLayout>
                <Flex justifyContent={"space-between"} py={5}>
                    <Box>
                        <Link to="/">
                            <Image maxW="280px" src={logoMWBlue} />
                        </Link>
                    </Box>
                    <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                        Open
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Navigation</DrawerHeader>

                            <DrawerBody>
                                <SimpleGrid columns={1} spacing={10}>

                                    <Button onClick={() => navigate('../services')}>Our Services</Button>
                                    <Button onClick={() => navigate('../work')}>Our Work</Button>
                                    <Button onClick={() => navigate('../blog')}>Blog</Button>
                                    <Button onClick={() => navigate('../about-us')}>About Us</Button>
                                    <Button onClick={() => navigate('../contact-us')}>Contact Us</Button>

                                </SimpleGrid>
                            </DrawerBody>

                            {/* <DrawerFooter>
                                <Button variant='outline' mr={3} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button colorScheme='blue'>Save</Button>
                            </DrawerFooter> */}
                        </DrawerContent>
                    </Drawer>

                </Flex>
            </ContainerLayout>
        </React.Fragment>
    )
}

export default SharedHeader;