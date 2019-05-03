<template>
  <div class="markdown">
    <h3>Responsive and State Variants</h3>
    <p>By default, {{ whichVariants }} variants are generated for {{ utility.name }} utilities.</p>
    <p>You can control which variants are generated for the {{ utility.name }} utilities by modifying the <code>{{ utility.property }}</code> property in the <code>variants</code> section of your <code>tailwind.config.js</code> file.</p>
    <p>For example, this config will {{ variants.length > 0 ? 'also ' : '' }}generate {{ extraVariants.join(' and ') }} variants:</p>

    <customized-config configKey="variants">
        // ...
      - {{ utility.property }}: ['{{ variants.join(', ') }}'],
      + {{ utility.property }}: ['{{ variants.concat(extraVariants).join(', ') }}'],
    </customized-config>

    <h3>Disabling</h3>

    <p>If you don't plan to use the {{ utility.name }} utilities in your project, you can disable them entirely by setting the <code>{{ utility.property }}</code> property to <code>false</code> in the <code>corePlugins</code> section of your config file:</p>


    <customized-config configKey="corePlugins">
        // ...
      + {{ utility.property }}: false,
    </customized-config>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: ['utility', 'variants'],
  computed: {
    whichVariants() {
      if (this.variants.length > 0) {
        let whichVariants = `only ${this.variants[0]}`
        let i

        for (i = 1; i < this.variantscount; i++) {
          whichVariants = whichVariants + ((i == this.variants.length - 1) ? ' and ' : ', ') + this.variants[i]
        }

        return whichVariants
      } else {
        return 'no responsive, hover, focus, active, or group-hover'
      }
    },
    extraVariants() {
      if (this.variants.length > 0) {
        return _.difference([
          'responsive',
          'hover',
          'focus',
          'active',
          'group-hover',
        ], this.variants).slice(0, 2)
      } else {
        return ['responsive', 'hover']
      }
    }
  },
}
</script>
