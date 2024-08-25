<template>

  <div class=" grid grid-cols-1 md:grid-cols-2 w-full items-end gap-8">
    <elements-course v-for="(c, key) in flattenedAts" :key="`courses_${c.cat.id}${key}`" :course="c" class="grow mb-2"/>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Object,
    required: true,
  }
});

// flatten categories
const flatCats = props.categories.map(x => x.category)
// Get categories info
const { data: expandedCategories } = await useAsyncData('categories', () => queryContent('site/categories')
    .findOne())
// Filter out only the ones we need
const activeCats = expandedCategories.value.courses.filter(x => flatCats.includes(x.id))
// Get all courses within these categories
const { data: allAteliers } = await useAsyncData('courses', () => queryContent('courses')
    .where({ categories: { $in: flatCats }})
    .where({ _path: { $contains: '.nl' } })
    .find())
// Now create better data structure
let flattenedAts = []
for (const cat in activeCats) {
  // Find all courses of this cat
  const coursesOfThisCat = allAteliers.value.filter(x => x.categories === activeCats[cat].id)
  coursesOfThisCat[0].first = true
  // loop courses and add cat info
  const atheliersWithCatInfo = coursesOfThisCat.map(x => {
    return {...x, cat: {...activeCats[cat]}}
  })
  flattenedAts = [...flattenedAts, ...atheliersWithCatInfo]
}

</script>
