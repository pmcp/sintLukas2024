<template>
  <div>
    <main-header />
    <UPage :class="grid ? 'background-grid' : ''">
      <UPageBody :ui="{ wrapper: 'mt-0 '}">
        <slot />
      </UPageBody>
    </UPage>
    <main-footer />
  </div>
</template>
<script setup>
defineProps({
  grid: {
    type: Boolean,
    default: false
  }
})
</script>