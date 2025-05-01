<template>
  <div class="relative" >
    <elements-banner :data="{ title: '', image: data.mainImage }"/>
    <div class="mx-auto px-6 lg:px-8 max-w-7xl grid grid-cols-1 gap-8 ">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-4">
        <div>
          <h1 class="text-4xl md:pt-4 col-span-2 pb-1">{{ data.title }}</h1>
          <div class="text-1xl col-span-2 font-bold ">{{ data.age }}</div>
        </div>
        <div class="grid md:grid-cols-2 col-span-full gap-4 md:gap-0">
          <div>
            <elements-markdown :markdownString="data.markdown" class="col-span-1 prose pr-0 md:pr-8 md:pt-4"/>

          </div>
          <div class="col-span-1 grid grid-cols-1 lg:grid-cols-3 h-fit border-l-0 md:border-l">
            <elements-markdown v-if="data.side1" :markdownString="data.side1" class="h-fit pr-2 col-span-1 prose  md:pl-4 pmcp-prose_sidebar"/>
            <elements-markdown v-if="data.side2" :markdownString="data.side2" class="h-full col-span-2 prose border-l-0 md:border-l md:pl-4 pmcp-prose_sidebar pt-4 md:pt-0"/>
          </div>

          <!--        <elements-text :text="data.markdown" :side1="data.side1" :side2="data.side2" class="col-span-2" />-->
        </div>
      </div>

      <elements-videos v-if="data.title === 'Kunstkuur'"/>

      <div v-if="data.persons || data.images"><elements-background :data="{style: 1}" /></div>

      <div class=" relative z-1">
        <elements-container class="">
          <div v-if="data.persons" class="col-span-2 grid gap-4 md:w-2/3">
            <h2 class="text-lg uppercase font-bold">Leerkrachten</h2>


            <elements-persons  :persons="data.persons" />

            <!--            <elements-button :flavor="2" :to=""/>-->
          </div>

          <div v-if="data.images" class="col-span-2 grid gap-4">
            <h2 class="text-lg uppercase font-bold">In beeld</h2>
            <elements-images :images="data.images" />
          </div>
        </elements-container>

        <div class="h-16"></div>

      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data'])

//
// // Create a ref to store the value of the prop
// const data = ref(props.data);
//
// // Watch for changes in props.myProp
// watch(() => props.data, (newValue, oldValue) => {
//   // React to prop changes
//   data.value = newValue; // Update the value in the ref if needed
// },  { deep: true });

</script>