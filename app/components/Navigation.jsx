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
    SimpleGrid,
    Show,
    Hide,
    IconButton
} from "@chakra-ui/react";
// import { HamburgerIcon } from '@chakra-ui/icons'
import ContainerLayout from "./layout/ContainerLayout";
import {
    Outlet,
    useLoaderData,
    useNavigate,
    Link
} from "@remix-run/react";
import logoMWBlue from "../assets/images/logoMWBlue.png";
const Navigation = ({ globalSettings }) => {

    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();

    return (
        <React.Fragment>
            <Box position={'sticky'} top={0} backgroundColor={'white'} zIndex={'101'}>
                <ContainerLayout>
                    <Flex justifyContent={"space-between"} py={5}>
                        <Box>
                            <Link to="/">
                                <Image maxW="280px" src={logoMWBlue} />
                            </Link>
                        </Box>
                        <Show above='lg'>
                            <Flex alignItems={'center'}>
                            {globalSettings.navigation.navLinks.map((navItem, index) => (
                                <React.Fragment key={index}> 
                                    <Button variant="navlink" pl={index > 0 && 4} onClick={() => navigate(navItem.ctaLink)}>{navItem.title}</Button>
                                </React.Fragment>
                            ))}
                            </Flex>
                        </Show>
                        <Hide above="lg">
                            <IconButton ref={btnRef} colorScheme='teal' onClick={onOpen}  />
                            <Drawer
                                isOpen={isOpen}
                                placement='right'
                                onClose={onClose}
                                finalFocusRef={btnRef}
                            >
                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerCloseButton />
                                    <DrawerHeader></DrawerHeader>

                                    <DrawerBody>
                                        <SimpleGrid columns={1} spacing={4}>
                                            {globalSettings.navigation.navLinks.map((navItem, index) => (
                                                <React.Fragment key={index}> 
                                                    <Button variant="navlink" justifyContent={'start'} onClick={() => navigate(navItem.ctaLink)}>{navItem.title}</Button>
                                                </React.Fragment>
                                            ))}
                                        </SimpleGrid>
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                        </Hide>

                    </Flex>
                </ContainerLayout>
            </Box>
        </React.Fragment>
    )
}

export default Navigation;