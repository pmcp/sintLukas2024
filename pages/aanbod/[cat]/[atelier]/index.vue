<template >
    <pages-atelier v-if="atelier" :data="atelier" />
</template>

<script setup>
const route = useRoute()

// Reverse find the atelier, by finding the category, then the atelier
const sanitize = (str) => {
  return str.replaceAll(' ', '-').replaceAll('/', '-').replaceAll('&', '-').replaceAll('?', '-').toLocaleLowerCase()
}

const getAanbod = async () => {
  // Get the category
  // For some reason I can't get it working with "where", so I'm brute forcing it: get all categories, then find the one I want
  const { data: cat } = await useAsyncData('home', () => queryContent('aanbod', 'nl')
      .find()
  )
  console.log('cat', cat)
  const theCat = cat.value.find(x => sanitize(x.nl) === route.params.cat)
  return theCat.ateliers.find(x => sanitize(x.title) === route.params.atelier)

}

const atelier = await getAanbod()

</script>
