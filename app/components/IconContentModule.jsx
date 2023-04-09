import React from "react";
import { Link } from "react-router-dom";

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
      className={`column is-flex is-flex-direction-column ${
        columnDesktop ? "is-" + columnDesktop + "-desktop" : null
      } ${columnTablet ? "is-" + columnTablet + "-tablet" : null} ${
        columnMobile ? "is-" + columnMobile + "-mobile" : "is-12-mobile"
      }`}
    >
      <div className="block">
        <div className="is-inline-block">
          <>
            {iconLink ? (
              <Link to={iconLink}>
                <div
                  className={`icon is-rounded ${
                    iconLarger === true ? "is-larger-x2" : "is-large-x2"
                  } ${iconColor && `has-background-${iconColor}`} ${
                    customIconClasses && `${customIconClasses}`
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
                className={`icon is-rounded ${
                  iconLarger === true ? "is-larger-x2" : "is-large-x2"
                } ${iconColor && `has-background-${iconColor}`} ${
                  customIconClasses && `${customIconClasses}`
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
        </div>
      </div>

      {title || children ? (
        <div className="block">
          <div className="content">
            {title && (
              <div className="block">
                <h4 className="title is-5">{title}</h4>
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
