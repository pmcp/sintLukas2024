<template>
  <div class="overflow-x-hidden">
    <UPageGrid :ui="{wrapper: 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-16'}">
      <div v-for="(element, key) in elements" :key="`el${key}`" class="pmcp-container relative z-1g" :class="element.width === 1 ? 'col-span-1' : 'col-span-full'">
        <!-- BACKGROUND --> <div><elements-background v-if="element.type === 'bg'" :data="element" /></div>
        <!-- TITLE-->       <div><h2 v-if="element.title && element.type !== 'banner'" class="text-md uppercase font-bold pt-2 pb-4">{{ element.title}}</h2></div>
        <!-- BANNER -->     <div><elements-banner v-if="element.type === 'banner'" :data="element" /></div>
        <!-- TEXT -->       <div><elements-text v-if="element.type === 'text'" :text="element.markdown" :side1="element.side1" :side2="element.side2" /></div>
        <!-- IMAGES -->     <div><elements-images v-if="element.type === 'images'" :images="element.image" :layout="element.layout" /></div>
        <!-- LOCATION -->   <div><elements-locations v-if="element.type === 'locations'" :locations="element.location" /></div>
        <!-- TEACHERS -->   <div><elements-persons v-if="element.type === 'persons'" :persons="element.persons" /></div>
        <!-- COURSES -->    <div><elements-courses v-if="element.type === 'courses'" :categories="element.category" /></div>
        <!-- NEWS -->       <div><elements-news v-if="element.type === 'news'" :articles="element.articles"/></div>
        <!-- CATEGORIES --> <div><elements-categories v-if="element.type === 'categories'" :categories="element.categories"/></div>
      </div>
      <slot />

    </UPageGrid>
  </div>
</template>


<script setup>
const props = defineProps({
  elements: Array,
  default: []
});
</script>