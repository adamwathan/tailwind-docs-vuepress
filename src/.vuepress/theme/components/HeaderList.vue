<template>
  <component :is="listType[0]" class="overflow-x-hidden">
    <li v-for="(item, index) in items" :key="index" :class="{ 'mt-2': index > 0 }">
      <router-link :to="'#' + item.slug" v-text="item.title" class="block transition-fast hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium" />
      <HeaderList class="ml-2 mt-2" v-if="item.children" :items="item.children" :list-type="innerListType" />
    </li>
  </component>
</template>

<script>
export default {
  name: 'HeaderList',
  props: ['items', 'listType'],
  computed: {
    innerListType () {
      return this.listType.slice(Math.min(this.listType.length - 1, 1))
    }
  }
}
</script>
