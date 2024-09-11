<template>
     <div>
<!--       <pre>{{ course }}</pre>-->
       <h2 v-if="course.first" class="text-3xl uppercase font-bold pt-2 pb-4">{{ course.cat.nl}}</h2>
<!--       <nuxt-link :to="`${course._path}`"  :key="course.id">-->
        <UCard :ui="{
          divide: 'divide-none',
          ring: 'ring-0',
          shadow: 'shadow-none',
          rounded: 'rounded-none',
          background: 'bg-transparent',
          base: 'group ',
          body:
          {
            padding: 'px-0 py-0 p-0 sm:p-0 border-none',
          },
          header:
          {
            background: 'bg-transparent',
            padding: 'px-1 py-0 sm:p-0 px-0'
          },
          footer:
          {
            base: 'h-16 leading-5 sm:leading-4 md:leading-5 text-xl font-bold md:text-lg sm:text-sm p lg:text-md bg-transparent',

            padding: ''
          }
        }">

         <div class="overflow-hidden h-24">
           <div class="relative h-full" v-if="course.mainImage" :style="`background-color: ${course.cat.color}`">

             <elements-image transparent :image="`${course.mainImage}`" duotone class=" col-span-1 h-full w-full object-cover object-center " hoverEffect="none"/>
           </div>

         </div>
         <template #footer>
           <div class="px-4 py-2 p-2 sm:px-2 md:py-4 w-full h-full " :style="`background-color: ${course.cat.color}`">
             {{ course.title }}
             <br>
             <span v-if="showSubtitle">{{  course.age }}</span>
           </div>
         </template>
       </UCard>
<!--       </nuxt-link>-->
     </div>


</template>

<script setup>
const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
  showSubtitle: {
    type: Boolean,
    required: false,
    default: false
  }
});


</script>
