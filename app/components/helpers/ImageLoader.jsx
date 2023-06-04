import React from "react";
import { Image, AspectRatio, Box, Flex } from "@chakra-ui/react";

const BackgroundImageLoader = ({
    imageUrl,

}) => {
    // <Flex h={"100%"}>
        {/* <Box /> */}
        <Box position={'absolute'} top={0} bottom={0} left={0} right={0} backgroundImage={`url(${"https://wa-methodworx-website-cms.azurewebsites.net" + imageUrl})`} />
    // </Flex>
}

const ImageLoader = ({
    imageUrl,
    imageAlt,
    imageRatioDesktop,
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

export { ImageLoader, BackgroundImageLoader };
