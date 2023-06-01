import React from "react";
import { Heading, Box, theme, withDefaultVariant } from "@chakra-ui/react";

const Header1 = ({
  children,
}) => {
  return (
    <Box>
      <Heading
        as="h1"
        size="4xl"       
      >{children}</Heading>
    </Box>
  );
}

const Header2 = ({
  children,
}) => {
  return (
    <Box>
      <Heading
        as="h2"
        size="3xl"       
      >{children}</Heading>
    </Box>
  );
}

const Header3 = ({
  children,
}) => {
  return (
    <Box>
      <Heading
        as="h3"
        size="2xl"       
      >{children}</Heading>
    </Box>
  );
}

const Header4 = ({
  children,
}) => {
  return (
    <Box>
      <Heading
        as="h4"
        size="xl"       
      >{children}</Heading>
    </Box>
  );
}

const Header5 = ({
  children,
}) => {
  return (
    <Box>
      <Heading
        as="h5"
        size="lg"       
      >{children}</Heading>
    </Box>
  );
}

const Header6 = ({
  children,
}) => {
  return (
    <Box>
      <Heading
        as="h6"
        size="md"       
      >{children}</Heading>
    </Box>
  );
}

const Subtitle1 = ({
  children,
}) => {
  return (
    <Box>
      <Heading
        as="h1"
        size="4xl"       
      >{children}</Heading>
    </Box>
  );
}

const Subtitle2 = ({
  children,
}) => {
  return (
    <Box>
      <Heading
        as="h2"
        size="3xl"       
      >{children}</Heading>
    </Box>
  );
}

const Subtitle3 = ({
  children,
}) => {
  return (
    <Box>
      <Heading
        as="h3"
        size="2xl"       
      >{children}</Heading>
    </Box>
  );
}

const Subtitle4 = ({
  children,
}) => {
  return (
    <Box>
      <Heading
        as="h4"
        size="xl"       
      >{children}</Heading>
    </Box>
  );
}

const Subtitle5 = ({
  children,
}) => {
  return (
    <Box>
      <Heading
        as="h5"
        size="lg"       
      >{children}</Heading>
    </Box>
  );
}

const Subtitle6 = ({
  children,
}) => {
  return (
    <Box>
      <Heading
        as="h6"
        size="md"       
      >{children}</Heading>
    </Box>
  );
}

export {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Subtitle4,
  Subtitle5,
  Subtitle6
};
