<template>

  <elements-location
      v-for="l in locations"
      :location="l"
  />

</template>
<script setup>
const props = defineProps({
  locations: {
    type: Array,
    required: true,
  }
});



</script>