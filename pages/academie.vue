<template>
  <NuxtLayout class="relative">
    <elements-banner :data="{ title: '', image: data.images }" class="mb-16 h-60"/>
    <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

      <div class="flex flex-col col-span-full md:col-span-2">
        <h1 class="text-4xl pb-0">Academie</h1>
        <elements-text v-if="data.markdown" :side1="data.side1" :side2="data.side2" :text="data.markdown" />
      </div>
    </elements-container>

    <div class="mt-8">
      <elements-background :data="{style: 1}" />
    </div>

    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-1 pt-16 grid grid-cols-2 gap-16  ">
      <div class="col-span-full lg:col-span-1">
        <div class="uppercase text-sm font-bold pb-4">Vestigingen</div>
        <elements-locations/>
      </div>
      <div class="col-span-full lg:col-span-1">
        <div class="uppercase text-sm font-bold pb-4">Team</div>
        <elements-persons />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const { data } = await useAsyncData('academie', () => queryContent('fixedpages/academie').findOne())
</script>