<template>
  <UHeader
      :links="navItems"
      :ui="{
        wrapper: 'bg-background/100 backdrop-blur-none border-b-0 pt-4 pb-4 sticky -top-0 z-10',
        container: 'items-end', left: 'lg:flex-none mr-4',
        button: {
          base: 'lg:hidden rounded-none bg-transparent hover:bg-primary-500 bg-primary-200 p-3',
          icon: {
            open: 'i-heroicons-bars-3-20-solid ',
            close: 'i-heroicons-x-mark-20-solid '
          }
        }
      }"
  >
    <template #logo>
      <svg-logo />
    </template>

    <template #center >
      <div class="hidden lg:flex grow gap-8">
        <UHorizontalNavigation :links="navItems" :ui="{
      wrapper: 'relative w-full flex items-center justify-between',
      container: 'flex items-center min-w-0',
      inner: 'min-w-0',
      base: 'group relative w-full flex items-center gap-1.5 px-2.5 py-0 rounded-none font-medium text-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75',
      before: 'hover:before:rounded-none hover:before:bg-transparent dark:hover:before:bg-primary-100/50',
      after: 'after:absolute after:bottom-0 after:inset-x-2 after:block after:h-[1px] after:mt-2 hover:after:bg-primary-500',
      active: 'text-gray-900 dark:text-white  after:bg-black-100 dark:after:bg-black-100 ',
      inactive: 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
    }"/>
      </div>
    </template>

    <template #right v-if="buttons">
      <div class="navButtons">
      <elements-button v-for="(button, key) in buttons" :key="`navButtons-${key}`" :flavor="1" :to="button.link" :pageLink="button.pageLink" :download="button.download">
        {{ button.label }}
      </elements-button>
      </div>
    </template>


    <template #panel>
      <div class="flex flex-col gap-4 w-full justify-center mt-4">
        <a class="text-3xl text-center py-4" v-for="i in navItems" :key="'key'+i.to" :href="i.to">
          <span class="hover:border-b">{{ i.label }}</span>
        </a>
      </div>

    </template>



  </UHeader>
</template>

<script setup>
// TODO: Make dynamic
// const { data } = await useAsyncData('navigation', () => queryContent('site/navigation').findOne())
// const { data: fixed } = await useAsyncData('fixedPages', () => queryContent('site/fixedPages').find())


const fixedNav = [
  {
    label: 'Start',
    to: '/'
  },
  {
    label: 'Aanbod',
    to: '/aanbod'
  },
  {
    label: 'Academie',
    to: '/academie'
  },
  {
    label: 'Contact',
    to: '/contact'
  }
]

const buttons = [
  {
    label: 'Inschrijven',
    link: '/inschrijven'
  }
]

// data.value.navigation.map(n => ({ 'label': n.label, to: `/pages/nl/${n.page}`}))

const navItems = [...fixedNav ]
</script>

<style>
.navButtons a {
  margin-bottom: 0 !important;
  padding: 12px !important;
}
</style>