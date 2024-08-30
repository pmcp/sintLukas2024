<template>
  <div class="flex flex-col w-full">
    <div class="relative">
      <nuxtImg v-if="thePerson.image" class="w-full group-hover:scale-110 transition-all ease-in duration-200 grayscale group-hover:grayscale-0 transition-all object-cover	bg-white" :src="data.image" />
      <USkeleton class="h-32 w-full ratio-square" :ui="{
  base: 'animate-none',
  background: 'bg-primary-200',
  rounded: 'rounded-none',
}" />
    </div>
    <div class="bg-white px-4 py-2 p-2 sm:px-2 md:py-4 w-full h-full">
      <span class="font-bold">{{ thePerson.firstName }} {{  thePerson.lastName }}</span>
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

const data = await queryContent(`persons/nl/`)
    .where({ id: props.person })
    .find();

thePerson = data[0]

</script>