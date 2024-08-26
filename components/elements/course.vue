<template>
     <div>
       <h2 v-if="course.first" class="text-xl uppercase font-bold pt-2">{{ course.cat.nl}}</h2>
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
          base: 'leading-5 sm:leading-4 md:leading-5 text-xl font-bold md:text-lg sm:text-sm p lg:text-md bg-transparent',

          padding: ''
        }
      }">

           <div class="overflow-hidden h-24">
             <div class="relative" v-if="course.mainImage">
               <nuxtImg class="w-full group-hover:scale-110 transition-all ease-in duration-200 grayscale group-hover:grayscale-0 transition-all h-24 object-cover	" :src="course.mainImage" />
<!--               <img class="w-full group-hover:scale-110 transition-all ease-in duration-200 grayscale group-hover:grayscale-0 transition-all h-24 object-cover	" :src="course.mainImage" />-->
               <div class="w-full h-full group-hover:opacity-10 transition-all  absolute top-0 left-0 mix-blend-overlay" :style="`background-color: ${course.cat.color}`"></div>
               <div class="w-full h-full  group-hover:opacity-10 transition-all absolute top-0 left-0 mix-blend-lighten opacity-50" :style="`background-color: ${course.cat.color}`"></div>
             </div>
           </div>
           <template #footer >
             <div class="px-4 py-2 p-2 sm:px-2 md:py-4 w-full h-full" :style="`background-color: ${course.cat.color}`">
               {{ course.title }}
               <br>{{  course.age }}
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
  }
});


</script>
