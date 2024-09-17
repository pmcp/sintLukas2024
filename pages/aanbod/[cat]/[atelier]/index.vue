<template >
    <pages-atelier v-if="atelier" :data="atelier" />
</template>

<script setup>
const route = useRoute()
// Get the category
// For some reason I can't get it working with "where", so I'm brute forcing it: get all categories, then find the one I want
const { data: cat } = await useAsyncData('home', () => queryContent('aanbod', 'nl')
    // .where({ id: route.params.cat })
    .find()
)
const theCat = cat.value.find(x => x.id === route.params.cat)
const atelier = theCat.ateliers.find(x => x.id === route.params.atelier)
</script>
