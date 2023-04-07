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
  useDisclosure
} from "@chakra-ui/react";
import logoMWBlue from "../assets/images/logoMWBlue.png"
import React from "react";


export default function Index() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <React.Fragment>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Drawer header text here</DrawerHeader>

          <DrawerBody>

          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Container maxW='5xl'>
        <Flex justifyContent={"space-between"} py={5}>
          <Box>
            <Image maxW="280px" src={logoMWBlue} />
          </Box>
          <Wrap display={"flex"} alignItems={"center"}>
            <Button onClick={onOpen}>Our Services</Button>
            <Button onClick={onOpen}>Our Work</Button>
            <Button onClick={onOpen}>Blog</Button>
            <Button onClick={onOpen}>About Us</Button>
            <Button onClick={onOpen}>Contact Us</Button>
          </Wrap>
        </Flex>
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
          <h1>Welcome to Remix</h1>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://remix.run/tutorials/blog"
                rel="noreferrer"
              >
                15m Quickstart Blog Tutorial
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://remix.run/tutorials/jokes"
                rel="noreferrer"
              >
                Deep Dive Jokes App Tutorial
              </a>
            </li>
            <li>
              <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
                Remix Docs
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </React.Fragment>
  );
}
