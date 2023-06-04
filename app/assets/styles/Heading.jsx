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
            position: "relative",
            display: "inline-block",
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
                bg: 'brand.mwBlue',
            },
            _after: {
                content: '""',
                position: "absolute",
                display: "block",
                width: "3rem",
                right: 0,
                top: "calc(50% - 0.125rem)",
                height: "0.125rem",
                bg: 'brand.mwBlue',
            }
        },
        standardTitle: {
            color: 'brand.mwGrey',
        },
    },
    // The default size and variant values
    defaultProps: {
        variant: 'standardTitle',
    },
})

export default Heading;