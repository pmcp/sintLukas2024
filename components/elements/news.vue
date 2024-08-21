<template>
  <div v-for="(a, key) in data" :key="`news-${key}`" class="flex flex-row">

    <div>
      <nuxt-img :src="a.thumbnail" :alt="a.alt" class="aspect-square"/>
    </div>
    <div>
      <h1>{{ a. title }}</h1>
      <p>{{ a.description}}</p>
    </div>
  </div>

  <br><br><br><br>

  <pre>{{ data }}</pre>


</template>
<script setup>
// TODO: add "where date -> after today"
const { data } = await useAsyncData('news', () => queryContent('news')
    .where({ _draft: false, })
    .find())


const UiConfig = {
  wrapper: 'relative group flex flex-col w-full gap-y-6 border-b border-black',
  image: {
    wrapper: 'ring-0 dark:ring-0 relative overflow-hidden aspect-[16/9] w-full rounded-none pointer-events-none ',
    base: 'object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105'
  },
  container: 'flex flex-col justify-between flex-1',
  inner: 'flex-1',
  badge: {
    wrapper: 'mb-3',
    base: ''
  },
  title: 'text-gray-900 dark:text-white text-xl font-semibold truncate group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200',
  description: 'text-base text-gray-500 dark:text-gray-400 mt-1',
  date: 'text-sm text-gray-500 dark:text-gray-400 font-medium pointer-events-none',
  authors: {
    wrapper: 'relative flex items-center gap-x-3 mt-4',
    avatar: {
      base: 'relative ring-1 lg:hover:scale-105 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400 transition-transform',
      size: 'xs'
    }
  }
}
</script>