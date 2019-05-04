<template>
  <div class="w-1/2 px-2 md:w-full relative mt-4">
    <h3 class="markdown no-toc mb-4">{{ displayName }}</h3>
    <div class="md:-mx-2 md:-mt-5 md:flex md:flex-wrap">
      <div class="md:w-1/3 md:px-2" v-for="chunk in chunks">
        <div class="flex items-center mt-5" v-for="variant in chunk">
          <div class="h-12 w-12 rounded-lg shadow-inner" :class="`bg-${colorName}-${variant}`"></div>
          <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
            <div class="font-semibold">{{ variant }}</div>
            <div class="mt-1 font-normal opacity-75">{{ config['theme']['colors'][colorName][variant] }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import resolveConfig from 'tailwindcss/resolveConfig'
import defaultConfig from 'tailwindcss/defaultConfig'

export default {
  props: ['displayName', 'colorName'],
  computed: {
    config() {
      return resolveConfig(defaultConfig)
    },
    chunks() {
      return _.chunk(_.range(100, 1000, 100), 3)
    }
  }
}
</script>
