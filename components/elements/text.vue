<template>
  <div class="grid grid-cols-1 md:grid-cols-2 pt-8 col-span-full gap-4 md:gap-0 ">
    <div class="col-span-1 prose pr-0 md:pr-8">
      <elements-markdown :markdownString="text"/>
    </div>

    <div class="col-span-1 grid grid-cols-1 lg:grid-cols-3" v-if="side1 || side2">
      <div class="col-span-1 prose border-l-4 md:border-l md:pl-4 pmcp-prose_sidebar" :class="[side2 ? 'col-span-1' : 'col-span-2']">
        <elements-markdown :markdownString="side1" />
      </div>
      <div class="col-span-2 prose border-l-0 md:border-l md:pl-4 pmcp-prose_sidebar pt-4 md:pt-0">
        <elements-markdown v-if:markdownString="side2" />
      </div>

    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  text: String || '',
  side1: String || '',
  side2: String || ''
});
</script>