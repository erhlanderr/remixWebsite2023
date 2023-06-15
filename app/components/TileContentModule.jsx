import React from "react";
import { Link } from "react-router-dom";
import CTAModule from "./CTAModule";
import { Card, CardHeader, CardBody, CardFooter, Text, Box } from "@chakra-ui/react";
import { Header } from "./helpers/Header";
import { IconHelper } from "./helpers/Icons";

function TileContentModule({
  title,
  children,
  icon,
  link,
  iconLarger,
  iconColor,
  ctaLinkName,
  tileColour,
}) {
  const hasIcon = ({
    iconLarger,
    iconColor,
    customIconClasses,
    numericalIcons,
    icon,
  }) => {
    return (
      <div
        className={`icon is-rounded ${iconLarger === true ? "is-larger-x2" : "is-large-x2"
          } ${iconColor && `has-background-${iconColor}`} ${customIconClasses && `${customIconClasses}`
          }`}
      >
        {numericalIcons ? (
          <span className="is-size-2 has-text-weight-bold">{icon}</span>
        ) : icon === true ? (
          <i className="fas fa-laptop-code fa-2x"></i>
        ) : (
          <i className={`fas fa-${icon} fa-2x`}></i>
        )}
      </div>
    );
  };

  const hasImage = ({ altImageText, image, scaleDown }) => {
    return (
      <figure
        className={`icon ${iconLarger === true ? "is-larger-x2" : "is-large-x2"
          }`}
      >
        <img
          alt={!!altImageText ? altImageText : "MethodWorx"}
          src={image}
          style={
            scaleDown === true
              ? { objectFit: "scale-down" }
              : { objectFit: "contain" }
          }
        />
      </figure>
    );
  };

  const tileBackground = (colour) => {
    console.log("tileColour ==> ", colour)
    switch (colour) {
      case "primary":
        return "brand.mwPrimaryTile"
      case "secondary":
        return "brand.mwSecondaryTile"
      case "tertiary":
        return "brand.mwTertiaryTile"
    }
  };
  
  return (
    <Card variant={"iconCard"} textAlign={'center'} backgroundColor={!!iconColor
      ? tileBackground(iconColor)
      : tileColour}>
      <CardHeader>
        {icon && <IconHelper icon={icon} />}
      </CardHeader>

      <CardBody>
        {title && (
          <Box pb={children && 6}>
            <Header headerType="h5">
              {title}
            </Header>
          </Box>
        )}
        {children && <Box>{children}</Box>}
      </CardBody>
      {link ? (
        <CardFooter>
          <CTAModule ctaLink={link} ctaCopy={ctaLinkName ? ctaLinkName : "Find out more"} />
        </CardFooter>
      ) : null}
    </Card >
  );
}

export default TileContentModule;
