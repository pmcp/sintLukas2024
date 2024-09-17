<template>
  <pages-aanbod v-if="data" :data="data" />
</template>

<script setup>
const { data } = await useAsyncData('courses', () => queryContent('/aanbod/nl')
    .sort({ order: 1 })
    .find()
)
</script>