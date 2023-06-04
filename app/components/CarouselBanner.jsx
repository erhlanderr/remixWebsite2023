import React from "react";
import Markdown from "markdown-to-jsx";
import { Heading } from "@chakra-ui/react";
import { Header6 } from "./helpers/Header";

function CarouselBanner({
  carouselTestimonial,
  carouselTestimonialAuthor,
  carouselTestimonialAuthorAttribute,
  carouselBackgroundImage,
  carouselOverlayBackgroundColor,
  carouselCtaLink,
  carouselStarRating,
  carouselQuoteLeft,
  carouselQuoteRight,
}) {
  // var stars = [];

  // for (var i = 0; i < carouselStarRating; i++) {
  //   stars.push(
  //     <div className="level-item is-shrinkable is-narrow">
  //       <span className="icon is-large">
  //         <i className="w-100 h-100 fas fa-star"></i>
  //       </span>
  //     </div>
  //   );
  // }

  return (
    <div className="section-child is-relative h100 is-flex is-align-items-center">
      <div
        className={`overlay is-absolutely-fixed zi-1 ${
          !carouselOverlayBackgroundColor
            ? "has-background-primary-darker is-opacity-6"
            : "has-background-primary-darker-" + carouselOverlayBackgroundColor
        }`}
      ></div>
      {carouselBackgroundImage && (
        <div
          className="background-image"
          style={{ backgroundImage: `url(${carouselBackgroundImage})` }}
        ></div>
      )}

      <div className="container is-relative zi-2">
        <div className="columns">
          <div className="column">
            <div className="box testimonial is-large">
              <div className="card-content">
                <div className="columns">
                  <div className="column">
                    <div className=" has-text-centered has-text-white">
                      <blockquote>
                        {carouselQuoteLeft === false ? null : (
                          <span className="icon quote has-text-white is-opacity-3">
                            <i className="fas fa-quote-left"></i>
                          </span>
                        )}
                        <div className="is-flex is-flex-direction-column">
                          {/* {carouselStarRating > 0 && (
                            <div className="level is-mobile is-justify-content-center is-shrinkable">
                              {stars}
                            </div>
                          )} */}
                          {/* <p className="is-size-4 is-size-6-mobile"> */}
                            <Markdown
                              options={{
                                overrides: {
                                  ul: {
                                    props: {
                                      className: "custom-list is-medium",
                                    },
                                  },
                                  blockquote: {
                                    props: {
                                      className: "blog-testimonial is-medium",
                                    },
                                  },
                                },
                              }}
                            >
                              {carouselTestimonial}
                            </Markdown>
                          {/* </p> */}
                        </div>
                        {carouselQuoteRight === false ? null : (
                          <span className="icon quote has-text-white is-opacity-1">
                            <i className="fas fa-quote-right"></i>
                          </span>
                        )}
                      </blockquote>
                      {!carouselTestimonialAuthor &&
                      !carouselTestimonialAuthorAttribute ? null : (
                        <div className="attribute">
                          {carouselTestimonialAuthor && (
                            <Header6>
                              {carouselTestimonialAuthor}
                            </Header6>
                            
                          )}
                          {carouselTestimonialAuthorAttribute && (
                            <p className="subtitle is-7">
                              {carouselTestimonialAuthorAttribute}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselBanner;
