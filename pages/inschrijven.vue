<template>
  <pages-inschrijven :data="data" />

</template>

<script setup>
const { data } = await useAsyncData('page-inschrijven', () => queryContent('fixedpages/inschrijven').findOne())
</script>