<template>
  <frame-grid
      v-if="layout === 1"
      v-bind:gap="gap"
      v-bind:defaultDirection="defaultDirection"
      v-bind:frame="frame"
      v-bind:rectSize="rectSize"
      v-bind:useFrameFill="useFrameFill"
  >
    <nuxt-img v-for="i in images" class="object-cover" :src="i.image" />
  </frame-grid>
  <div v-if="layout === 4">
    <nuxt-img v-for="i in images" class="w-full" :src="i.image" />
  </div>

</template>
<script>
import { FrameGrid } from '@egjs/vue-grid';
export default {
  props: {
    images: {
      type: Array
    },
    layout: {
      type: Number,
      default: 1
    },
  },
  data: () => ({
    gap: 5,
    defaultDirection: "end",
    frame: [[1,1,2,2],[3,3,2,2],[4,4,4,5]],
    rectSize: 0,
    useFrameFill: true,
  }),
  components: {
    FrameGrid,
  }
}
</script>

<style scoped>

</style>
