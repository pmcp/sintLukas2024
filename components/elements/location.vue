<template>
  <UCard :ui="{ body: { padding: 'px-0 py-0 p-0 sm:p-0'}, rounded: 'rounded-none', header: {base: 'dropdown-label'}, footer: {base: 'dropdown-content'}}" ref="dropdown" class="dropdown ">
    <template #header>
      <div class="flex flex-row justify-between items-end">
        <div>
          <div>{{ data.name }}</div>
          <div>{{ data.street }}</div>
          <div>{{ data.zip }} {{ location.city }}</div>
        </div>
        <UButton
            icon="i-heroicons-chevron-down"
            size="sm"
            color="black"
            square
            variant="ghost"
            @click="show = !show"
            @mouseover="hover = true"
            @mouseout="hover = false"
            class="hover:bg-primary-700 pmcp-buttonEffect"
        />
      </div>
    </template>

    <div class="relative h-64 dropdown-content" v-if="show">
      <MapboxMap
          map-id="location"
          :options="{
        style: 'mapbox://styles/mapbox/light-v11', // style URL
        center: JSON.parse(data.location).coordinates, // starting position
        zoom: 14 // starting zoom
      }"
      >
        <MapboxDefaultMarker
            marker-id="locationMarker"
            :options="{}"
            :lnglat="JSON.parse(data.location).coordinates"
        >
        </MapboxDefaultMarker>
      </MapboxMap>
    </div>
    <div v-else class="pmcp-buttonEffect-receiver w-full pt-1 bg-primary-100" :class="{'bg-primary-700': hover}">

    </div>

    <template #footer v-if="show">
      <elements-markdown class="prose lg:prose-md" v-if="show" :markdownString="data.info" />
    </template>
  </UCard>


</template>

<script setup>
const props = defineProps({
  location: {
    type: String,
    required: true,
  }
});

// TODO: lang

console.log(props.location)
const { data } = await useAsyncData('location', () => queryContent(`locations/${props.location}.nl`).findOne())

const dropdown = ref() // we need a DOM node
const show = ref(false)
const hover = ref(false)
// onMounted(() => {
//   autoAnimate(dropdown.value)
// })

</script>