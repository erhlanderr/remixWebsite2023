import React from "react";

import Carousel from "../components/Carousel";
import CarouselBanner from "../components/CarouselBanner";

function SectionWrappedCarousel({
  componentKey,
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
  );
}

export default SectionWrappedCarousel;
