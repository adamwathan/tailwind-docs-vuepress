const { escapeHtml } = require('@vuepress/shared-utils')

module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Getting Started',
        children: [
          ['/docs/installation/', 'Installation'],
          ['/docs/upgrade-guide/', 'Upgrade Guide'],
          ['/docs/using-with-sass-less-stylus/', 'Using with Sass/Less/Stylus'],
          ['/docs/controlling-file-size/', 'Controlling File Size'],
          ['/docs/browser-support/', 'Browser Support'],
        ],
      },
      {
        title: 'Core Concepts',
        children: [
          ['/docs/utility-first/', 'Utility-First'],
          ['/docs/core-plugins/', 'Core Plugins'],
          ['/docs/responsive-design/', 'Responsive Design'],
          ['/docs/state-variants/', 'State Variants'],
          ['/docs/adding-new-utilities/', 'Adding New Utilities'],
          ['/docs/extracting-components/', 'Extracting Components'],
          ['/docs/adding-base-styles/', 'Adding Base Styles'],
          ['/docs/functions-and-directives/', 'Functions &amp; Directives'],
        ],
      },
      {
        title: 'Customization',
        children: [
          ['/docs/configuration/', 'Configuration'],
          ['/docs/theme/', 'Theme'],
          ['/docs/breakpoints/', 'Breakpoints'],
          ['/docs/colors/', 'Colors'],
          ['/docs/spacing/', 'Spacing'],
          ['/docs/configuring-variants/', 'Variants'],
          ['/docs/plugins/', 'Writing Plugins'],
        ],
      },
      {
        title: 'Base styles',
        children: [
          ['/docs/preflight/', 'Preflight'],
        ],
      },
      {
        title: 'Layout',
        children: [
          ['/docs/container/', 'Container'],
          ['/docs/display/', 'Display'],
          ['/docs/float/', 'Float'],
          ['/docs/object-fit/', 'Object Fit'],
          ['/docs/object-position/', 'Object Position'],
          ['/docs/overflow/', 'Overflow'],
          ['/docs/position/', 'Position'],
          ['/docs/top-right-bottom-left/', 'Top / Right / Bottom / Left'],
          ['/docs/visibility/', 'Visibility'],
          ['/docs/z-index/', 'Z-Index'],
        ],
      },
      {
        title: 'Typography',
        children: [
          ['/docs/text-color/', 'Color'],
          ['/docs/font-family/', 'Font Family'],
          ['/docs/font-size/', 'Font Size'],
          ['/docs/font-smoothing/', 'Font Smoothing'],
          ['/docs/font-style/', 'Font Style'],
          ['/docs/font-weight/', 'Font Weight'],
          ['/docs/letter-spacing/', 'Letter Spacing'],
          ['/docs/line-height/', 'Line Height'],
          ['/docs/list-style-type/', 'List Style Type'],
          ['/docs/list-style-position/', 'List Style Position'],
          ['/docs/text-align/', 'Text Align'],
          ['/docs/text-decoration/', 'Text Decoration'],
          ['/docs/text-transform/', 'Text Transform'],
          ['/docs/vertical-align/', 'Vertical Align'],
          ['/docs/whitespace/', 'Whitespace'],
          ['/docs/word-break/', 'Word Break'],
        ],
      },
      {
        title: 'Backgrounds',
        children: [
          ['/docs/background-attachment/', 'Background Attachment'],
          ['/docs/background-color/', 'Background Color'],
          ['/docs/background-position/', 'Background Position'],
          ['/docs/background-repeat/', 'Background Repeat'],
          ['/docs/background-size/', 'Background Size'],
        ],
      },
      {
        title: 'Borders',
        children: [
          ['/docs/border-color/', 'Border Color'],
          ['/docs/border-style/', 'Border Style'],
          ['/docs/border-width/', 'Border Width'],
          ['/docs/border-radius/', 'Border Radius'],
        ],
      },
      {
        title: 'Flexbox',
        children: [
          ['/docs/flex-direction/', 'Flex Direction'],
          ['/docs/flex-wrap/', 'Flex Wrap'],
          ['/docs/align-items/', 'Align Items'],
          ['/docs/align-content/', 'Align Content'],
          ['/docs/align-self/', 'Align Self'],
          ['/docs/justify-content/', 'Justify Content'],
          ['/docs/flex/', 'Flex'],
          ['/docs/flex-grow/', 'Flex Grow'],
          ['/docs/flex-shrink/', 'Flex Shrink'],
          ['/docs/order/', 'Order'],
        ],
      },
      {
        title: 'Spacing',
        children: [
          ['/docs/padding/', 'Padding'],
          ['/docs/margin/', 'Margin'],
        ],
      },
      {
        title: 'Sizing',
        children: [
          ['/docs/width/', 'Width'],
          ['/docs/min-width/', 'Min-Width'],
          ['/docs/max-width/', 'Max-Width'],
          ['/docs/height/', 'Height'],
          ['/docs/min-height/', 'Min-Height'],
          ['/docs/max-height/', 'Max-Height'],
        ],
      },
      {
        title: 'Tables',
        children: [
          ['/docs/border-collapse/', 'Border Collapse'],
          ['/docs/table-layout/', 'Table Layout'],
        ],
      },
      {
        title: 'Effects',
        children: [
          ['/docs/box-shadow/', 'Box Shadow'],
          ['/docs/opacity/', 'Opacity'],
        ],
      },
      {
        title: 'Interactivity',
        children: [
          ['/docs/appearance/', 'Appearance'],
          ['/docs/cursor/', 'Cursor'],
          ['/docs/outline/', 'Outline'],
          ['/docs/pointer-events/', 'Pointer Events'],
          ['/docs/resize/', 'Resize'],
          ['/docs/user-select/', 'User Select'],
        ],
      },
      {
        title: 'SVG',
        children: [
          ['/docs/fill/', 'Fill'],
          ['/docs/stroke/', 'Stroke'],
        ],
      },
      {
        title: 'Component Examples',
        children: [
          ['/docs/examples/alerts/', 'Alerts'],
          ['/docs/examples/buttons/', 'Buttons'],
          ['/docs/examples/cards/', 'Cards'],
          ['/docs/examples/forms/', 'Forms'],
          ['/docs/examples/grids/', 'Grids'],
          ['/docs/examples/navigation/', 'Navigation'],
        ],
      },
    ],
  },
  extendPageData($page) {
    const { regularPath, frontmatter = {} } = $page
    const notFoundPath = '/404.html'

    if (frontmatter.permalink) return

    if (regularPath === '/404.html') {
      $page.path = notFoundPath
    } else if (regularPath.endsWith('.html')) {
      $page.path = regularPath.slice(0, -5) + '/'
    }
  },
  postcss: {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('postcss-nested'),
      require('autoprefixer')
    ]
  },
  markdown: {
    extendMarkdown: md => {
      const origRender = md.render.bind(md)
      md.render = (src, env) => {
        src = src.replace(/:::escape((.|\n)*?):::/gm, (m, p1) => escapeHtml(p1).trim())
        return origRender(src, env)
      }
    }
  }
}
