<template>
  <NuxtLayout class="relative">
    <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <elements-banner :data="{ title: '', image: data.images }" class="col-span-1 md:col-span-2 h-48"/>

      <elements-text :side1="data.side1" :side2="data.side2" :text="data.markdown" />




    </elements-container>

    <div class="mt-8">
      <elements-background :data="{style: 1}" />
    </div>
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div class="relative z-1 grid grid-cols-2 gap-4 mt-16 col-span-2">
      <elements-locations />
      </div>
    </div>

  </NuxtLayout>
</template>

<script setup>
const { data } = await useAsyncData('page', () => queryContent('fixedpages/academie').findOne())
</script>