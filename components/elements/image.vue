<template>
  <div
      v-if="data.cover"
      @click="emit('click', {url: data.cover, description: data.description})"
  >
    <div v-if="duotone && data.duotone" class="absolute top-0 left-0 h-full w-full">
      <nuxtImg

          class="object-cover object-center bg-primary-200 transition-all ease-in duration-200"
          :src="data.duotone" :alt="data.description"
      />
    </div>
    <nuxtImg
        @click="emit('click', {url: data.cover, description: data.description})"
        class="col-span-1 h-full  w-full object-cover object-center bg-primary-200"
        :src="data.cover" :alt="data.description"
        :class="[{ 'bg-transparent': transparent}, { '!object-contain': contain}, { 'hover:object-scale-down' : hoverEffect === 'zoom'}]"
    />

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
  },
  hoverEffect: {
    type: String,
    default: 'zoom'
  },
  duotone: {
    type: Boolean,
    default: false
  },
});

const emit = defineEmits(['click']);
//
//
let data = {}

if(props.image) {
  const { data: image } = await useAsyncData(`image-${props.image}`, () => queryContent('media/images')
      .where({ id: props.image })
      .findOne())
  data = image
}

if(props.src) data = { cover: props.src }
if(props.alt) data.alt = props.alt

</script>