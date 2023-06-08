import React from "react";
import MarkdownContent from "./helpers/Markdown";
import { Heading, Box, Flex, Card, CardBody } from "@chakra-ui/react";
import { Header, Subtitle } from "./helpers/Header";
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
              <MarkdownContent
              >
                {carouselTestimonial}
              </MarkdownContent>
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
                <Header
                  headerType='h6'>
                  {carouselTestimonialAuthor}
                </Header>

              )}
              {carouselTestimonialAuthorAttribute && (
                <Subtitle
                  headerType='h6'>
                  {carouselTestimonialAuthorAttribute}
                </Subtitle>
              )}
            </div>
          )}
        </ContainerLayout>
      </CardBody>

    </Card>
  );
}

export default CarouselBanner;
