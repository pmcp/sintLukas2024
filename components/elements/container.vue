<template>
  <div>
    <UPageGrid :ui="{wrapper: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8'}">
      <div v-for="(element, key) in elements" :key="`el${key}`" class="pmcp-container" :class="getContainerClasses(element)">
        <!-- TITLE-->
        <h2 v-if="element.title" class="text-lg uppercase font-bold pt-2 pb-4">{{ element.title}}</h2>
        <!-- MARKDOWN -->
        <elements-markdown v-if="element.type === 'text'" class="prose lg:prose-md" :markdownString="element.markdown" />
        <!-- IMAGES -->
        <elements-images v-if="element.type === 'images'" :images="element.image" :layout="element.layout" />
        <!-- LOCATION -->
        <elements-locations v-if="element.type === 'locations'" :locations="element.location" />
        <!-- TEACHERS -->
        <elements-teachers v-if="element.type === 'teachers'" :teachers="element.teacher" />
        <!-- COURSES -->
        <elements-courses v-if="element.type === 'ateliers'" :courses="element.category" />
        <!-- NEWS -->
        <elements-news v-if="element.type === 'news'" :articles="element.articles"/>
      </div>
    </UPageGrid>
  </div>
</template>


<script setup>
const props = defineProps({
  elements: Object,
});

function getContainerClasses(element){
  let squares = ''
  if(element.squares) squares = 'background-grid'
  return `col-span-${element.width || 2} ${squares}`
}

</script>

<style>


.pmcp-container {
  container-type: inline-size;

}

</style>