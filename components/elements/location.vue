<template>
  <div class="bg-white self-stretch">
    <div class="h-40 w-full relative">
      <client-only>
        <MapboxMap
            style="width: 100%; height: 100%;"
            :map-id="location"
            :options="{
            style: 'mapbox://styles/mapbox/light-v11', // style URL
            center: JSON.parse(data.location).coordinates, // starting position
            zoom: 14 // starting zoom
          }">
          <MapboxDefaultMarker :marker-id="`locationMarker-${location}`" :options="{}" :lnglat="JSON.parse(data.location).coordinates">
          </MapboxDefaultMarker>
        </MapboxMap>
      </client-only>
    </div>

  <div class="p-4">
    <div class="font-bold text-sm">{{ data.name }}</div>
    <div class="text-xs">
      <div>{{ data.street }}</div>
      <div>{{ data.zip }} {{ data.city }}</div>
    </div>
    <div>
      <a class="opacity-50 text-xs" target="_blank" :href="`https://maps.google.com/?ll=${getCoordinates(data.location)}`">
        Bekijk in Google Maps
      </a>
    </div>

  </div>
  </div>
</template>

<script setup>
const props = defineProps({
  location: {
    type: String,
    required: true,
  }
});

const { data } = await useAsyncData(`location-${props.location}`, () => queryContent(props.location)
    .findOne())

const getCoordinates = (location) => {
  const coords = JSON.parse(location).coordinates
  const newCoords = `${coords[1]},${coords[0]}`
  return newCoords
}

const cardUi = {
  body: { padding: 'px-0 py-0 p-0 sm:p-0'},
  divide: 'divide-none',
  shadow: 'shadow-none',
  rounded: 'rounded-none',
  ring: 'ring-0 ',
  header: {base: 'dropdown-label'},
  footer: {base: 'dropdown-content'}
}

</script>