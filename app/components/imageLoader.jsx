import React from "react";
import {
    Image,
} from "@chakra-ui/react";
// import { LazyLoadImage } from "react-lazy-load-image-component";

function ImageLoader({
  imageUrl,
  imageAlt,
  imageRatioDesktop,
  imageRatioMobile,
}) {
  return (
    <>
    <Image src={imageUrl} />
      {/* <LazyLoadImage
        style={{ objectFit: "contain" }}
        wrapperClassName={`image has-ratio ${
          imageRatioDesktop ? "is-" + imageRatioDesktop : "is-3by2"
        } ${imageRatioMobile ? "is-" + imageRatioMobile : "is-3by2"}`}
        alt={imageAlt}
        src={imageUrl}
        effect="opacity"
      /> */}
    </>
  );
}

export default ImageLoader;
