<template>
  <main>

<!--    {{ setDevPreContent(data)}}-->
  </main>
</template>
<script setup>
const route = useRoute()
const { data } = await useAsyncData('home', () => queryContent(route.path).findOne())
</script>