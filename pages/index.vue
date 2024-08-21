<template>
  <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " :elements="data.elements"/>
</template>



<script setup>
// Get the Homepage Id
const { data: page } = await useAsyncData('homepage', () => queryContent('site/homepage').findOne())
// Get the Homepage Content
const { data } = await useAsyncData('home', () => queryContent('pages')
    .where({ id: page.value.page })
    .findOne())
</script>