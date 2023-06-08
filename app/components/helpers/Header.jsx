import React from "react";
import { Heading, Box, theme, withDefaultVariant } from "@chakra-ui/react";

const HeaderType = (value) => {
  switch (value) {
    case 'h1':
      return '4xl'
    case 'h2':
      return '3xl'
    case 'h3':
      return '2xl'
    case 'h4':
      return 'xl'
    case 'h5':
      return 'lg'
    case 'h6':
      return 'md'
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
      variant={headerVariant ? headerVariant : "standardTitle"}
      as={headerType}
      size={HeaderType(headerType)}
    >{children}</Heading>

  );
}

const Subtitle = ({
  children,
  headerType,
  headerVariant,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="standardSubtitle"
      as={headerType}
      size={HeaderType(headerType)}
    >{children}</Heading>

  );
}

const DecoratedHeader = ({
  children,
  headerType,
  headerVariant,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="decoratedTitle"
      as={headerType}
      size={HeaderType(headerType)}
    >{children}</Heading>

  );
}

const ShadowHeader = ({
  children,
  headerType,
  headerVariant,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="pageHeaderTitle"
      as={headerType}
      size={HeaderType(headerType)}
    >{children}</Heading>

  );
}

const ShadowSubtitle = ({
  children,
  headerType,
  headerVariant,
  ...props
}) => {
  return (
    <Heading
      color={{ ...props.color }}
      variant="pageHeaderSubtitle"
      as={headerType}
      size={HeaderType(headerType)}
    >{children}</Heading>

  );
}



export {
  Header,
  Subtitle,
  DecoratedHeader,
  ShadowHeader,
  ShadowSubtitle 
};
