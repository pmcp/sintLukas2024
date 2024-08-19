<template>
  <dev-container class="fixed bottom-2 right-2 z-20 bg-white"/>
  <UHeader :ui="{ wrapper: 'bg-background/100 backdrop-blur-none border-b border-second-300 pt-2 pb-4 sticky -top-0 z-10', container: 'items-end', left: 'lg:flex-none mr-4', button: { base: 'lg:hidden rounded-none bg-transparent hover:bg-primary-500', icon: { open: 'i-heroicons-bars-3-20-solid ', close: 'i-heroicons-x-mark-20-solid ' } } }">
    <template #logo>
      <svg-logo />

    </template>
    <template #center >
      <div class="hidden lg:flex grow gap-8">
        <nuxtLink to="/test-article-2.nl">
          Test
        </nuxtLink>
        <UHorizontalNavigation :links="navItems" :ui="{
  wrapper: 'relative w-full flex items-center justify-between',
  container: 'flex items-center min-w-0',
  inner: 'min-w-0',
  base: 'group relative w-full flex items-center gap-1.5 px-2.5 py-0 rounded-none font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75',
  before: 'hover:before:rounded-none hover:before:bg-transparent dark:hover:before:bg-primary-100/50',
  after: 'after:absolute after:bottom-0 after:inset-x-2 after:block after:h-[1px] after:mt-2 hover:after:bg-primary-500',
  active: 'text-gray-900 dark:text-white  after:bg-black-100 dark:after:bg-black-100 ',
  inactive: 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
}"/>
      </div>
    </template>

    <template #right>
      <!-- TODO: To CMS-->
      <elements-button :style="0">
        Inschrijven
      </elements-button>
    </template>

    <template #panel>

      <UVerticalNavigation :links="navItems" :ui="{
  wrapper: 'relative ',
  base: 'text-center group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75',
  ring: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
  padding: 'px-2.5 py-1.5',
  width: 'w-fit',
  rounded: 'rounded-none',
  font: 'font-medium',
  size: 'text-sm',
  active: 'text-black dark:text-white before:bg-transparent border-b dark:before:bg-gray-800',
  inactive: 'text-black dark:text-gray-400 hover:text-black dark:hover:text-white hover:before:bg-transparent dark:hover:before:bg-transparent',
  label: 'truncate relative',
  divider: {
    wrapper: {
      base: 'p-2',
    },
  },
}"/>
    </template>
  </UHeader>
</template>

<script setup>
const { data } = await useAsyncData('navigation', () => queryContent('site/navigation').findOne())
// console.log(data.value)
// TODO: Lang
const lang = 'nl'
const navItems = data.value.navigation.map(n => ({ 'label': n[`label${lang}`], to: `/${n.page}.nl`}))
</script>