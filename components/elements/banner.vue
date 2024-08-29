<template>
  <div class="w-full">
    <elements-image hover-effect="none" transparent :image="data.image" class="col-span-1 h-full w-full object-cover object-center hover:object-scale-down"/>
    <div v-if="data.image" class=" top-0 left-0 bg-red-100">

    </div>
<!--    <div class="relative text-3xl h-auto whitespace-pre-line mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">-->
<!--      {{ data.title }}-->
<!--    </div>-->
  </div>
</template>

<script setup>

const props = defineProps({
  data: Object
});
</script>