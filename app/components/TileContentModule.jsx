import React from "react";
import { Link } from "react-router-dom";
import CTAModule from "./CTAModule";
import { Heading } from "@chakra-ui/react";
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
        className={`icon is-rounded ${
          iconLarger === true ? "is-larger-x2" : "is-large-x2"
        } ${iconColor && `has-background-${iconColor}`} ${
          customIconClasses && `${customIconClasses}`
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
        className={`icon ${
          iconLarger === true ? "is-larger-x2" : "is-large-x2"
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

  return (
    <div className={`column ${columnWidths ? columnWidths : null}`}>
      <div
        className={`box ${isHoverable ? "is-hoverable" : null} ${
          !!iconColor
            ? tileBackground(iconColor)
            : tileColour
            ? "has-background-" + tileColour
            : null
        } ${tilePadding ? "p-" + tilePadding : null} ${
          tileRadius ? "is-rounded-" + tileRadius : null
        }`}
      >
        <div className="tile-header is-justify-content-center pb-5">
          <div className="is-block">
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
          </div>
        </div>
        <div className={`tile-body is-align-top  ${link ? "pb-5" : ""} `}>
          {title || children ? (
            <div
              className={`content ${
                tileTextColourDark === true ? "has-text-dark" : ""
              }`}
            >
              {title && (
                <div className="block">
                  <Header5>
                    {title}
                  </Header5>
                </div>
              )}
              {children && <div className="block">{children}</div>}
            </div>
          ) : null}
        </div>
        {link ? (
          <div className="tile-footer pt-5">
            <div
              className={`content ${
                tileTextColourDark === true ? "has-text-dark" : ""
              }`}
            >
              <CTAModule ctaLink={link} ctaCopy={ctaLinkName ? ctaLinkName : "Find out more"} />

            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default TileContentModule;
