import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Header5 } from "./helpers/Header";

function IconContentModule({
  title,
  children,
  icon,
  image,
  iconAlt,
  iconLink,
  iconLarger,
  iconColor,
  customIconClasses,
  columnDesktop,
  columnTablet,
  columnMobile,
}) {
  return (
    <div
      className={`column is-flex is-flex-direction-column ${columnDesktop ? "is-" + columnDesktop + "-desktop" : null
        } ${columnTablet ? "is-" + columnTablet + "-tablet" : null} ${columnMobile ? "is-" + columnMobile + "-mobile" : "is-12-mobile"
        }`}
    >
      <Box>
        <Box display="flex">
          <>
            {iconLink ? (
              <Link to={iconLink}>
                <div
                  className={`icon is-rounded ${iconLarger === true ? "is-larger-x2" : "is-large-x2"
                    } ${iconColor && `has-background-${iconColor}`} ${customIconClasses && `${customIconClasses}`
                    }`}
                >
                  {icon && <i className={`fas fa-${icon} fa-2x`}></i>}
                  {image && (
                    <img
                      src={image}
                      alt={iconAlt ? iconAlt : "MethodWorx"}
                    />
                  )}
                </div>
              </Link>
            ) : (
              <div
                className={`icon is-rounded ${iconLarger === true ? "is-larger-x2" : "is-large-x2"
                  } ${iconColor && `has-background-${iconColor}`} ${customIconClasses && `${customIconClasses}`
                  }`}
              >
                {icon && <i className={`fas fa-${icon} fa-2x`}></i>}
                {image && (
                  <img
                    src={image}
                    alt={iconAlt ? iconAlt : "MethodWorx"}
                  />
                )}
              </div>
            )}
          </>
        </Box>
      </Box>

      {title || children ? (
        <div className="block">
          <div className="content">
            {title && (
              <div className="block">
                <Header5>
                  {title}
                </Header5>
              </div>
            )}
            {children && <div className="block">{children}</div>}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default IconContentModule;
