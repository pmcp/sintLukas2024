<template>
  <div class="flex flex-col gap-4 border-b pb-4 md:pb-6">
    <div class="flex gap-4"  v-for="(a, key) in orderedArticles" :key="`news-${key}`">
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

const orderedArticles = ref([]);


const fallbackImage = `assets/site/fallback.png`

const sortByDateDesc = (articles) =>
    [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


if(props.articles) {
  // check if the first item of props.articles is an object (a bit optimistic, we go further on the basis that the rest are also objects:
  if (props.articles[0].constructor === Object) {
    orderedArticles.value = sortByDateDesc(props.articles)
  } else {
    const { data } = await useAsyncData('news', () => queryContent('news')
        .where({ _draft: false, })
        .where({ id: { $in: props.articles }})
        .find())
    orderedArticles.value = sortByDateDesc(data);
  }


}


</script>