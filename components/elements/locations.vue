<template>
  <div v-if="theLocs" class="grid grid-cols-2 md:grid-cols-2 w-full items-end gap-4 md:gap-8">
    <elements-location
        v-for="l in theLocs"
        :location="l._path"
        :key="l._path"
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
  const { data } = await useAsyncData('locations-1', () => queryContent('locations/nl')
      .where({ id: { $in: props.locations }})
      .find()
  )
  theLocs = data;

} else {
  const { data } = await useAsyncData('locations-2', () => queryContent('locations/nl')
      .only(['_path'])
      .find()
  )
  theLocs = data;

}




</script>