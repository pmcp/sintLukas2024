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
          base: 'leading-5 sm:leading-4 md:leading-5 text-xl font-bold md:text-lg sm:text-sm p lg:text-md bg-transparent',

          padding: ''
        }
      }">

           <div class="overflow-hidden h-24">

             <div class="relative h-full" v-if="course.images">

               <elements-image transparent :image="course.images[0]" class="col-span-1 h-full w-full object-cover object-center hover:object-scale-down"/>


               <div class="w-full h-full group-hover:opacity-10 transition-all  absolute top-0 left-0 mix-blend-overlay" :style="`background-color: ${course.cat.color}`"></div>
               <div class="w-full h-full  group-hover:opacity-10 transition-all absolute top-0 left-0 mix-blend-lighten opacity-50" :style="`background-color: ${course.cat.color}`"></div>
             </div>

             <div class="relative h-full" v-else-if="course.mainImage">
               <elements-image transparent :image="course.mainImage" class="pmcp-duotone col-span-1 h-full w-full object-cover object-center hover:object-scale-down"/>
<!--               <elements-image transparent :image="course.mainImage" class="col-span-1 h-full w-full object-cover object-center hover:object-scale-down"/>-->
<!--               <div class="w-full h-full group-hover:opacity-10 transition-all  absolute top-0 left-0 mix-blend-overlay" :style="`background-color: ${course.cat.color}`"></div>-->
<!--               <div class="w-full h-full  group-hover:opacity-10 transition-all absolute top-0 left-0 mix-blend-lighten opacity-50" :style="`background-color: ${course.cat.color}`"></div>-->
             </div>
           </div>
           <template #footer >
             <div class="px-4 py-2 p-2 sm:px-2 md:py-4 w-full h-full " :style="`background-color: ${course.cat.color}`">
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


<style>

.pmcp-duotone {
  background: url('https://jmperezperez.com/static/images/posts/fecolormatrix-kanye-west.jpg') no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.pmcp-duotone::before {
  background-color: rgb(240, 14, 46);
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  mix-blend-mode: darken;
  position: absolute;
  top: 0;
  left: 0;
}

.pmcp-duotone::after {
  background-color: rgb(25, 37, 80);
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  mix-blend-mode: lighten;
  position: absolute;
  top: 0;
  left: 0;
}
</style>