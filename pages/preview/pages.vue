<template>
  <main v-if="data ">
  <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " :elements="data.elements"/>
  </main>
</template>

<script setup>

import { onMounted } from 'vue';

const data = ref({})

onMounted(() => {
  setInterval(() => {
    let previewData = {};
    let current = window;
    let n = 0;
    while (current.parent && n < 10) {
      current = current.parent;
      n += 1;
      if (current.previewDataCMS) {
        previewData = current.previewDataCMS;
      }
    }
    data.value = JSON.parse(JSON.stringify(previewData));
  }, 1000);


});

</script>