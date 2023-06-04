import React, { useEffect, useState } from "react";
import { Image, AspectRatio } from "@chakra-ui/react";

const ImageLoader = ({
    imageUrl,
    imageAlt,
    imageRatioDesktop,
    imageRatioMobile,
    imageSize,
}) => {

    const splitRatioStr = (ratioStr) => {
        switch (ratioStr) {
            case "1by1": 
                return 1 / 1
            case "2by1":
                return 2 / 1
            case "3by1":
                return 3 / 1
            case "3by2":
                return 3 / 2;
        
            default:
                break;
        }
    }
    // console.log("imageRatioDesktop ==> ", imageRatioDesktop);
    // console.log("imageRatioMobile ==> ", imageRatioMobile);
    // console.log("imageUrl ==> ", imageUrl);

    return (
        <AspectRatio ratio={imageRatioDesktop != undefined ? splitRatioStr(imageRatioDesktop) : 3 / 2} width="100%">
            <Image src={`https://wa-methodworx-website-cms.azurewebsites.net` + imageUrl} fit='contain' alt={imageAlt} />
        </AspectRatio>
    );
}

export default ImageLoader;
