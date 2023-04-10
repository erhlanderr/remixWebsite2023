import React from "react";
import SectionWrappers from "../components/sectionWrappers";
import Carousel from "../components/Carousel";
import CarouselTile from "../components/CarouselTile";

function SectionWrappedArticleCarousel({
  componentKey,
  tiles,
  slideMobilePad,
  carouselTileColour,
  sectionBackgroundColour,
  textAlignment,
  carouselIconLarger,
  sectionSize,
  hasReadMore,
  $type,
}) {
  var settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 0,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      }
    ],
  };
  return (
    <SectionWrappers
      type={$type}
      sectionSize={sectionSize}
      sectionIsEqual={true}
      sectionIsFluid={true}
      sectionCustomClasses="pl-0 pr-0 are-overlay-transition is-relative slider"
      sectionBackgroundColour={sectionBackgroundColour}
      noContainer={true}
    >
      <Carousel
        hasNavButtons={true}
        hasNavBullets={true}
        element={componentKey}
        slideMobilePad={true}
        settings={settings}
      >
        {tiles.map((carousel, i) => (
          <CarouselTile
            key={carousel.key || i}
            {...carousel}
            hasReadMore={hasReadMore}
            carouselTileColour={carouselTileColour}
            carouselIconLarger={carouselIconLarger}
            textAlignment={textAlignment}
          />
        ))}
      </Carousel>
    </SectionWrappers>
  );
}

export default SectionWrappedArticleCarousel;
