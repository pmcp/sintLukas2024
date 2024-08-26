<template >
  <NuxtLayout>
    <div class="grid grid-cols-1 gap-8">



      <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div>
          <h1 class="text-4xl pt-8 col-span-2 pb-2">{{ atelier.title }}</h1>
          <div class="text-1xl col-span-2 font-bold">{{ atelier.age }}</div>
        </div>
        <elements-text :text="atelier.markdown" :side1="atelier.side1" :side2="atelier.side2" class="col-span-2" />
      </elements-container>


      <div class="background-grid ">
        <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div v-if="atelier.persons" class="col-span-2">
            <h2>Leerkrachten</h2>
            <elements-persons :persons="atelier.persons" />
          </div>

          <div v-if="atelier.persons" class="col-span-2">
            <h2>In beeld</h2>
            <elements-images :images="atelier.images" />
          </div>
        </elements-container>
      </div>
    </div>



  </NuxtLayout>
</template>

<script setup>
const route = useRoute()
// Get the category
const { data: cat } = await useAsyncData('cat', () => queryContent('/aanbod/nl/')
    .where({ id: route.params.cat })
    .findOne())

// Get the atelier
const atelier = cat.value.ateliers.find(x => x.id === route.params.atelier)

</script>
