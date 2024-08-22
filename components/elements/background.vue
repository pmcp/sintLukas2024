<template>
  <div v-if="data.style === 1 " class="background-grid" style="width: 300vw; position: absolute; left: -100vw; height: 99999px;" />
  <div v-if="data.style === 2 " class="bg-white" style="width: 300vw; position: absolute; left: -100vw; height: 99999px;" />
</template>
<script setup>
const props = defineProps({
  data: Object,
  type: String
});
</script>