<template>
  <img @click="emit('click', {url: data.cover, description: data.description})" class="col-span-1 h-40 w-full object-cover object-center hover:object-scale-down bg-primary-200" :src="data.cover" :alt="data.description" />
<!--  <nuxtImg @click="emit('click', {url: data.cover, description: data.description})" class="col-span-1 h-40 w-full object-cover object-center hover:object-scale-down bg-primary-200" :src="data.cover" :alt="data.description" />-->
</template>
<script setup>
const props = defineProps({
  image: {
      type: String
    },
});

const emit = defineEmits(['click']);

const { data } = await useAsyncData('img', () => queryContent('/media/images/')
    .where({ id: props.image })
    .findOne())

</script>