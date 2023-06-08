import { defineStyleConfig } from '@chakra-ui/react'

const Links = defineStyleConfig({
 
  variants: {
    bodyLinks: {
      color: 'brand.mwPrimary',
      _hover: {
        color: 'brand.mwPrimaryDark'
      }
    },
    footerLinks: {
      color: 'brand.mwWhite',
      _hover: {
        color: 'brand.mwWhite'
      }
    },
  },
  defaultProps: {
    variant: "bodyLinks",
  },
})

export default Links;