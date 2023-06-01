import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
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
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'brand.mwRed',
      color: 'brand.mwRed',
      _hover: {
        bg: 'brand.mwRed',
        color: 'brand.mwWhite'
      }
    },
    solid: {
      bg: 'brand.mwRed',
      color: 'white',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
})

export default Button;