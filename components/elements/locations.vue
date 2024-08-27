<template>
  <elements-location
      v-for="l in theLocs"
      :location="l._path"
  />
</template>
<script setup>
const props = defineProps({
  locations: {
    type: Array
  }
});


let theLocs
if(props.locations) {
  // UNTESTED!!

  const items = await queryContent('locations/nl/')
      .where({ id: { $in: props.locations }})
      .find()
  locations = items;

} else {
  const items = await queryContent('locations/nl')
      .only(['_path'])
      .find()
  console.log('DATA', items)
  theLocs = items;
}




</script>