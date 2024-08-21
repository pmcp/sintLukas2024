<template>
  <!--  TODO: Make Date Nice-->
  <UBlogList orientation="vertical">
    <UCard
        :ui="cardConfig"
        v-for="(a, key) in articles"
        :key="`news-${key}`">
      <template #header>
        <NuxtImg :src="a.thumbnail" :alt="a.alt" />
<!--        <img :src="a.thumbnail" :alt="a.alt" />-->
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
        <h1 class="text-xl">{{ a.title }}</h1>
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

if(props.articles.length === 0) {
  const { data } = await useAsyncData('news', () => queryContent('news')
      .where({ _draft: false, },
          { id: { $in: props.articles }}
      )
      .find())
  articles = data;
} else {
  const { data } = await useAsyncData('news', () => queryContent('news')
      .where({ _draft: false, })
      .where({ id: { $in: props.articles }})
      .find())
  articles = data;
}

const cardConfig = {
  base: 'flex flex-row border-0 ',
  background: 'bg-white',
  divide: 'divide-y divide-gray-200 dark:divide-gray-800',
  ring: 'ring-0 border-b',
  rounded: 'rounded-none',
  shadow: 'shadow-none',
  body: {
    base: 'border-none',
    background: '',
    padding: 'px-4 py-5 sm:p-6',
  },
  header: {
    base: '',
    background: '',
    padding: '',
  },
  footer: {
    base: '',
    background: '',
    padding: 'px-4 py-4 sm:px-6',
  },
}
</script>