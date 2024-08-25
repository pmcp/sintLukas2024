<template>
  <NuxtLayout>
    <elements-container v-if="data" class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " :elements="data.elements"/>
  </NuxtLayout>
</template>
<script setup>
// Get the Homepage Id
const { data: page } = await useAsyncData('homepage', () => queryContent('site/homepage').findOne())
const { data } = await useAsyncData('home', () => queryContent(`pages/nl/${page.value.page}`).findOne())
</script>