<template>
  <client-only>
    <div v-html="embed" />
  </client-only>
</template>
<script setup>
const props = defineProps({
  embed: {
    type: String,
    default: ''
  }
})
</script>