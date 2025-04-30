<template>
  <div class="flex flex-col gap-4 border-b pb-4 md:pb-6">
    <div class="flex gap-4"  v-for="(a, key) in articles" :key="`news-${key}`">
      <nuxt-link :to="a.link" v-if="a.link">
        <elements-image :src="a.image || fallbackImage" class="h-full w-20 md:w-40"/>
        <div class="flex flex-col md:gap-2  pt pb-8">
          <div class="text-xs"><helpers-date :date="a.date" /></div>
          <span class="text-xl">{{ a.title }}</span>
          <div class="text-sm">{{ a.text}}</div>
        </div>
      </nuxt-link>
      <div v-else class="grid grid-cols-8 gap-4 w-full">
        <elements-image :src="a.image || fallbackImage" class="col-span-2 min-w-20 w-full h-full "/>
        <div class="col-span-6 inline-flex flex-col md:gap-2 md:pt justify-center">
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


const fallbackImage = `assets/site/fallback.png`

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