<template>
  <ContentQuery :path="`pages${$route.path}`" find="one" v-slot="{ data }">

      <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " :elements="data.elements"/>

  </ContentQuery>

<!--  <main v-if="data ">-->
<!--    <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " :elements="data.elements"/>-->
<!--  </main>-->
</template>
<script setup>
const route = useRoute()
const page = `pages${route.path}`
const { data } = await useAsyncData('page', () => queryContent(page).findOne())
</script>