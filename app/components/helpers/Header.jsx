import React from "react";
import { Heading, Box, theme, withDefaultVariant } from "@chakra-ui/react";

const HeaderType = (value) => {
  switch (value) {
    case 'h1':
      return '4xl'
    default: 'md'
  }
}

const Header = ({
  children,
  headerType,
  headerVariant,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant={headerVariant}
      as={headerType}
      size={HeaderType(headerType)}
    >{children}</Heading>

  );
}

const Header1 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="standardHeader"
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
      variant="standardHeader"
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
      variant="standardHeader"
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
      variant="standardHeader"
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
      variant="standardHeader"
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
      variant="standardSubtitle"
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
      variant="standardSubtitle"
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
      variant="standardSubtitle"
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
      variant="standardSubtitle"
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
      variant="standardSubtitle"
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
      variant="standardSubtitle"
      as="h6"
      size="md"
    >{children}</Heading>

  );
}

const ShadowHeader1 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="pageHeaderTitle"
      as="h1"
      size="4xl"
    >{children}</Heading>

  );
}

const ShadowHeader2 = ({
  children,
  ...props
}) => {

  return (
    <Heading
      color={{ ...props.color }}
      as="h2"
      size="3xl"
    >{children}</Heading>

  );
}

const ShadowHeader3 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="pageHeaderTitle"
      as="h3"
      size="2xl"
    >{children}</Heading>

  );
}

const ShadowHeader4 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="pageHeaderTitle"
      as="h4"
      size="xl"
    >{children}</Heading>

  );
}

const ShadowHeader5 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="pageHeaderTitle"
      as="h5"
      size="lg"
    >{children}</Heading>

  );
}

const ShadowHeader6 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="pageHeaderTitle"
      as="h6"
      size="md"
    >{children}</Heading>

  );
}

const ShadowSubtitle1 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="pageHeaderSubtitle"
      as="h1"
      size="4xl"
    >{children}</Heading>

  );
}

const ShadowSubtitle2 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="pageHeaderSubtitle"
      as="h2"
      size="3xl"
    >{children}</Heading>

  );
}

const ShadowSubtitle3 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="pageHeaderSubtitle"
      as="h3"
      size="2xl"
    >{children}</Heading>

  );
}

const ShadowSubtitle4 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="pageHeaderSubtitle"
      as="h4"
      size="xl"
    >{children}</Heading>

  );
}

const ShadowSubtitle5 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="pageHeaderSubtitle"
      as="h5"
      size="lg"
    >{children}</Heading>

  );
}

const ShadowSubtitle6 = ({
  children,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="pageHeaderSubtitle"
      as="h6"
      size="md"
    >{children}</Heading>

  );
}

export {
  Header,
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
  Subtitle6,
  ShadowHeader1,
  ShadowHeader2,
  ShadowHeader3,
  ShadowHeader4,
  ShadowHeader5,
  ShadowHeader6,
  ShadowSubtitle1,
  ShadowSubtitle2,
  ShadowSubtitle3,
  ShadowSubtitle4,
  ShadowSubtitle5,
  ShadowSubtitle6,
};
