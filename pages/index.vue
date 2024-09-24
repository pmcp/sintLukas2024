<template>
  <pages-homepage :page="page" :news="news" />
</template>
<script setup>
// Get the Homepage Id
const { data: page } = await useAsyncData('home', () => queryContent('/fixedpages/homepage').findOne())
// If there is news, get news
const { data: news} = await useAsyncData('news', () => queryContent('/news')
    .sort({ date: -1 })
    .limit(3)
    .find())
</script>