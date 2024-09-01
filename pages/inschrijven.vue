<template>
  <NuxtLayout class="relative" v-if="data">
      <elements-banner :data="{ title: '', image: data.images }" class="mb-12 md:mb-16 h-60"/>
    <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ">
      <div class="flex flex-col col-span-full md:col-span-2 gap-8 md:gap-16">
        <h1 class="text-4xl pb-0">Inschrijven</h1>
        <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div class="grow">
            <elements-markdown :markdownString="data.text1" class="prose-sm lg:prose-sm max-w-prose	"/>
          </div>
          <div>
            <elements-button :flavor="2">
              MijnAcademie
            </elements-button>
          </div>

        </div>
        <div class="bg-black-100 w-full col-span-full" style="height:1px" />
      </div>
      <div class="flex flex-col md:flex-row col-span-1 md:col-span-2 md:mt-8 gap-16 md:gap-">
        <div class="grid grid-cols-1 gap-16">
            <elements-markdown :markdownString="data.text2" class="prose-sm lg:prose-sm max-w-prose	"/>
            <div class="bg-black-100 w-full col-span-full" style="height:1px" />

            <elements-markdown :markdownString="data.text3" class="prose-sm lg:prose-sm max-w-prose	"/>
            <div class="bg-black-100 w-full col-span-full" style="height:1px" />


          <div class="grid gap-8">
            <elements-markdown :markdownString="data.text4" class="prose-sm lg:prose-sm max-w-prose	"/>
          </div>
        </div>
        <div class="bg-black-100 h-full col-span-full hidden md:block" style="width:1px" />
        <div class="bg-black-100 w-full col-span-full  md:hidden" style="height:1px" />
        <div class="grid gap-8 row-span-full">
          <elements-markdown :markdownString="data.text5" class="prose-sm lg:prose-sm max-w-prose	"/>
        </div>
      </div>


    </elements-container>
<!--    <pre>{{ data }}</pre>-->

  </NuxtLayout>
</template>

<script setup>
const { data } = await useAsyncData('page-inschrijven', () => queryContent('fixedpages/inschrijven').findOne())
</script>