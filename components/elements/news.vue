<template>
  <div class="flex flex-col gap-4 border-b pb-4 md:pb-6">
    <div class="flex gap-4"  v-for="(a, key) in articles" :key="`news-${key}`">
      <nuxt-link :to="a.link" v-if="a.link">
        <elements-image :src="a.thumbnail" class="h-full w-20 md:w-40"/>
        <div class="flex flex-col md:gap-2  pt pb-8">
          <div class="text-xs"><helpers-date :date="a.date" /></div>
          <span class="text-xl">{{ a.title }}</span>
          <div class="text-sm">{{ a.text}}</div>
        </div>
      </nuxt-link>
      <div v-else class="flex gap-4">
        <elements-image :src="a.thumbnail" class="h-full w-20 md:w-40"/>
        <div class="flex flex-col md:gap-2 md:pt md:pb-8">
          <div class="text-xs"><helpers-date :date="a.date" /></div>
          <span class="text-xl">{{ a.title }}</span>
          <div class="text-sm">{{ a.text}}</div>
        </div>
      </div>
    </div>
</div>

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