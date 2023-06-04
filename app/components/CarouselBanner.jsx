import React from "react";
import Markdown from "markdown-to-jsx";
import { Heading, Box, Flex, Card, CardBody } from "@chakra-ui/react";
import { Header6, Subtitle6 } from "./helpers/Header";
import ContainerLayout from "./layout/ContainerLayout";

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
    <Card variant="backgroundOverlay"
      backgroundImage={`url(${"https://wa-methodworx-website-cms.azurewebsites.net" + carouselBackgroundImage})`}
    >

      <CardBody>
        <ContainerLayout>
          <blockquote>
            <Flex>
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
            </Flex>

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
                <Subtitle6>
                  {carouselTestimonialAuthorAttribute}
                </Subtitle6>
              )}
            </div>
          )}
        </ContainerLayout>
      </CardBody>

    </Card>
  );
}

export default CarouselBanner;
