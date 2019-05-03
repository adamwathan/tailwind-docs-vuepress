<template>
  <div class="rounded-lg mb-8 overflow-hidden">
    <div class="bg-gray-800 p-4 font-mono text-sm overflow-x-scroll whitespace-no-wrap">
      <div class="whitespace-pre text-gray-400">// tailwind.config.js</div>
      <div class="whitespace-pre text-gray-200">module.exports = {</div>

      <div class="whitespace-pre text-gray-200" v-for="[configKey, suffix] in topPart">{{ configKey }}{{ suffix }}</div>

      <div v-html="middlePart"></div>

      <div class="whitespace-pre text-gray-200" v-for="[depth, closingBrace] in bottomPart">{{ '  '.repeat(depth + 1) }}{{ closingBrace }}</div>

      <div class="whitespace-pre text-gray-200">}</div>
    </div>
  </div>
</template>

<script>
import dedent from 'dedent'
import e from 'escape-html'

export default {
  props: {
    configKey: { required: true },
    usesTheme: { default: false },
  },
  computed: {
    topPart() {
      return this.configKey.split('.').map((part, i) => {
        let configKey = `${'  '.repeat(i + 1)}${part}`
        let suffix = ': {'

        if (i === this.keyDepth) {
          configKey = '<span style="color: #f9ee98;">' + configKey + '</span>'
          suffix = this.usesTheme ? ': theme => ({' : suffix
        }

        return [configKey, suffix]
      })
    },
    middlePart() {
      return dedent(this.$slots.default[0].text).split('\n').map(line => {
        const indentation = '&nbsp;&nbsp;'.repeat(this.keyDepth + 1)

        if (line.startsWith('+')) {
          return '<div style="color: #a8ff60;"><span>+</span>&nbsp;' + indentation + e(line.slice(1).trim()) + '</div>'
        }

        if (line.startsWith('-')) {
          return '<div class="text-gray-500"><span>-</span>&nbsp;' + indentation + e(line.slice(1).trim()) + '</div>'
        }

        if (line.startsWith('//')) {
          return '<div class="text-gray-400"><span>-</span>&nbsp;&nbsp;' + indentation + e(line.slice(1).trim()) + '</div>'
        }

        return '<div class="text-gray-300"><span>-</span>&nbsp;&nbsp;' + indentation + e(line.slice(1).trim()) + '</div>'
      }).join('\n')
    },
    bottomPart() {
      return _.range(this.keyDepth, -1).map(depth => {
        const closingBrace = this.usesTheme && depth === this.keyDepth ? '})' : '}'
        return [depth, closingBrace]
      })
    },
    keyDepth() {
      return this.configKey.split('.').length
    }
  }
}
</script>
