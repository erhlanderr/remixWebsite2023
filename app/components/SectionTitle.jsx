import React from "react";
import { Link } from "react-router-dom";
import {
  SimpleGrid,
  Text,
  Heading,
  Box
} from "@chakra-ui/react";
import CTAModule from "./CTAModule";
import { DecoratedHeader, Subtitle } from "./helpers/Header";

function SectionTitle({
  title,
  subtitle,
  subtitleBold,
  textAlign,
  ctaTitle,
  ctaLink,
  ctaStyle,
  children,
}) {
  return (
    <>
      {title ? (
        <Box textAlign={textAlign}>
          <DecoratedHeader headerType="h2" decorated='decoratedTitle'>{title}</DecoratedHeader>
        </Box>
      ) : null}
      {(subtitle || ctaLink) && (
        <div
          className={`${textAlign ? "has-text-" + textAlign : "has-text-centered"
            }`}
        >
          {subtitle ? (
            <div className="block">
              <Subtitle headerType="h4"
              >
                {subtitle}
              </Subtitle>
            </div>
          ) : null}
          {ctaTitle && ctaLink ? (
            <div className="block">
              {/* <CTAModule */}
              <Link className={`button ${!ctaStyle ? null : `is-${ctaStyle}`}`}>
                Contact us
              </Link>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}

export default SectionTitle;
