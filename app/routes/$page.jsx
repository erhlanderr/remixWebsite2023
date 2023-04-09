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
  const navigate = useNavigate();
  const header = data.content.header
  return (<React.Fragment>
    <Container maxW='5xl'>
      <Box>
        <Heading>{header.title}</Heading>
        <Text>{header.subTitle}</Text>
        {header.ctaLink && <Button onClick={() => navigate(header.ctaLink)}>{header.ctaTitle}</Button>}
      </Box>
    </Container>
  </React.Fragment>)
}