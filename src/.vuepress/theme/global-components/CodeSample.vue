<template>
  <div class="relative overflow-hidden mb-8">
    <div class="bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4">
      <slot></slot>
    </div>
    <div class="scollbar-none rounded-b-lg p-4 bg-gray-800">
      <pre class="scrollbar-none" :class="`language-${lang}`" style="margin: 0; padding: 0;"><code>{{ extractedCode }}</code></pre>
    </div>
    <div class="hidden" ref="code">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script>
import beautify from 'js-beautify'

// This autohighlights which seems *dark*
import prism from 'prismjs'

export default {
  props: {
    lang: {
      default: 'html',
    },
    code: {
      default: null,
    },
  },
  data() {
    return {
      extractedCode: null
    }
  },
  mounted() {
    this.extractedCode = beautify.html(this.$refs.code.children[0].outerHTML, { indent_size: 2 })
  }
}
</script>
