<template>
  <div class="flex">
    <elements-markdown :markdownString="text" class="prose-sm lg:prose-md grow"/>
    <div v-if="side1" class="xl:flex prose-sm sticky top-28 self-start">
      <elements-markdown v-if="side1" :markdownString="side1" class="ml-24 border-l pl-8 w-1/3" />
      <elements-markdown v-if="side2" :markdownString="side2" class="ml-24 border-l pl-8 w-1/3" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  text: String,
  side1: String,
  side2: String
});
</script>