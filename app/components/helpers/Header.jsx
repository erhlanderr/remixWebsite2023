import React from "react";
import { Heading, Box } from "@chakra-ui/react";

const Header1 = ({
  decoration,
  children,
}) => {
  return (
    <Box>
      <Heading
        position={decoration ? "relative" : "static"}
        px={decoration ? "3.75rem" : 0}
        as="h1"
        lineHeight="tall"
        fontSize="3rem"
        fontWeight="normal"
      >{children}</Heading>
    </Box>
  );
}

const Header2 = ({
  decoration,
  children,
}) => {
  return (
    <Box>
      <Heading
        position={decoration ? "relative" : "static"}
        px={decoration ? "3.75rem" : 0}
        as="h2"
        lineHeight="tall"
        fontSize="2.5rem"
        fontWeight="normal"
      >{children}</Heading>
    </Box>
  );
}

const Header3 = ({
  decoration,
  children,
}) => {
  return (
    <Box>
      <Heading
        position={decoration ? "relative" : "static"}
        px={decoration ? "3.75rem" : 0}
        as="h3"
        lineHeight="tall"
        fontSize="2rem"
        fontWeight="normal"
      >{children}</Heading>
    </Box>
  );
}

const Header4 = ({
  decoration,
  children,
}) => {
  return (
    <Box>
      <Heading
        position={decoration ? "relative" : "static"}
        px={decoration ? "3.75rem" : 0}
        as="h4"
        lineHeight="tall"
        fontSize="1.5rem"
        fontWeight="normal"
      >{children}</Heading>
    </Box>
  );
}

const Header5 = ({
  decoration,
  children,
}) => {
  return (
    <Box>
      <Heading
        position={decoration ? "relative" : "static"}
        px={decoration ? "3.75rem" : 0}
        as="h5"
        lineHeight="tall"
        fontSize="1.25rem"
        fontWeight="normal"
      >{children}</Heading>
    </Box>
  );
}

const Header6 = ({
  decoration,
  children,
}) => {
  return (
    <Box>
      <Heading
        position={decoration ? "relative" : "static"}
        px={decoration ? "3.75rem" : 0}
        as="h6"
        lineHeight="tall"
        fontSize="1rem"
        fontWeight="normal"
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
        lineHeight="tall"
        fontSize="3rem"
        fontWeight="normal"
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
        lineHeight="tall"
        fontSize="2.5rem"
        fontWeight="normal"
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
        lineHeight="tall"
        fontSize="2rem"
        fontWeight="normal"
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
        lineHeight="tall"
        fontSize="1.5rem"
        fontWeight="normal"
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
        lineHeight="tall"
        fontSize="1.25rem"
        fontWeight="normal"
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
        lineHeight="tall"
        fontSize="1rem"
        fontWeight="normal"
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
