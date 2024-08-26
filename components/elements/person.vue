<template>
  <UPageCard :ui="{ body: { base: 'flex flex-col justify-center items-center gap-4 ring-none'}, rounded: 'rounded-none', ring: 'ring-0', shadow: 'shadow-none',}">
    <UAvatar
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
        size="3xl"
    />
    {{ data.firstName }} {{ data.lastName }}
  </UPageCard>
</template>

<script setup>
const props = defineProps({
  person: {
    type: String,
    required: true,
  }
});

console.log(props.person)
const { data } = await useAsyncData('person', () => queryContent(`persons/nl/${props.person}`).findOne())
console.log(data)
</script>