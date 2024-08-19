<template>
  <div>
    <UPageGrid :ui="{wrapper: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8'}">
<!--      <UBlogList orientation="vertical" class="col-span-2">-->
<!--        <UBlogPost-->
<!--            v-for="i in  3"-->
<!--            :ui="{image: { wrapper: 'ring-0 rounded-none'}}"-->
<!--            title="Start inschrijvingen"-->
<!--            description="Schrijf je nu in voor schooljaar 2024-2025."-->
<!--            orientation="horizontal"-->
<!--            :image="{ src: `/assets/uploads/${i}.jpg`, alt: 'Start inschrijvingen' }"-->
<!--        />-->
<!--      </UBlogList>-->
<!--      <elements-accordeon :items="[{ label: 'Over de opleiding', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }, { label: 'Uurrooster', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }, { label: 'Materiaal', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }, { label: 'Studietraject', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }]" />-->


<!--      <div class="w-80 h-80 background-grid col-span-3">-->
<!--        test-->
<!--      </div>-->



      <div v-for="(element, key) in elements" :key="`el${key}`" class="pmcp-container" :class="getContainerClasses(element)">
        <!--  MARKDOWN -->
        <elements-markdown v-if="element.type === 'text'" class="prose lg:prose-md" :markdownString="element.markdown" />
        <!--  IMAGES -->
        <elements-images v-if="element.type === 'images'" :images="element.image" :layout="element.layout" />
        <!-- LOCATION-->
        <elements-locations v-if="element.type === 'locations'" :locations="element.location" />
        <!-- TEACHERS-->
        <elements-teachers v-if="element.type === 'teachers'" :teachers="element.teacher" />
        <!-- COURSES-->
<!--        <pre>{{ element }}</pre>-->
        <elements-courses v-if="element.type === 'ateliers'" :courses="element.category" />
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