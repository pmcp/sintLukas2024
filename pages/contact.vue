<template>

<!--  <NuxtLayout v-if="data" class="relative">-->
    <elements-banner key="banner-contact" :data="{ title: '', image: data.images }" />
    <div class="mx-auto px-6 lg:px-8 max-w-7xl">

      <UPageGrid :ui="{wrapper: 'grid grid-cols-1 md:grid-cols-5 xl:grid-cols-5 gap-8'}">

          <div class="flex flex-col col-span-full md:col-span-2 gap-8">
            <h1 class="text-4xl pb-0">Contact</h1>
            <elements-markdown :markdownString="location.info" class="prose"/>
          </div>
        <div class="relative h-80 col-span-full  md:h-full col-span-full md:col-start-3 lg:col-start-3  my-8 md:my-0">
<!--          <client-only>-->
<!--          {{ location.location }}-->
          <elements-location class="h-full" fillheight location="/locations/nl/hoofdschool"/>
<!--          -->
<!--            <MapboxMap-->
<!--                map-id="main_location"-->
<!--                :options="{-->
<!--                style: 'mapbox://styles/mapbox/light-v11', // style URL-->
<!--                center: JSON.parse(location.location).coordinates, // starting position-->
<!--                zoom: 14 // starting zoom-->
<!--                }"-->
<!--            >-->
<!--              <MapboxDefaultMarker-->
<!--                marker-id="hoofdlocationMarker"-->
<!--                :options="{}"-->
<!--                :lnglat="JSON.parse(location.location).coordinates"-->
<!--              >-->
<!--              </MapboxDefaultMarker>-->
<!--            </MapboxMap>-->
<!--          </client-only>-->
        </div>
      </UPageGrid>
    </div>


    <div class="mt-8">
<!--      <elements-background :data="{style: 1}" />-->
    </div>

    <div class="mx-auto px-6 lg:px-8 max-w-7xl relative z-1 pt-16 grid grid-cols-2 gap-8  ">
      <div class="col-span-full lg:col-span-full">
        <div class="uppercase text-sm font-bold pb-4">Vestigingen</div>
        <elements-locations />
      </div>
    </div>
        <div class="h-8"></div>

<!--  </NuxtLayout>-->
</template>

<script setup>
const { data } = await useAsyncData('contact', () => queryContent('fixedpages/contact').findOne())
const { data: location } = await useAsyncData('location', () => queryContent('locations/nl/hoofdschool').findOne())
</script>