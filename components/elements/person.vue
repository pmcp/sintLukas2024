<template>

  <div class="flex flex-col w-full h-full" v-if="thePerson">
    <div class="relative">
      <nuxtImg v-if="thePerson.image" class="w-full group-hover:scale-110 transition-all ease-in duration-200 grayscale group-hover:grayscale-0 transition-all object-cover	bg-white" :src="thePerson.image" />
      <USkeleton v-else class="h-32 w-full ratio-square" :ui="{
  base: 'animate-none',
  background: 'bg-primary-200',
  rounded: 'rounded-none',
}" />
    </div>
    <div class="bg-white px-2 py-1 p-2 h-full">
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
  const { data } = await useAsyncData(`person-${props.person}`, () => queryContent(`persons/nl`)
      .where({ title: props.person })
      .findOne()
  )
  thePerson = data
}


</script>