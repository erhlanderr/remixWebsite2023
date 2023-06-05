import React from "react";
import { Link } from "react-router-dom";
import CTAModule from "./CTAModule";
import { Heading, Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";
import { Header5 } from "./helpers/Header";

function TileContentModule({
  title,
  children,
  icon,
  link,
  iconLarger,
  iconColor,
  customIconClasses,
  numericalIcons,
  columnWidths,
  ctaLinkName,
  tileColour,
  tilePadding,
  tileRadius,
  isHoverable,
  image,
  scaleDown,
  altImageText,
  thisTileColour,
  tileTextColourDark,
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
    switch (colour) {
      case "dark":
        return "has-background-" + colour;
      case "light":
        return "has-background-" + colour;
      case "white":
        return "has-background-" + colour;
      default:
        return "has-background-" + colour + "-opacity-3";
    }
  };

  console.log("tileColour ==> ", tileColour)
  console.log("iconColor ==> ", iconColor)

  return (
    <Card backgroundColor={!!iconColor
      ? tileBackground(iconColor)
      : tileColour}>
      <CardHeader>

        {icon ? (
          link ? (
            <Link to={link}>
              {hasIcon({
                iconLarger,
                iconColor,
                customIconClasses,
                numericalIcons,
                icon,
              })}
            </Link>
          ) : (
            hasIcon({
              iconLarger,
              iconColor,
              customIconClasses,
              numericalIcons,
              icon,
            })
          )
        ) : link ? (
          <Link to={link}>
            {hasImage({ altImageText, image, scaleDown })}
          </Link>
        ) : (
          hasImage({ altImageText, image, scaleDown })
        )}
      </CardHeader>
      <CardBody>
        {title && (
          <Header5>
            {title}
          </Header5>
        )}
        {children && <Text>{children}</Text>}
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
