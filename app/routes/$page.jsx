import React from "react";
import {
  Container,
  Box,
  Button,
  Heading,
  Text
} from "@chakra-ui/react";
import {
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import { json } from "@remix-run/node";

export const loader = async ({ request, params, context }) => {
  const route = params.page // whatever $name is

  const res = await fetch(process.env.CMS_SERVER_ADDRESS + "/" + route, {
    "headers": {
      // "Authorization": 'Bearer ${process.env.DOTCMS_API_KEY}'
    },
    "method": "GET",
  });
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
  return (<React.Fragment>
    <Container maxW='5xl'>
      <Box>
        <Heading>{header.title}</Heading>
        <Text>{header.subTitle}</Text>
        <Button onClick={() => navigate(header.ctaLink)}>{header.ctaTitle}</Button>
      </Box>
    </Container>
  </React.Fragment>)
}