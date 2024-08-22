<template>
<!--  <frame-grid-->
<!--      v-if="layout === 1"-->
<!--      v-bind:gap="gap"-->
<!--      v-bind:defaultDirection="defaultDirection"-->
<!--      v-bind:frame="frame"-->
<!--      v-bind:rectSize="rectSize"-->
<!--      v-bind:useFrameFill="useFrameFill"-->
<!--  >-->
<!--    <nuxt-img v-for="i in images" class="object-cover" :src="i.image" />-->
<!--  </frame-grid>-->
  <div v-if="layout === 4" class="grid grid-cols-3 xl:grid-cols-4 gap-8 ">

    <img v-for="i in images" @click="openImageInModal(i.image)" class="col-span-1 h-40 w-full object-cover object-center hover:object-scale-down bg-primary-200" :src="i.image">


  </div>
  <UModal v-model="isOpen" :ui="{rounded: 'rounded-none', background: 'bg-primary-200', overlay: {background: 'bg-white opacity-80'}, shadow: 'shadow-none'}">
    <div class="p-4">
      <img class="col-span-1 h-auto w-full object-cover object-center hover:object-scale-down bg-primary-200" :src="imageInModal">
    </div>
  </UModal>
</template>
<script setup>
// import { FrameGrid } from '@egjs/vue-grid';
// export default {
//   props: {
//     images: {
//       type: Array
//     },
//     layout: {
//       type: Number,
//       default: 1
//     },
//   },
//   data: () => ({
//     gap: 5,
//     defaultDirection: "end",
//     frame: [[1,1,2,2],[3,3,2,2],[4,4,4,5]],
//     rectSize: 0,
//     useFrameFill: true,
//     isOpen: false,
//     imageInModal: '',
//   }),
//   components: {
//     FrameGrid,
//   },
//   methods: {
//     openImageInModal,
// }


const props = defineProps({
  layout: {
      type: Number,
      default: 1
    },
  images: {
      type: Array
    },
});
const isOpen = ref(false)
const imageInModal = ref('')

const openImageInModal = (image) => {
  imageInModal.value = image
  isOpen.value = true
}
</script>