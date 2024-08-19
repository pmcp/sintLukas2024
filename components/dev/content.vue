<template>
  <nav>
      <UNavigationTree :links="mapContentNavigation(navigation)" :multiple="false" default-open/>
  </nav>
</template>
<script setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>