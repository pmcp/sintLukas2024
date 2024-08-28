<template>
  <nuxt-layout grid>
    <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <elements-banner :data="{ title: 'Vind jouw atelier. \nOntdek onze extra muros projecten.'}" class="col-span-2"/>
      <div class="w-full col-span-2 md:col-span-1 grid grid-cols-1 md:grid-cols-2 w-full items-end gap-8">
        <nuxt-link v-for="c in courses" :key="`courses_${c.cat.id}`" :to="`/aanbod/${c.cat.id}/${c.id}`" class="w-full mb-2">
          <elements-course :course="c" class="grow mb-2"/>
        </nuxt-link>
      </div>
    </elements-container>
  </nuxt-layout>

</template>

<script setup>
const { data } = await useAsyncData('courses', () => queryContent('/aanbod/nl')
    .sort({ order: 1 })
    .find()
)

// loop through all courses, add the info of the course to the atelier
let courses = [];



for (const cat in data.value) {

  if(data.value[cat].ateliers) {
    if(data.value[cat].ateliers.length > 0) {
      // Add first = true to first course
      data.value[cat].ateliers[0].first = true
      // Flatten courses in courses array
      courses = [...courses, ...data.value[cat].ateliers.map(x => {
        x.cat = {
          id: data.value[cat].id || '',
          mainImage: data.value[cat].mainImage || '',
          color: data.value[cat].color || '',
          nl: data.value[cat].nl || '',
        }
        return x;
      })]
    }


  }

}
</script>