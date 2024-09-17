<template>
  <div v-if="props.preview">
    <UButton label="Open" @click="isOpen = true" />

    <UModal v-model="isOpen" >
      <div class="p-4">
        < v-if="activeCourse" :data="activeCourse" />

<!--        <Placeholder class="h-48" />-->
      </div>
    </UModal>
  </div>



  <div class="background-grid">
    <elements-banner key="banner-aanbod" :data="{ title: 'Vind jouw atelier. \nOntdek onze extra muros projecten.'}"/>
    <div class="mx-auto px-6 lg:px-8 max-w-7xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-cols-[1fr_1fr_1px_1fr] gap-16">
      <div class="w-full col-span-full md:col-span-full lg:col-span-2 grid grid-cols-1 md:grid-cols-2 w-full items-end gap-8 max-w-2xl	">
        <div v-if="props.preview">
          <div v-for="c in courses.filter(c => !c.cat.side)" :key="`courses_${c.cat.id}`" @click="isOpen = true; activeCourse = c">
            <elements-course :course="c" :show-subtitle="c.showSubtitleOnCard" class="grow mb-2"/>
          </div>
        </div>

        <nuxt-link v-else v-for="c in courses.filter(c => !c.cat.side)" :key="`courses_${c.cat.id}`" :to="`/aanbod/${c.cat.id}/${c.id}`" class="w-full mb-2">
          <elements-course :course="c" :show-subtitle="c.showSubtitleOnCard" class="grow mb-2"/>
        </nuxt-link>

      </div>
      <div v-if="courses.filter(c => c.cat.side)" class="bg-black-100"></div>
      <div v-if="courses.filter(c => c.cat.side)" class="col-span-full md:col-span-full lg:col-span-1 xl:col-span-1 flex flex-col md:flex-row lg:flex-col w-full gap-8 self-start sticky top-24">
        <nuxt-link v-for="c in courses.filter(c => c.cat.side)" :key="`courses_${c.cat.id}`" :to="`/aanbod/${c.cat.id}/${c.id}`" class="w-full mb-2 ">

          <elements-course :course="c" :show-subtitle="c.showSubtitleOnCard" class=" mb-2 sticky top-0"/>
        </nuxt-link>

      </div>

    </div>
  </div>
</template>


<script setup>


const props = defineProps(['data', 'preview'])


// loop through all courses, add the info of the course to the atelier
let courses = [];

let activeCourse = ref({})

const getCourses = (data) => {
  for (const cat in data) {
    const theCat = data[cat]
    if (theCat.ateliers) {
      if (theCat.ateliers.length > 0) {
        // Add first = true to first course
        theCat.ateliers[0].first = true
        // Flatten courses in courses array
        courses = [...courses, ...theCat.ateliers.map(x => {

          x.cat = {
            id: theCat.id || '',
            mainImage: theCat.mainImage || '',
            color: theCat.color || '',
            nl: theCat.nl || '',
            side: theCat.side || false,
          }

          if (!x.mainImage && x.images.length > 0) {
            x.mainImage = x.images[0]
          }

          return x;
        })]
      }
    }
  }
}

if (props.data) {
  getCourses(props.data)
}




const isOpen = ref(false)

</script>