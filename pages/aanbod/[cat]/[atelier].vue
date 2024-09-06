<template >
  <NuxtLayout class="relative">
    <elements-banner :data="{ title: '', image: atelier.mainImage }"/>
    <div class="mx-auto px-6 lg:px-8 max-w-7xl grid grid-cols-1 gap-8 ">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-8">
        <div>
          <h1 class="text-4xl md:pt-4 col-span-2 pb-1">{{ atelier.title }}</h1>
          <div class="text-1xl col-span-2 font-bold ">{{ atelier.age }}</div>
        </div>
        <div class="grid md:grid-cols-2 col-span-full gap-4 md:gap-0">
          <elements-markdown :markdownString="atelier.markdown" class="col-span-1 prose pr-0 md:pr-8"/>
          <div class="col-span-1 grid grid-cols-1 lg:grid-cols-3">
            <elements-markdown :markdownString="atelier.side1" class="col-span-1 prose border-l-0 md:border-l md:pl-4 pmcp-prose_sidebar"/>
            <elements-markdown :markdownString="atelier.side2" class="col-span-2 prose border-l-0 md:border-l md:pl-4 pmcp-prose_sidebar pt-4 md:pt-0"/>
          </div>

          <!--        <elements-text :text="atelier.markdown" :side1="atelier.side1" :side2="atelier.side2" class="col-span-2" />-->
        </div>
      </div>
      <div v-if="atelier.persons && atelier.images"><elements-background :data="{style: 1}" /></div>


      <div class=" relative z-1">
        <elements-container class="mx-auto px-6 lg:px-8 max-w-7xl">
          <div v-if="atelier.persons" class="col-span-2 grid gap-4">
            <h2 class="text-lg uppercase font-bold">Leerkrachten</h2>
            <elements-persons  :persons="atelier.persons" />
<!--            <elements-button :flavor="2" :to=""/>-->
          </div>

          <div v-if="atelier.images" class="col-span-2 grid gap-4">
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
const { data: cat } = await useAsyncData(`cat-${route.params.cat}`, () => queryContent('/aanbod/nl/')
    .where({ id: route.params.cat })
    .findOne()
)

// Get the atelier
const atelier = cat.value.ateliers.find(x => x.id === route.params.atelier)

</script>
