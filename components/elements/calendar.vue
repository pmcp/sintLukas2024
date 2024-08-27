<template>
  <div v-html="embed" />
</template>
<script setup>
const props = defineProps({
  embed: {
    type: String,
    default: ''
  }
})
</script>