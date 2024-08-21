<template>
  <div class="flex w-full">
    <div class="absolute text-4xl pt-2 pb-4 max-w-md top-12">
      {{ data.title }}
    </div>
    <img  class=" object-cover w-full h-full	 top-0 left-0" :src="data.image" :alt="data.alt">
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object
});
</script>