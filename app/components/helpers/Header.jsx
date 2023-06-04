import React from "react";
import { Heading, Box, theme, withDefaultVariant } from "@chakra-ui/react";


const Header1 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      fontWeight={600}
      as="h1"
      size="4xl"
    >{children}</Heading>

  );
}

const Header2 = ({
  children,
  ...props
}) => {

  return (
    <Heading
      color={{ ...props.color }}
      fontWeight={600}
      as="h2"
      size="3xl"
    >{children}</Heading>

  );
}

const Header3 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      fontWeight={600}
      as="h3"
      size="2xl"
    >{children}</Heading>

  );
}

const Header4 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      fontWeight={600}
      as="h4"
      size="xl"
    >{children}</Heading>

  );
}

const Header5 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      fontWeight={600}
      as="h5"
      size="lg"
    >{children}</Heading>

  );
}

const Header6 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      fontWeight={600}
      as="h6"
      size="md"
    >{children}</Heading>

  );
}
const DecoratedHeader1 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      variant="decoratedTitle"
      color={{ ...props.color }}
      fontWeight={600}
      as="h1"
      size="4xl"
    >{children}</Heading>

  );
}

const DecoratedHeader2 = ({
  children,
  ...props
}) => {

  return (
    < Heading
      variant="decoratedTitle"
      color={{ ...props.color }}
      fontWeight={600}
      as="h2"
      size="3xl"
    > {children}</Heading >

  );
}

const DecoratedHeader3 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      variant="decoratedTitle"
      color={{ ...props.color }}
      fontWeight={600}
      as="h3"
      size="2xl"
    >{children}</Heading>

  );
}

const DecoratedHeader4 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      variant="decoratedTitle"
      color={{ ...props.color }}
      fontWeight={600}
      as="h4"
      size="xl"
    >{children}</Heading>

  );
}

const DecoratedHeader5 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      variant="decoratedTitle"
      color={{ ...props.color }}
      fontWeight={600}
      as="h5"
      size="lg"
    >{children}</Heading>

  );
}

const DecoratedHeader6 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      variant="decoratedTitle"
      color={{ ...props.color }}
      fontWeight={600}
      as="h6"
      size="md"
    >{children}</Heading>

  );
}

const Subtitle1 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      fontWeight={400}
      as="h1"
      size="4xl"
    >{children}</Heading>

  );
}

const Subtitle2 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      fontWeight={400}
      as="h2"
      size="3xl"
    >{children}</Heading>

  );
}

const Subtitle3 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      fontWeight={400}
      as="h3"
      size="2xl"
    >{children}</Heading>

  );
}

const Subtitle4 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      fontWeight={400}
      as="h4"
      size="xl"
    >{children}</Heading>

  );
}

const Subtitle5 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      fontWeight={400}
      as="h5"
      size="lg"
    >{children}</Heading>

  );
}

const Subtitle6 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      fontWeight={400}
      as="h6"
      size="md"
    >{children}</Heading>

  );
}

export {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  DecoratedHeader1,
  DecoratedHeader2,
  DecoratedHeader3,
  DecoratedHeader4,
  DecoratedHeader5,
  DecoratedHeader6,
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Subtitle4,
  Subtitle5,
  Subtitle6
};
