import React from "react";
import {
  Container,
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Wrap,
  Image
} from "@chakra-ui/react";
import {
  useLoaderData,
  useNavigate,
  Link,
  Outlet
} from "@remix-run/react";
import { json } from "@remix-run/node";
import logoMWBlue from "../assets/images/logoMWBlue.png"
import ContentPlaceholder from "../content/contentPlaceholders";

export const loader = async ({ request, params, context }) => {
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

export default function Page() {
  const { route, data } = useLoaderData();
  const pageContent = data.placeholders.contentArea1
  const navigate = useNavigate();
  const header = data.content.header
  return (<React.Fragment>
    <Container maxW='5xl'>
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
    </Container>
    <Container maxW='5xl'>
      <Box>
        <Heading>{header.title}</Heading>
        <Text>{header.subTitle}</Text>
        {header.ctaLink && <Button onClick={() => navigate(header.ctaLink)}>{header.ctaTitle}</Button>}
      </Box>
    </Container>
    <ContentPlaceholder components={pageContent} />
    <Outlet/>
  </React.Fragment>)
}