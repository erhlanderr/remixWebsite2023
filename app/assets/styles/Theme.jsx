import { extendTheme } from '@chakra-ui/react';

import Button from "./Button";
import Heading from "./Heading";
import SectionStyles from "./sectionStyles";
import { CardStyles } from "./CardStyles"


const sizes = {
    fontSizes: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'md': '1rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
        '4xl': '3rem',
    },
}


const Theme = extendTheme({
    components: {
        Button,
        Heading,
        Card: CardStyles
    },
    layerStyles: {
        mediumSection: {
            paddingTop: 0,
            paddingY: 4,
            paddingBottom: 4,
        },
    },
    colors: {
        brand: {
            mwBlue: "#2fb8ca",
            mwRed: "#ff8d85",
            mwGrey: "#4a4a4a",
            mwWhite: "#ffffff",
            mwOverlay: "rgba(10,10,10,0.5)",
        }
    },
    fonts: {
        heading: "Quicksand",
        body: "Open Sans",
    },
    shadows: {
        textShadow: '0 .0625rem .25rem rgba(10,10,10,.3)!important'
      },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "21px",
        "3xl": "24px",
        "4xl": "32px",
        "5xl": "34px",
        "6xl": "40px",
        "7xl": "48px"
    },
    variants: {
        'textShadow': {
            boxShadow: '0 0 44px 0 rgb(0 0 0 / 8%)',
        },
    },

    styles: {
        global: {
            body: {
                color: 'brand.mwGrey',
            },
            p: {
                color: 'brand.polarText',
            }
        },
    },
})

export default Theme;