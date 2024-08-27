<template>
  <div>
    <UCard :ui="cardUi">
      <div class="relative h-48">
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
      <template #footer >
        <div>
          <div>{{ data.name }}</div>
          <div>{{ data.street }}</div>
          <div>{{ data.zip }} {{ location.city }}</div>
        </div>
      </template>
    </UCard>
  </div>

</template>

<script setup>
const props = defineProps({
  location: {
    type: String,
    required: true,
  }
});

const cardUi = { body: { padding: 'px-0 py-0 p-0 sm:p-0'},  divide: 'divide-none', shadow: 'shadow-none', rounded: 'rounded-none', ring: 'ring-0 ', header: {base: 'dropdown-label'}, footer: {base: 'dropdown-content'}}
const data = await queryContent(props.location).findOne()
</script>