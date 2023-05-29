import React from "react";
import { Link } from "react-router-dom";
import {
  SimpleGrid,
  Text,
  Heading,
  Box
} from "@chakra-ui/react";
import CTAModule from "./CTAModule";
import { Header2, Subtitle4 } from "./helpers/Header";

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
          <Header2>{title}</Header2>
        </Box>
      ) : null}
      {(subtitle || ctaLink) && (
        <div
          className={`content ${textAlign ? "has-text-" + textAlign : "has-text-centered"
            }`}
        >
          {subtitle ? (
            <div className="block">
              <Subtitle4
                className={`has-text-centered ${subtitleBold ? "" : "has-text-weight-normal"}`}
              >
                {subtitle}
              </Subtitle4>
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
