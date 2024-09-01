<template>
  <UPageGrid :ui="{wrapper: 'grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3  pmcp-persons_container'}">
    <div v-for="(t) in thePersons" :key="`persons_${t}`">
      <elements-person :person="t" />
    </div>
    </UPageGrid>
</template>

<script setup>
const props = defineProps({
  persons: {
    type: Array
  }
});


let thePersons
if(props.persons) {
  thePersons = props.persons
} else {
  const { data: items } = await useAsyncData(`allPersons`, () => queryContent('/persons/nl')
      .only(['id'])
      .find()

  )
  thePersons = items.value.map(x => x.id)
}




</script>