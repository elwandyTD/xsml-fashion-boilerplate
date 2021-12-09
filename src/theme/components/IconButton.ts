const defaultStyle = {
  outlineOffset: 0,
  borderStyle: "none",
  borderRadius: 0,
  backgroundColor: "transparent"
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  baseStyle: {
    ...defaultStyle
  },
  sizes: {
    xs: {
      ...defaultStyle
    },
    sm: {
      ...defaultStyle,
      backgroundColor: "red.500"
    }
  },
  // variants: {}
}