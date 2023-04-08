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
import {
  Outlet,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import logoMWBlue from "../assets/images/logoMWBlue.png"
import React from "react";

export const loader = async ({ request, params }) => {
  const { url } = request.url;
  const slug = params.index // whatever $name is
  console.log("slug", slug)

  const res = await fetch(process.env.CMS_SERVER_ADDRESS, {
    "headers": {
      // "Authorization": 'Bearer ${process.env.DOTCMS_API_KEY}'
    },
    "method": "GET",
  });
  const data = await res.json();
  const headerContent = data.content.header;

  return json({
    // page: data,
    header: headerContent
  });
}


export default function Index() {
  const { header } = useLoaderData();
  const navigate = useNavigate();
  console.log("page ==>", header);
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

      </Container>
      
      <Outlet />
    </React.Fragment>
  );
}
