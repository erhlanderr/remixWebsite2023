import React from "react";
import { Link } from "react-router-dom";
import {
  SimpleGrid,
  Text,
  Heading,
  Box
} from "@chakra-ui/react";
import CTAModule from "./CTAModule";

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
          <Heading as={"h2"}>{title}</Heading>
        </Box>
      ) : null}
      {(subtitle || ctaLink) && (
        <div
          className={`content ${textAlign ? "has-text-" + textAlign : "has-text-centered"
            }`}
        >
          {subtitle ? (
            <div className="block">
              <h4
                className={`subtitle is-4 is-line-height-medium has-text-centered ${subtitleBold ? "" : "has-text-weight-normal"
                  }`}
              >
                {subtitle}
              </h4>
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
