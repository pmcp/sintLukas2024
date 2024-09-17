<template>
  <div>
    <NuxtLayout name="preview">
      {{ page }}
      <pages-aanbod v-if="Object.keys(page).length" :data="[page]" :preview="true"/>
    </NuxtLayout>
  </div>

</template>

<script setup>

import { onMounted } from 'vue';

definePageMeta({
  layout: false,
})

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
        page.value = {}
        previewData = current.previewDataCMS;
      }
    }
    page.value = JSON.parse(JSON.stringify(previewData));
  }, 1000);


});

</script>