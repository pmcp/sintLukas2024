<template>
    <elements-banner :data="{ title: '', image: data.images }" class=" h-48"/>
  <NuxtLayout v-if="data" class="relative">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <UPageGrid :ui="{wrapper: 'grid grid-cols-1 md:grid-cols-5 xl:grid-cols-5 gap-8'}">

          <div class="flex flex-col col-span-full md:col-span-2 ">
            <h1 class="text-4xl pb-0">Contact</h1>
            <elements-markdown :markdownString="location.info" class="prose-sm"/>
          </div>
        <div class="relative h-80 col-span-full md:col-span-3 md:h-full w-full">
          <client-only>
            <MapboxMap
                map-id="main_location"
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
          </client-only>
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
const { data } = await useAsyncData('page', () => queryContent('fixedpages/contact').findOne())
const { data: location } = await useAsyncData('location', () => queryContent('locations/nl/hoofdschool').findOne())
</script>