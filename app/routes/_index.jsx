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
import ContentPlaceholder from "../content/contentPlaceholders";

export const loader = async ({ request, params }) => {
  let route;
  if (params.page) {
    route = params.page
  } else {
    route = "/"
  }
  console.log("params ==>", params.page);

  const res = await fetch(process.env.CMS_SERVER_ADDRESS + "/" + route);
  const data = await res.json();

  return json({
    // page: data,
    route,
    data: data
  });
}


export default function Index() {
  const { route, data } = useLoaderData();
  const navigate = useNavigate();
  const header = data.content.header
  const pageContent = data.placeholders.contentArea1
  // console.log("pageContent ==>", pageContent);
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
      <Container maxW='5xl'>
        {/* <Box>
          <Heading>{header.title}</Heading>
          <Text>{header.subTitle}</Text>
          {header.ctaLink && <Button onClick={() => navigate(header.ctaLink)}>{header.ctaTitle}</Button>}
        </Box> */}
        <ContentPlaceholder components={pageContent} />
      </Container>


      <Outlet />
    </React.Fragment>
  );
}
