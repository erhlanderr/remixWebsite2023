import React from "react";
import { Image, AspectRatio, Box, Flex } from "@chakra-ui/react";

const BackgroundImageLoader = ({
    imageUrl,

}) => {
    return (
        <React.Fragment>
            <Box backgroundColor="brand.mwDark" mixBlendMode={'multiply'} zIndex={2} w={'100%'} h={'100%'} top={0} right={0} opacity={0.4} position={'absolute'} />
            <Box
                position={'absolute'}
                top={0}
                bottom={0}
                left={0}
                right={0}
                backgroundPosition={'center center'}
                backgroundSize={'cover'}
                backgroundRepeat={'no-repeat'}
                backgroundImage={`url(${"https://wa-methodworx-website-cms.azurewebsites.net" + imageUrl})`} />
        </React.Fragment>)
}

const ImageLoader = ({
    imageUrl,
    imageAlt,
    imageRatioDesktop,
    containImage
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

    return (
        <AspectRatio ratio={imageRatioDesktop != undefined ? splitRatioStr(imageRatioDesktop) : 3 / 2} width="100%">
            <Image style={{ objectFit: containImage ? 'contain' : 'cover' }} src={`https://wa-methodworx-website-cms.azurewebsites.net` + imageUrl} alt={imageAlt} />
        </AspectRatio>
    );
}

export { ImageLoader, BackgroundImageLoader };
