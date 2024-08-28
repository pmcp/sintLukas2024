<template>
  <div class="grid grid-cols-2 md:grid-cols-2 w-full items-end gap-8">
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
  const { data } = await useAsyncData('locations', () => queryContent('locations/nl')
      .where({ id: { $in: props.locations }})
      .find()
  )
  locations = data;

} else {
  const { data } = await useAsyncData('locations', () => queryContent('locations/nl')
      .only(['_path'])
      .find()
  )
  theLocs = data;

  // const items = await queryContent('locations/nl')
  //     .only(['_path'])
  //     .find()
  // theLocs = items;
}




</script>