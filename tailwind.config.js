module.exports = {
  theme: {
    extend: {
      maxWidth: theme => Object.keys(theme('screens')).reduce((maxWidths, screen) => ({
        ...maxWidths,
        [`screen-${screen}`]: theme('screens')[screen]
      }), {}),
      inset: theme => theme('spacing')
    }
  },
  variants: {},
  plugins: []
}
