<template>
  <NuxtLayout class="relative">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <UPageGrid :ui="{wrapper: 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8'}">
        <elements-banner :data="{ title: '', image: data.images }" class="col-span-full h-48"/>

          <div class="flex flex-col col-span-full md:col-span-2">
            <h1 class="text-4xl pb-0">Contact</h1>
            <elements-text :text="location.info" />
          </div>

        <div class="relative h-80 md:h-full col-span-2 h-40">

          <MapboxMap
              map-id="location"
              :options="{
              style: 'mapbox://styles/mapbox/light-v11', // style URL
              center: JSON.parse(location.location).coordinates, // starting position
              zoom: 14 // starting zoom
              }"
          >
            <MapboxDefaultMarker
              marker-id="hoofdlocationMarker"
              :options="{}"
              :lnglat="JSON.parse(location.location).coordinates"
            >
            </MapboxDefaultMarker>
          </MapboxMap>
        </div>
      </UPageGrid>
    </div>




    <div class="mt-8">
      <elements-background :data="{style: 1}" />
    </div>

    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-1 pt-16 grid grid-cols-2 gap-8  ">
      <div class="col-span-full lg:col-span-1">
        <div class="uppercase text-sm font-bold pb-4">Vestigingen</div>
        <elements-locations/>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
// Get main page data
const { data } = await useAsyncData('page', () => queryContent('fixedpages/contact').findOne())

// Get main location
const { data: location, error } = await useAsyncData('location', () => queryContent('locations/nl/hoofdschool').findOne())
console.log('HERE', location, error)
</script>