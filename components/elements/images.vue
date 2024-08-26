<template>
  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 ">

    <elements-image v-for="i in images" :image="i.image" @click="openImageInModal" class="col-span-1 h-40 w-full object-cover object-center hover:object-scale-down bg-primary-200"/>
  </div>
  <UModal v-model="isOpen" :ui="{rounded: 'rounded-none', background: 'bg-primary-200', overlay: {background: 'bg-white opacity-80'}, shadow: 'shadow-none'}">
    <div class="p-4">
      <img class="col-span-1 h-auto w-full object-cover object-center hover:object-scale-down bg-primary-200" :src="imageInModal" :alt="descriptionInModal">
    </div>
  </UModal>
</template>
<script setup>
const props = defineProps({
  images: {
      type: Array
    },
});
const isOpen = ref(false)
const imageInModal = ref('')
const descriptionInModal = ref('')

const openImageInModal = (data) => {
  imageInModal.value = data.url
  descriptionInModal.value = data.alt
  isOpen.value = true


}
</script>