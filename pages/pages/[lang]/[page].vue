<template>
  <NuxtLayout>
    <div v-if="data">
      <main-languages>
        <span v-if="data.french">
          <nuxt-link :to="`/pages/fr/${route.params.page}`">FR</nuxt-link>
        </span>
      </main-languages>
      <elements-container v-if="data.elements" class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " :elements="data.elements"/>
    </div>
  </NuxtLayout>
</template>
<script setup>
const route = useRoute()
const { data } = await useAsyncData(`page-${route}`, () => queryContent(route.path).findOne())
</script>