<template>
  <div>
    <h2 style="visibility: hidden; font-size: 0; margin: 0;">Class reference</h2>
    <div class="mt-0 border-t border-b border-gray-300 overflow-hidden relative">
      <div :class="{ 'lg:max-h-sm': scroll }" class="overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
        <table class="w-full text-left table-collapse">
          <thead>
            <tr>
              <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Class</th>
              <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Properties</th>
            </tr>
          </thead>
          <tbody class="align-baseline">
            <tr v-for="(row, i) in rows">
              <td :class="i === 0 ? 'border-gray-300' : 'border-gray-200'" class="p-2 border-t font-mono text-xs text-purple-700 whitespace-no-wrap" v-html="row[0]"></td>
              <td :class="i === 0 ? 'border-gray-300' : 'border-gray-200'" class="p-2 border-t font-mono text-xs text-blue-700 whitespace-pre" v-html="row[1]"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    rows: {},
    forceScroll: {
      default: false
    }
  },
  computed: {
    scroll() {
      return this.forceScroll || this.rows.length > 12
    }
  }
}
</script>
