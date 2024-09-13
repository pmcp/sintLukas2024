<template>
  <elements-button :flavor="0" :download="data.file">
    {{ data.buttonLabel }}
  </elements-button>
</template>
<script setup>
const props = defineProps({
  download: {
    type: String,
    default: ''
  },
});


const { data } = await useAsyncData(`download-${props.download}`, () => queryContent(`media/downloads/`)
    .where({ id: props.download })
    .findOne())

</script>