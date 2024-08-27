<template>
  <div class="grid grid-cols-2 md:grid-cols-2 w-full items-end gap-8">
  <elements-location
      class="col-span-full lg:col-span-1"
      v-for="l in theLocs"
      :location="l._path"
  />
  </div>
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