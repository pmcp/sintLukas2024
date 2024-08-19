<template>
  <main>
    HALLO

    {{ $route.path}} - {{ '/pages'+$route.path }}

    <pre>{{ data }}</pre>

  </main>
</template>
<script setup>
const route = useRoute()
const { data } = await useAsyncData('home', () => queryContent(route.path).findOne())
</script>