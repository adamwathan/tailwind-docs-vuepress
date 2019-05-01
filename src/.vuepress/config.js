module.exports = {
  extendPageData ($page) {
    const { regularPath, frontmatter = {}} = $page

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
      require('autoprefixer'),
    ]
  }
}
