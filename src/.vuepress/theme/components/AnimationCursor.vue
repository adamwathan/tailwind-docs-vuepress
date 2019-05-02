<template>
  <div class="inline-flex items-center align-middle w-0 relative" :style="{ visibility: visible ? 'visible' : 'hidden' }">
    <span class="inline-block border-r-2 border-yellow h-6 absolute" style="margin-top: -0.125rem;"></span>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      default: false
    }
  }
}
</script>
