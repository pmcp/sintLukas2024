<template>
  <div class="bg-white self-stretch" >
      <div class="relative" :class="[fillheight ? 'h-full' : 'h-40']">
    <client-only>
        <MapboxMap
            style="width: 100%; height: 100%;"
            :map-id="location"
            :options="{
            style: 'mapbox://styles/mapbox/light-v11', // style URL
            center: lnglat, // starting position
            zoom: 14, // starting zoom
            scrollZoom: false,
          }">
          <MapboxDefaultMarker :marker-id="`locationMarker-${$route.name}-${location}`" :options="{}" :lnglat="lnglat">
          </MapboxDefaultMarker>
        </MapboxMap>
      </client-only>
      </div>
        <div class="pb-5 pt-2 px-2 bg-third-50" v-if="showAddress">
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
        required: true
      },
      showAddress: {
        type: Boolean,
        default: false
      },
      fillheight: {
        type: Boolean,
        default: false
      }
    }
);

const { data } = await useAsyncData(`location-${props.location}`, () => queryContent(props.location).findOne())

const lnglat = computed(() => JSON.parse(data.value.location).coordinates)



const getCoordinates = (location) => {
  const coords = JSON.parse(location).coordinates
  return `${coords[1]},${coords[0]}`
}

</script>

<style>
.mapboxgl-marker path {
  fill: #c1e1d1;
}

.mapboxgl-ctrl-logo {
  display: none !important;
}

</style>