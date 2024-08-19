<template >
  <div class="grid grid-cols-1 gap-8">
    {{ setDevPreContent(data)}}
    <template v-if="data.mainImage">
      <img :src="data.mainImage" class="h-80 w-full object-cover"/>
    </template>

    <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl prose lg:prose-md">
        <h1>{{ data.title }}</h1>
        <elements-container :elements="data.elements"/>
      </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { data } = await useAsyncData('atelier', () => queryContent(route.path).findOne())
</script>
