<template>
  <nuxt-layout grid>
    <elements-banner key="banner-aanbod" :data="{ title: 'Vind jouw atelier. \nOntdek onze extra muros projecten.'}" class="mb-12 md:mb-16 h-60"/>
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-cols-[1fr_1fr_1px_1fr] gap-16">
      <div class="w-full col-span-full md:col-span-full lg:col-span-2 grid grid-cols-1 md:grid-cols-2 w-full items-end gap-8 max-w-2xl	">
        <nuxt-link v-for="c in courses.filter(c => !c.cat.side)" :key="`courses_${c.cat.id}`" :to="`/aanbod/${c.cat.id}/${c.id}`" class="w-full mb-2">
          <elements-course :course="c" class="grow mb-2"/>
        </nuxt-link>
      </div>
      <div v-if="courses.filter(c => c.cat.side)" class="bg-black-100"></div>
      <div v-if="courses.filter(c => c.cat.side)" class="col-span-full md:col-span-full lg:col-span-1 xl:col-span-1 flex flex-col md:flex-row lg:flex-col w-full gap-8 self-start sticky top-24">
          <nuxt-link v-for="c in courses.filter(c => c.cat.side)" :key="`courses_${c.cat.id}`" :to="`/aanbod/${c.cat.id}/${c.id}`" class="w-full mb-2 ">
            <elements-course :course="c" class=" mb-2 sticky top-0"/>
          </nuxt-link>

      </div>

    </div>
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
          side: data.value[cat].side || false,
        }

        if(!x.mainImage && x.images.length > 0) {
          x.mainImage = x.images[0]
        }

        return x;
      })]
    }


  }

}
</script>