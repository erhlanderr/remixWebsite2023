import { defineStyleConfig } from '@chakra-ui/react'

const SectionStyles = defineStyleConfig({
  baseStyle: {
    paddingTop: 7,
    paddingY: 4,
    paddingBottom: 4,
  },
  variants: {
    medium: {
      paddingTop: 7,
      paddingY: 4,
      paddingBottom: 4,
    },
  },
  defaultProps: {
    variant: 'medium',
  },
})

export default SectionStyles