<template>
  <pages-homepage v-if="Object.keys(page).length" :page="page" />
</template>

<script setup>

import { onMounted } from 'vue';

const page = ref({})

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
    page.value = JSON.parse(JSON.stringify(previewData));
  }, 1000);


});

</script>