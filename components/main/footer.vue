<template>
  <UFooter class="bg-primary-200 border-b-4 border-accent-800 w-full">
    <template #top>
      <div class="flex flex-col gap-8 w-full md:w-1/2 prose ">
        <elements-markdown v-if="data.markdown" :markdownString="data.markdown" />
        <elements-newsletter/>
      </div>

    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm prose ">
        <span>© {{ new Date().getFullYear() }}</span>
      </p>


<!--      <UHorizontalNavigation :links="navItems" :ui="{-->
<!--  wrapper: ' flex items-center justify-between w-auto',-->
<!--  container: 'flex items-center min-w-0',-->
<!--  inner: 'min-w-0',-->
<!--  base: 'group relative flex items-center gap-1.5 px-2.5 py-0 rounded-none font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75',-->
<!--  before: 'hover:before:rounded-none hover:before:bg-transparent dark:hover:before:bg-primary-100/50',-->
<!--  after: 'after:absolute after:bottom-0 after:inset-x-2 after:block after:h-[1px] after:mt-2 hover:after:bg-primary-500',-->
<!--  active: 'text-gray-900 dark:text-white  after:bg-black-100 dark:after:bg-black-100 ',-->
<!--  inactive: 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',-->
<!--}"/>-->

    </template>

    <template #right>
      <NuxtImg :src="data.logo" alt="logo" class="h-12 w-auto" />
    </template>
  </UFooter>
</template>

<script setup>
const { data } = await useAsyncData('footer', () => queryContent('site/footer').findOne())
let navItems = []
if(data.value.links) navItems = data.value.links.map(n => ({ 'label': n.label, to: `/pages/nl/${n.page}`}))

</script>