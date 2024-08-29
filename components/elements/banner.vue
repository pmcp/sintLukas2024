<template>
  <div class="w-full relative ">

    <nuxtImg v-if="image.cover"
        class="h-full w-full object-cover object-center relative z-20"
        :src="image.cover"
        :alt="image.description"
    />
    <div v-else class="h-full w-full">
      </div>
    <div class="absolute z-30 h-full w-full pt-16 top-0">
      <div class=" text-4xl leading-relaxed h-auto whitespace-pre-line mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {{ data.title }}
        </div>
    </div>
    <div v-if="grid" class="z-10 absolute h-full w-full top-0 left-0 background-grid"></div>
  </div>
</template>

<script setup>

const props = defineProps({
  data: Object,
  grid: {
    type: Boolean,
    default: false
  }
});

let image = {}

console.log('gonna get image', props.data.image)
if(props.data.image) {
  const { data: gotImage } = await useAsyncData(`image-${props.data.image}`, () => queryContent('media/images')
      .where({ id: props.data.image })
      .findOne())
  image = gotImage
  console.log(image)
}

</script>