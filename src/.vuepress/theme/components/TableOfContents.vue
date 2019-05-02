<template>
  <div v-if="this.$page.headers">
    <h5 class="text-gray-500 uppercase tracking-wide font-bold text-sm lg:text-xs">On this page</h5>
    <HeaderList class="mt-4" :items="groupedHeaders" :list-type="listTypes" />
  </div>
</template>

<script>
import HeaderList from './HeaderList.vue'
export default {
  props: {
    listType: {
      type: [String, Array],
      default: 'ul'
    },
    includeLevel: {
      type: Array,
      default: () => [2, 3]
    }
  },
  components: { HeaderList },
  computed: {
    listTypes () {
      return typeof this.listType === 'string' ? [this.listType] : this.listType
    },
    groupedHeaders () {
      return this.groupHeaders(this.$page.headers || []).list
    }
  },
  methods: {
    groupHeaders (headers, startLevel = 1) {
      const list = []
      let index = 0
      while (index < headers.length) {
        const header = headers[index]
        if (header.level < startLevel) break
        if (header.level > startLevel) {
          const result = this.groupHeaders(headers.slice(index), header.level)
          if (list.length) {
            list[list.length - 1].children = result.list
          } else {
            list.push(...result.list)
          }
          index += result.index
        } else {
          if (header.level <= this.includeLevel[1] && header.level >= this.includeLevel[0]) {
            list.push({ ...header })
          }
          index += 1
        }
      }
      return { list, index }
    }
  }
}
</script>
<!-- <template>
  <div>
    <TOC/>
    <h5 class="text-gray-500 uppercase tracking-wide font-bold text-sm lg:text-xs">On this page</h5>
    <ul class="mt-4 overflow-x-hidden" v-if="links.length > 0">
      <li class="mb-2" :class="link.isChild ? 'ml-2' : ''" v-for="link in links">
        <a :href="link.href" class="block transition-fast hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
const anchorJS = require('anchor-js')
const anchors = new anchorJS()

function getHeadingText(element) {
  let text = ''
  for (var i = 0; i < element.childNodes.length; ++i) {
    if (element.childNodes[i].nodeType === 3) {
      text += element.childNodes[i].textContent;
    }
  }
  return text
}

export default {
  props: ['rows'],
  data() {
    return {
      links: []
    }
  },
  methods: {
    scrollTo(el) {
      const bounds = el.getBoundingClientRect()
      document.body.scrollBy(0, 200)
    }
  },
  mounted() {
    // anchors.options = { placement: 'left', class: 'text-gray-500 no-underline', icon: '#' }
    // anchors.add('#content h2, #content h3, #content h4')
    // this.links = anchors.elements.filter(el => {
    //   return !el.classList.contains('no-toc') && el.tagName !== 'H4'
    // }).map(el => {
    //   return {
    //     isChild: el.tagName === 'H3',
    //     text: getHeadingText(el),
    //     href: el.querySelector('.anchorjs-link').getAttribute('href'),
    //     el: el,
    //   }
    // })
  }
}
</script>
 -->
