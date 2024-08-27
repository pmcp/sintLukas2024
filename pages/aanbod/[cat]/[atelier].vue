<template >
  <NuxtLayout class="relative">
    <div class="grid grid-cols-1 gap-8 ">
      <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <elements-banner :data="{ title: '', image: atelier.images[0] }" class="col-span-1 md:col-span-2 h-48"/>
        <div>
          <h1 class="text-4xl pt-8 col-span-2 pb-2">{{ atelier.title }}</h1>
          <div class="text-1xl col-span-2 font-bold">{{ atelier.age }}</div>
        </div>
        <elements-text :text="atelier.markdown" :side1="atelier.side1" :side2="atelier.side2" class="col-span-2" />
      </elements-container>
      <div><elements-background :data="{style: 1}" /></div>


      <div class=" relative z-1">
        <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div v-if="atelier.persons" class="col-span-2 grid gap-4">
            <h2 class="text-lg uppercase font-bold">Leerkrachten</h2>
            <elements-persons :persons="atelier.persons" />
<!--            <elements-button :flavor="2" :to=""/>-->
          </div>

          <div v-if="atelier.persons" class="col-span-2 grid gap-4">
            <h2 class="text-lg uppercase font-bold">In beeld</h2>
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
