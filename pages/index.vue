<template>
  <NuxtLayout class="relative">


    <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <!-- BLOCK: BANNER-->
      <elements-banner :data="{ title: page.block_banner.title, image: page.block_banner.image }" class="col-span-1 md:col-span-2"/>

      <!-- BLOCK: NEWS-->
      <elements-news :articles="news" class="col-span-1"/>

      <!-- BLOCK: AANBOD-->
      <elements-categories class="col-span-1"/>

      <!-- BLOCK: ABOUT-->
      <div class="grid grid-cols-2 gap-2 col-span-1 col-span-1 md:col-span-2">
        <elements-image :src="page.block_about.image1" class="col-span-1"/>
        <elements-image :src="page.block_about.image2"/>
      </div>

      <div class="flex flex-col gap-2 col-span-1">
        <span class="uppercase text-sm font-bold">{{ page.block_about.label }}</span>
        <span class="text-2xl">{{ page.block_about.title }}</span>
        <span class="text-sm">{{ page.block_about.text }}</span>
      </div>
      <elements-image :src="page.block_about.image3" class="col-span-1 md:col-span-2 h-fit"/>
    </elements-container>

    <!-- START GRID BACKGROUND -->
    <div class="mt-8">
      <elements-background :data="{style: 1}" />
    </div>

    <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">


      <!-- BLOCK: CALENDAR -->
      <div class="relative z-1 grid grid-cols-2 gap-4 mt-16 col-span-2">
        <div class="col-span-1 bg-white p-4">
          <span class="uppercase text-sm font-bold">{{ page.block_calendar.label }}</span>
          <div class="text-sm">{{ page.block_calendar.text }}</div>

          <elements-button :flavor="2" :to="page.block_calendar.buttonLink">
            {{ page.block_calendar.buttonText }}
          </elements-button>
          <elements-calendar class="col-span-1" :embed="page.block_calendar.code" />
        </div>
        <div class="self-stretch bg-red-100">
          <elements-image :src="page.block_calendar.image" class="col-span-1 h-full"/>
        </div>

      </div>


    </elements-container>

<!--    <pre>{{ page.block_about }}</pre>-->
<!--    <pre>{{ page }}</pre>-->
<!--    <pre>{{ news }}</pre>-->
  </NuxtLayout>
</template>
<script setup>
// Get the Homepage Id
const { data: page } = await useAsyncData('page', () => queryContent('/fixedpages/homepage').findOne())
// If there is news, get news
const { data: news} = await useAsyncData('news', () => queryContent('/news').find())
</script>