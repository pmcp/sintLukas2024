<template>
  <!--  TODO: add download -->

  <UButton class="hover:bg-primary-100" v-if="style === 0" color="black" variant="outline" :ui="{ rounded: 'rounded-none' }">
    <svg-icon-download v-if="download" class=" w-4 h-4"/>
    <slot />
  </UButton>
  <UButton v-if="style === 1"  color="black" :ui="{ rounded: 'rounded-none'}">
    <svg-icon-download v-if="download" class=" w-4 h-4"/>
    <slot />
  </UButton>
  <UButton v-if="style === 2"  color="primary" :ui="{ rounded: 'rounded-none' }">
    <svg-icon-download v-if="download" class=" w-4 h-4"/>
    <slot />
  </UButton>
</template>

<script>
export default {
  props: {
    style: {
      type: Number,
      default: 0
    },
    to: {
      type: String
    },
    download: {
      type: String
    },
  },
}
</script>