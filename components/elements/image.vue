<template>
<div>
<!--  <img @click="emit('click', {url: data.cover, description: data.description})" class=" h-full w-full object-cover object-center hover:object-scale-down bg-primary-200" :src="data.cover" :alt="data.description" :class="[{ 'bg-transparent': transparent}, { '!object-contain': contain}]"/>-->
  <nuxtImg @click="emit('click', {url: data.cover, description: data.description})" class="col-span-1 h-40 w-full object-cover object-center hover:object-scale-down bg-primary-200" :src="data.cover" :alt="data.description" :class="[{ 'bg-transparent': transparent}, { '!object-contain': contain}]"/>
</div>
</template>
<script setup>
const props = defineProps({
  image: {
      type: String
    },
  src: {
    type: String
  },
  transparent: {
    type: Boolean,
  },
  contain: {
    type: Boolean,
  }
});

const emit = defineEmits(['click']);


let data = {}
if(props.image) {
  const image = await queryContent('media/images')
      .where({ id: props.image })
      .findOne()
  data = image
}

if(props.src) {
  data = {
    cover: props.src,
  }
}


if(props.alt) {
  data.alt = props.alt
}



</script>