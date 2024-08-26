<template>

    <UCard :ui="{
        divide: 'divide-none',
        ring: 'ring-0',
        shadow: 'shadow-none',
        rounded: 'rounded-none',
        background: 'bg-transparent',
        base: 'group ',
        body:
        {
          padding: 'px-0 py-0 p-0 sm:p-0 border-none',
        },
        header:
        {
          background: 'bg-transparent',
          padding: 'px-1 py-0 sm:p-0 px-0'
        },
        footer:
        {
          base: 'leading-5 sm:leading-4 md:leading-5 text-xl font-bold md:text-lg sm:text-sm p lg:text-md bg-transparent',

          padding: ''
        }
      }">

      <div class="relative" v-if="data.image">
        <nuxtImg class="w-full group-hover:scale-110 transition-all ease-in duration-200 grayscale group-hover:grayscale-0 transition-all object-cover	bg-white" :src="data.image" />
      </div>

      <template #footer >
        <div class="px-4 py-2 p-2 sm:px-2 md:py-4 w-full h-full">
          {{ data.firstName }} {{  data.lastName }}
        </div>
      </template>
    </UCard>

</template>

<script setup>
const props = defineProps({
  person: {
    type: String,
    required: true,
  }
});


const { data } = await useAsyncData('person', () => queryContent(`persons/nl/${props.person}`).findOne())
console.log(data)
</script>