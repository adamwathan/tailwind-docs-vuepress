module.exports = {
  theme: {
    extend: {
      spacing: {
        '7': '1.75rem',
        '28': '7rem',
        '(screen-16)': 'calc(100vh - 4rem)',
      },
      inset: theme => theme('spacing'),
      maxHeight: {
        'xs': '20rem',
        'sm': '30rem',
        '(screen-16)': 'calc(100vh - 4rem)',
      },
      maxWidth: theme => Object.keys(theme('screens')).reduce((maxWidths, screen) => ({
        ...maxWidths,
        [`screen-${screen}`]: theme('screens')[screen]
      }), {}),
      zIndex: {
        '90': '90',
        '100': '100',
      },
    }
  },
  variants: {},
  plugins: []
}
