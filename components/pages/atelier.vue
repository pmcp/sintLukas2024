<template>
  <div class="relative" >
    <elements-banner :data="{ title: '', image: myData.mainImage }"/>
    <div class="mx-auto px-6 lg:px-8 max-w-7xl grid grid-cols-1 gap-8 ">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-4">
        <div>
          <h1 class="text-4xl md:pt-4 col-span-2 pb-1">{{ myData.title }}</h1>
          <div class="text-1xl col-span-2 font-bold ">{{ myData.age }}</div>
        </div>
        <div class="grid md:grid-cols-2 col-span-full gap-4 md:gap-0">
          <elements-markdown :markdownString="myData.markdown" class="col-span-1 prose pr-0 md:pr-8 md:pt-4"/>
          <div class="col-span-1 grid grid-cols-1 lg:grid-cols-3 h-fit">
            <elements-markdown v-if="myData.side1" :markdownString="myData.side1" class="h-fit pr-2 col-span-1 prose border-l-0 md:border-l md:pl-4 pmcp-prose_sidebar"/>
            <elements-markdown v-if="myData.side2" :markdownString="myData.side2" class="h-full col-span-2 prose border-l-0 md:border-l md:pl-4 pmcp-prose_sidebar pt-4 md:pt-0"/>
          </div>

          <!--        <elements-text :text="myData.markdown" :side1="myData.side1" :side2="myData.side2" class="col-span-2" />-->
        </div>
      </div>
      <div v-if="myData.persons && myData.images"><elements-background :data="{style: 1}" /></div>


      <div class=" relative z-1">
        <elements-container class="">
<!--          <div v-if="myData.persons" class="col-span-2 grid gap-4 w-2/3">-->
<!--            <h2 class="text-lg uppercase font-bold">Leerkrachten</h2>-->
<!--            <elements-persons  :persons="myData.persons" />-->
<!--            &lt;!&ndash;            <elements-button :flavor="2" :to=""/>&ndash;&gt;-->
<!--          </div>-->

          <div v-if="myData.images" class="col-span-2 grid gap-4">
            <h2 class="text-lg uppercase font-bold">In beeld</h2>
            <elements-images :images="myData.images" />
          </div>
        </elements-container>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data'])

// Create a ref to store the value of the prop
const myData = ref(props.data);

// Watch for changes in props.myProp
watch(() => props.data, (newValue, oldValue) => {
  // React to prop changes
  console.log('Prop changed:', newValue);
  myData.value = newValue; // Update the value in the ref if needed
},  { deep: true });

</script>