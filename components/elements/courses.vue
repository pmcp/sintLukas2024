<template>

  <div class=" grid grid-cols-1 md:grid-cols-2 w-full items-end gap-2">
    <elements-course v-for="(c, key) in flattenedAts" :key="`courses_${c.cat.id}${key}`" :course="c" class="grow mb-2"/>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: String,
    required: true,
  }
});


console.log(props.categories)
// flatten categories
const flatCats = props.categories.map(x => x.category)
console.log(flatCats)
// Get categories info
const { data: expandedCategories } = await useAsyncData('categories', () => queryContent('site/categories')
    .findOne())
// Filter out only the ones we need
const activeCats = expandedCategories.value.ateliers.filter(x => flatCats.includes(x.id))
// Get all ateliers within these categories
const { data: allAteliers } = await useAsyncData('ateliers', () => queryContent('ateliers')
    .where({ categories: { $in: flatCats }})
    .where({ _path: { $contains: '.nl' } })
    .find())
// Now create better data structure
let flattenedAts = []
for (const cat in activeCats) {
  // Find all ateliers of this cat
  const ateliersOfThisCat = allAteliers.value.filter(x => x.categories === activeCats[cat].id)
  ateliersOfThisCat[0].first = true
  // loop ateliers and add cat info
  const atheliersWithCatInfo = ateliersOfThisCat.map(x => {
    return {...x, cat: {...activeCats[cat]}}
  })
  flattenedAts = [...flattenedAts, ...atheliersWithCatInfo]
}

</script>
