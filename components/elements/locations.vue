<template>
  <div style="container-type: inline-size;">
  <div v-if="theLocs" class="location grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full items-end gap-4 md:gap-4 h-auto">
    <elements-location
        v-for="l in theLocs"
        :location="l._path"
        :key="l._path"
        showAddress
    />
  </div>
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

  const { data } = await useAsyncData('locations-1', () => queryContent('locations/nl')
      .where({ id: { $in: props.locations }})
      .find()
  )
  theLocs = data;

} else {
  console.log('here')
  const { data } = await useAsyncData('locations-2', () => queryContent('locations/nl')
      .where({name: { $ne: 'Hoofdschool' }})
      .only(['_path'])
      .find()
  )
  theLocs = data;

}




</script>

<style>
@container (max-width: 580px) {
  .location {
    grid: auto-flow / 1fr 1fr;
  }
}
</style>