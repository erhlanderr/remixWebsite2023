import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
    // define the part you're going to style
    container: {
        borderRadius: 0,
        display: 'flex',
        direction: 'column',
        minH: "24rem"
    },
    header: {
        padding: 4,
    },
    body: {
        padding: 4
    },
    footer: {
        padding: 4
    }
})

const variants = {
    standardCards: definePartsStyle({
        container: {
            borderRadius: 0,
            display: 'flex',
            direction: 'column',
            minH: "24rem"
        },
        header: {
            padding: 4,
        },
        body: {
            padding: 4
        },
        footer: {
            padding: 4
        }
    }),
    iconCard: definePartsStyle({
        container: {
            padding: 6,
            borderRadius: 12,
            textAlign: "center",
        },
        header: {
            padding: 0,
        },
        body: {
            padding: 0
        },
        footer: {
            padding: 0,
            justifyContent: "center"
        }
    }),
    backgroundOverlay: definePartsStyle({
        container: {
            color: "white",
            textAlign: "center",
            position: "relative",
            justifyContent: "space-between",
            paddingY: 24,
            minH: null,
            _after: {
                content: '""',
                position: "absolute",
                display: "block",
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                bg: 'brand.mwOverlay',
                zIndex: 1

            }
        },
        header: {
            zIndex: 2,
        },
        body: {
            zIndex: 2
        },
        footer: {
            zIndex: 2
        }

    })

};


const defaultProps = {
    // in this example, we will set the default size and variant
    size: 'xl',
    variant: 'standardCards',
}

const sizes = {
    md: definePartsStyle({
        container: {
            borderRadius: '0px',
        },
    }),
}

export const CardStyles = defineMultiStyleConfig({ baseStyle, sizes, defaultProps, variants })