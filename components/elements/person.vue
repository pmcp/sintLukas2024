<template>
  <div class="flex flex-col w-full" v-if="thePerson">
    <div class="relative">
      <nuxtImg v-if="thePerson.image" class="w-full group-hover:scale-110 transition-all ease-in duration-200 grayscale group-hover:grayscale-0 transition-all object-cover	bg-white" :src="data.image" />
      <USkeleton class="h-32 w-full ratio-square" :ui="{
  base: 'animate-none',
  background: 'bg-primary-200',
  rounded: 'rounded-none',
}" />
    </div>
    <div class="bg-white px-4 py-2 p-2 sm:px-2 md:py-4 w-full h-full">
      <span class="text-sm font-bold">{{ thePerson.firstName }} {{  thePerson.lastName }}</span>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
  person: {
    type: String,
    required: true,
  }
});

let thePerson
if(props.person) {
  const personId = props.person
  const { data } = await useAsyncData(`person-${personId}`, () => queryContent('persons', 'nl')
      .where({ title: personId })
      .findOne()
  )

  console.log(props.person, data)
  thePerson = data
}


</script>