<template>
  <div
      v-for="(c, key) in categories"
      :key="`categories-${key}`"
      class="mb-4"
      >
    <span
      class="text-4xl uppercase font-bold px-2"
      :style="{
      backgroundColor: c.color,
      backgroundSize: 'contain',
      backgroundImage: `url(${c.background})`}">
    <!--    TODO: Lang -->
    {{ c.nl }}
    </span>
  </div>

</template>
<script setup>
const props = defineProps({
  categories: Object
});

let categories = []
const { data } = await useAsyncData('categories', () => queryContent('site/categories')
    .find())

if(props.categories.length > 0) {
  categories = data.value[0].ateliers.filter(i => props.categories.includes(i.id))
} else {
  categories = data.value[0].ateliers
}



</script>
