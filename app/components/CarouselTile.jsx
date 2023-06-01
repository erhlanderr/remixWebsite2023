import React from "react";
import { Link } from "react-router-dom";
import ExpandingTextBox from "./ExpandingTextBox";
import { Header5 } from "./helpers/Header";
import ImageLoader from "./helpers/ImageLoader";

function CarouselTile({
  carouselTitle,
  carouselCopy,
  carouselImage,
  carouselImageAlt,
  carouselCtaLink,
  carouselCtaCopy,
  carouselImageSize,
  carouselIcon,
  carouselIconLarger,
  carouselIconColor,
  carouselCustomIconClasses,
  carouselNumericalIcons,
  carouselTileColour,
  carouselThisTileColour,
  textAlignment,
}) {
  const cardImage = ({
    carouselImageSize,
    carouselImage,
    carouselImageAlt,
  }) => {
    return (
      <div className="card-image">
        <article className="tile">
          {/* <figure
            className={`image ${carouselImageSize ? "is-" + carouselImageSize : "is-3by2"
              }`}
          >
            <div className="overlay">
              <div className="overlay-content">
                <div className="overlay-body">
                  <span className="icon is-large">
                    <i className={`fas fa-3x fa-search-plus`}></i>
                  </span>
                </div>
              </div>
            </div> */}
            <ImageLoader 
            imageUrl={carouselImage}
            imageAlt={carouselImageAlt}
            />
            {/* <img
              className="image lazy"
              src={carouselImage}
              alt={carouselImageAlt}
            /> */}
          {/* </figure> */}
        </article>
      </div>
    );
  };

  const cardIcon = ({
    carouselIconLarger,
    carouselIconColor,
    carouselCustomIconClasses,
    carouselNumericalIcons,
    carouselIcon,
    carouselTileColour,
    carouselThisTileColour,
  }) => {
    return (
      <div className="card-header has-background-transparent is-relative is-flex-direction-row is-justify-content-center">
        <div
          className={`icon is-rounded is-relative zi-2 ${carouselIconColor === carouselThisTileColour && "has-inset-border"
            } ${carouselIconLarger === true ? "is-larger-x2" : "is-large-x2"} ${carouselIconColor && `has-background-${carouselIconColor}`
            } ${carouselCustomIconClasses && `${carouselCustomIconClasses}`}`}
        >
          {carouselNumericalIcons ? (
            <span className="is-size-2 has-text-weight-bold">
              {carouselIcon}
            </span>
          ) : carouselIcon === true ? (
            <i className="fas fa-laptop-code fa-2x"></i>
          ) : (
            <i className={`fas fa-${carouselIcon} fa-2x`}></i>
          )}
        </div>
        <div
          className={`is-half-filled zi-1 ${carouselThisTileColour
              ? "has-background-" + carouselThisTileColour
              : carouselTileColour
                ? "has-background-" + carouselTileColour
                : "has-background-white"
            }`}
        ></div>
      </div>
    );
  };

  return (
    <div
      className={`box ${textAlignment ? "has-text-" + textAlignment : "has-text-left"
        }`}
    >
      {carouselImage &&
        (carouselCtaLink ? (
          <Link to={carouselCtaLink}>
            {cardImage({
              carouselImageSize,
              carouselImage,
              carouselImageAlt,
            })}
          </Link>
        ) : (
          cardImage({
            carouselImageSize,
            carouselImage,
            carouselImageAlt,
          })
        ))}

      {carouselIcon &&
        (carouselCtaLink ? (
          <Link to={carouselCtaLink}>
            {cardIcon({
              carouselIconLarger,
              carouselIconColor,
              carouselCustomIconClasses,
              carouselNumericalIcons,
              carouselIcon,
              carouselTileColour,
              carouselThisTileColour,
            })}
          </Link>
        ) : (
          cardIcon({
            carouselIconLarger,
            carouselIconColor,
            carouselCustomIconClasses,
            carouselNumericalIcons,
            carouselIcon,
            carouselTileColour,
            carouselThisTileColour,
          })
        ))}

      {(carouselTitle || carouselCtaLink) && (
        <div
          className={`card-content is-justify-content-space-between ${carouselIcon ? (carouselIconLarger === true ? "pb-7" : "pb-6") : ""
            } ${carouselThisTileColour
              ? "has-background-" + carouselThisTileColour
              : carouselTileColour
                ? "has-background-" + carouselTileColour
                : "has-background-white"
            }`}
        >
          {(carouselTitle || carouselCopy) && (
            <div>
              <div className="block">
                {!carouselTitle ? null : (
                  <Header5>
                    {carouselTitle}
                  </Header5>
                )}
                {carouselCopy && (
                  <ExpandingTextBox textBoxCopy={carouselCopy} />
                )}
              </div>
            </div>
          )}
          {!carouselCtaLink ? null : (
            <div>
              <div className="block">
                <Link
                  to={carouselCtaLink}
                  className="button"
                  title={`${carouselTitle || carouselCtaCopy}`}
                >
                  {carouselCtaCopy}
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CarouselTile;
