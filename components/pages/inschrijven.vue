<template>
  <elements-banner :data="{ title: '', image: data.images }"/>
  <UPageGrid :ui="{wrapper: 'mx-auto px-6 lg:px-8 max-w-7xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-16'}">
    <div class="flex flex-col col-span-full md:col-span-2 gap-8 md:gap-16">
      <h1 class="text-4xl pb-0">Inschrijven</h1>
      <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        <div class="grow prose max-w-prose">
            <elements-markdown :markdownString="data.text1" />
        </div>
      </div>
      <div class="bg-black-100 w-full col-span-full" style="height:1px" />
    </div>
    <div class="flex flex-col md:flex-row col-span-1 md:col-span-2 md:mt-0 gap-8 md:gap-16 md:gap-">
      <div class="grid grid-cols-1 gap-8 md:gap-16 prose max-w-pros">
        <elements-markdown :markdownString="data.text2"/>
        <div class="bg-black-100 w-full col-span-full" style="height:1px" />

        <elements-markdown :markdownString="data.text3"/>
        <div class="bg-black-100 w-full col-span-full" style="height:1px" />


        <div class="grid gap-8 prose max-w-prose">
          <elements-markdown :markdownString="data.text4" />
        </div>
      </div>
      <div class="bg-black-100 h-full col-span-full hidden md:block" style="width:1px" />
      <div class="bg-black-100 w-full col-span-full  md:hidden" style="height:1px" />
      <div class="grid gap-8 row-span-full prose max-w-prose">
        <elements-markdown :markdownString="data.text5"/>
      </div>
    </div>


  </UPageGrid>
</template>
<script setup>
defineProps({
  data: Object
})
</script>