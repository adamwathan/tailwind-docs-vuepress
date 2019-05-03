<template>
  <div class="relative overflow-hidden mb-8">
    <div class="bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4">
      <slot></slot>
    </div>
    <div class="scollbar-none rounded-b-lg p-4 bg-gray-800">
      <pre ref="code" class="scrollbar-none" :class="`language-${lang}`" style="margin: 0; padding: 0;"><code>{{ code }}</code></pre>
    </div>
  </div>
</template>

<script>
import dedent from 'dedent'
import highlight from '../util/highlight'

export default {
  props: {
    lang: {
      default: 'html',
    },
  },
  computed: {
    code() {
      return dedent`${this.$slots.code[0].text}`
    }
  },
  mounted() {
    highlight(this.$refs.code)
  }
}
</script>
