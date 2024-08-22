<template>
  <div class="w-full pb-24 pt-8 relative ">
    <div class="w-full h-full absolute object-cover top-0 left-0" style="width: 120%;left: -10%;">
      <img v-if="data.image" class="z-0 absolute object-cover w-full h-full	 top-0 left-0" :src="data.image" :alt="data.alt">
    </div>
    <div class="relative text-3xl max-w-md h-auto whitespace-pre-line	">
      {{ data.title }}
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  data: Object
});
</script>