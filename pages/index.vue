<template>
  <NuxtLayout>


    <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <elements-banner :data="{ title: page.block_banner.title, image: page.block_banner.image }" class="col-span-2"/>
      <elements-news :articles="news" class="col-span-1"/>
      <elements-categories class="col-span-1"/>


      {{ page.block_about }}

    </elements-container>
    <pre>{{ page }}</pre>
    <pre>{{ news }}</pre>
  </NuxtLayout>
</template>
<script setup>
// Get the Homepage Id
const { data: page } = await useAsyncData('page', () => queryContent('/fixedpages/homepage').findOne())
// If there is news, get news
const { data: news} = await useAsyncData('news', () => queryContent('/news').find())
</script>