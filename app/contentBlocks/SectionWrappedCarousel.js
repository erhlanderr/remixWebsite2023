import React from "react";
import SectionWrappers from "../components/sectionWrappers";
import Carousel from "./Carousel";
import CarouselBanner from "./partials/CarouselBanner";

function SectionWrappedCarousel({
  componentKey,
  sectionSize,
  sectionIsEqual,
  sectionIsFluid,
  sectionHasBackground,
  noContainer,
  carousels,
}) {
  const renderCarouselBanner = (item) => {
    return (
      <CarouselBanner
        key={item.key}
        carouselTestimonial={item.carouselTestimonial}
        carouselTestimonialAuthor={item.carouselTestimonialAuthor}
        carouselTestimonialAuthorAttribute={
          item.carouselTestimonialAuthorAttribute
        }
        carouselStarRating={item.carouselStarRating}
        carouselBackgroundImage={item.carouselBackgroundImage}
      ></CarouselBanner>
    );
  };
  return (
    <SectionWrappers
      sectionSize={sectionSize}
      sectionIsFluid={sectionIsFluid}
      sectionIsEqual={sectionIsEqual || true}
      sectionCustomClasses="is-padded-parent"
      noContainer={noContainer || true}
      sectionHasBackground={sectionHasBackground}
    >
      <Carousel
        element={componentKey}
        options={{
          type: "carousel",
          perView: 1,
          focusAt: "center",
          autoplay: 3000,
          gap: 0,
          dragThreshold: 120,
        }}
      >
        {carousels.map((item) => renderCarouselBanner(item))}
      </Carousel>
    </SectionWrappers>
  );
}

export default SectionWrappedCarousel;
