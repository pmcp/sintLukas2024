<template>
  <div class="grid grid-cols-1 md:grid-cols-2 pt-8 col-span-full gap-4 md:gap-0 ">
    <elements-markdown :markdownString="text" class="prose-sm"/>
    <div v-if="side1" class=" xl:flex prose-sm sticky top-32 self-start">
      <elements-markdown v-if="side1" :markdownString="side1" class="md:ml-24 md:border-l md:pl-8 md:w-1/3 relative pmcp-prose" />
      <elements-markdown v-if="side2" :markdownString="side2" class="md:ml-24 md:border-l md:pl-8 md:w-1/3 relative pmcp-prose" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  text: String,
  side1: String || undefined,
  side2: String || undefined
});
</script>