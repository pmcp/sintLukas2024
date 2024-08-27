<template>
  <UBlogList orientation="vertical">
    <UCard
        :ui="{
  base: 'flex flex-row border-0 ',
  background: 'bg-white',
  divide: 'divide-y divide-gray-200 dark:divide-gray-800',
  ring: 'ring-0 border-b',
  rounded: 'rounded-none',
  shadow: 'shadow-none',
  body: {
    base: 'border-none w-full',
    background: '',
    padding: 'px-4 py-5 sm:p-6',
  },
  header: {
    base: 'w-full',
    background: '',
    padding: '',
  },
  footer: {
    base: '',
    background: '',
    padding: 'px-4 py-4 sm:px-6',
  },
}"
        v-for="(a, key) in articles"
        :key="`news-${key}`">
          <template #header>
            <elements-image :src="a.thumbnail" class="w-full height-full"/>
          </template>

          <nuxt-link :to="a.link" v-if="a.link">
            <div class="flex flex-col gap-2">
              <div class="text-xs"><helpers-date :date="a.date" /></div>
              <h1 class="text-xl">{{ a.title }}</h1>
              <div>{{ a.text}}</div>
            </div>
          </nuxt-link>

          <div v-else class="flex flex-col gap-2">
            <div class="text-xs"><helpers-date :date="a.date" /></div>
            <span class="text-xl">{{ a.title }}</span>
            <div>{{ a.text}}</div>
          </div>



<!--      <template #footer>-->
<!--        <Placeholder class="h-8" />-->
<!--      </template>-->
    </UCard>

<!--    -->
<!--    <UBlogPost v-for="(a, key) in articles" :key="`news-${key}`"-->
<!--      orientation="horizontal"-->
<!--      :title="a.title"-->
<!--      :description="a.text"-->
<!--      :date="a.date"-->
<!--      :image="{ src: a.thumbnail, alt: a.alt }"-->
<!--      :ui="UiConfig"-->
<!--    />-->
  </UBlogList>
</template>
<script setup>

const props = defineProps({
  articles: Array,
});

let articles;

// TODO: add "where date -> after today"

if(props.articles) {
  // If props.articles is an array of objects, we don't need to fetch, just return
  if(props.articles[0] !== Object(props.articles[0])) {
    const { data } = await useAsyncData('news', () => queryContent('news')
        .where({ _draft: false, })
        .where({ id: { $in: props.articles }})
        .find())
    articles = data;
  } else {
    articles = props.articles;
  }
}


</script>