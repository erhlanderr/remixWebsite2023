import { defineStyleConfig } from '@chakra-ui/react'

const Heading = defineStyleConfig({
    // The styles all button have in common
    baseStyle: {
        fontWeight: 'normal',
        lineHeight: "tall",
    },
    // Two variants: outline and solid
    variants: {
        decoratedTitle: {
            fontWeight: "500",
            position: "relative",
            display: "inline-block",                
            textAlign: "center",
            margin: "auto",
            px: "3.75rem",
            _before: {
                content: '""',
                position: "absolute",
                display: "block",
                width: "3rem",
                left: 0,
                top: "calc(50% - 0.125rem)",
                height: "0.125rem",
                bg: 'brand.mwPrimary',
            },
            _after: {
                content: '""',
                position: "absolute",
                display: "block",
                width: "3rem",
                right: 0,
                top: "calc(50% - 0.125rem)",
                height: "0.125rem",
                bg: 'brand.mwPrimary',
            }
        },
        standardTitle: {
            color: 'brand.mwPrimaryText',
            fontWeight: "400",
        },
        standardSubtitle: {
            color: 'brand.mwPrimaryText',
            fontWeight: "200",
        },
        pageHeaderTitle: {
            color: 'brand.mwPrimaryText',
            fontWeight: "400",
            textShadow: 'textShadow'
        },
        pageHeaderSubtitle: {
            color: 'brand.mwPrimaryText',
            fontWeight: "200",
            textShadow: 'textShadow'
        },
    },
    // The default size and variant values
    defaultProps: {
        variant: 'standardTitle',
    },
})

export default Heading;