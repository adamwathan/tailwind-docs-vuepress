const ctx =
  typeof window === 'undefined'
    ? typeof self === 'undefined'
      ? {}
      : self
    : window

ctx.Prism = { manual: true, disableWorkerMessageHandler: true }

const Prism = require('prismjs')

export default (el) => Prism.highlightElement(el)
