import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    border: '3px solid',
    fontWeight: 'bold',
    position: "relative",
    height: 'initial',
    minHeight: "3rem",
    borderRadius: 0, // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 4, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'md',
      minHeight: "3rem",
      px: 5, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
    lg: {
      border: '4px solid',
      fontSize: 'lg',
      minHeight: "3.5rem",
      px: 5, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outlinePrimary: {
      borderColor: 'brand.mwPrimary',
      color: 'brand.mwWhite',
      textTransform: 'uppercase',
      _hover: {
        bg: 'brand.mwPrimary',
        color: 'brand.mwWhite'
      }
    },
    outlineSecondary: {
      borderColor: 'brand.mwRed',
      color: 'brand.mwRed',
      textTransform: 'uppercase',
      _hover: {
        bg: 'brand.mwRed',
        color: 'brand.mwWhite'
      }
    },
    white: {      
      borderColor: 'brand.mwWhite',
      color: 'brand.mwWhite',
      textTransform: 'uppercase',
      _hover: {
        bg: 'brand.mwWhite',
        color: 'brand.mwPrimaryDark'
      }
    },    
    solid: {
      bg: 'brand.mwRed',
      textTransform: 'uppercase',
      color: 'white',
    },
    navlink: {
      border: "0px none", 
      color: 'brand.mwPrimaryText',
      padding: 0,
      textAlign: "left",
      minHeight: 0,
      _hover: {
        color: 'brand.mwPrimaryText'
      }
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outlineSecondary',
  },
})

export default Button;