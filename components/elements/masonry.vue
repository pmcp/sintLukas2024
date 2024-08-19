<template>
  <frame-grid
      class="container"
      v-bind:gap="gap"
      v-bind:defaultDirection="defaultDirection"
      v-bind:frame="frame"
      v-bind:rectSize="rectSize"
      v-bind:useFrameFill="useFrameFill"
  >
    <div class="item" data-grid-not-equal-size="true">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item" data-grid-column="3">8</div>
    <div class="item">9</div>
    <div class="item">10</div>
  </frame-grid>
</template>
<script>
import { MasonryGrid, JustifiedGrid, FrameGrid, PackingGrid } from "@egjs/vue-grid";
export default {
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

<style>
.item {
  position: absolute;
  width: 100px;
  /* border: 1px solid #ccc; */
  color: white;
  text-align: center;
}
</style>