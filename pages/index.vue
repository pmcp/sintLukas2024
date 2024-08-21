<template>

  <pre>{{ data }}</pre>
</template>



<script setup>
const { data: page } = await useAsyncData('homepage', () => queryContent('site/homepage').findOne())


//

console.log(page.value.page)
const { data } = await useAsyncData('home', () => queryContent('pages')
    .where({ id: page.value.page })
    .findOne())
</script>