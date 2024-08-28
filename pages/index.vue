<template>
  <NuxtLayout class="relative ">

    <!-- BLOCK: BANNER-->
    <template v-if="page.block_banner">
      <elements-banner :data="{ title: page.block_banner.title, image: page.block_banner.image }" class="h-48"/>
    </template>

    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <UPageGrid :ui="{wrapper: 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-16'}">

        <!-- BLOCK: NEWS-->
        <div v-if="news" class="flex flex-col gap-4 col-span-1">
          <span class="uppercase text-sm font-bold">Nieuws</span>
          <elements-news :articles="news"/>
        </div>

        <!-- BLOCK: AANBOD-->
        <div v-if="page.block_courses" class="flex flex-col gap-4 col-span-1">
          <span class="uppercase text-sm font-bold">Aanbod</span>
          <div class="prose-xl">{{ page.block_courses.title }}</div>
          <elements-categories class="col-span-1"/>
        </div>


        <!-- BLOCK: ABOUT-->
        <template v-if="page.block_about">
          <div class="grid grid-cols-2 gap-8 col-span-1 col-span-1 md:col-span-2">
            <elements-image :image="page.block_about.image1" :key="page.block_about.image1" />
            <elements-image :image="page.block_about.image2" :key="page.block_about.image2"/>
          </div>

          <div class="flex flex-col gap-2 col-span-1">
            <span class="uppercase text-sm font-bold">{{ page.block_about.label }}</span>
            <span class="text-2xl">{{ page.block_about.title }}</span>
            <span class="text-sm">{{ page.block_about.text }}</span>
          </div>
           <elements-image :image="page.block_about.image3" :key="page.block_about.image3" class="col-span-1  h-fit"/>
        </template>

      </UPageGrid>

      <!-- START GRID BACKGROUND -->
      <div class="mt-8">
        <elements-background :data="{style: 1}" />
      </div>

      <UPageGrid class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">


        <!-- BLOCK: CALENDAR -->
        <template v-if="page.block_calendar">
          <div class="relative z-1 grid grid-cols-2 gap-4 mt-16 col-span-2">
            <div class="col-span-1 bg-white p-4 grid gap-4">
              <span class="uppercase text-sm font-bold">{{ page.block_calendar.label }}</span>
              <div class="text-sm">{{ page.block_calendar.text }}</div>

              <elements-button :flavor="2" :to="page.block_calendar.buttonLink">
                {{ page.block_calendar.buttonText }}
              </elements-button>
              <elements-calendar class="col-span-1" :embed="page.block_calendar.code" />
            </div>
            <div class="self-stretch">
              <elements-image contain transparent :image="page.block_calendar.image"  class="col-span-1 h-full "/>
            </div>
          </div>
        </template>
      </UPageGrid>
    </div>
  </NuxtLayout>
</template>
<script setup>
// Get the Homepage Id
const { data: page } = await useAsyncData('page', () => queryContent('/fixedpages/homepage').findOne())
// If there is news, get news
const { data: news} = await useAsyncData('news', () => queryContent('/news').find())
</script>