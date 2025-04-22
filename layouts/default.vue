<template>
  <div class="relative overflow-clip w-full">
    <main-header class="z-40"/>
    <UPage :class="!aanbod ? 'pb-20' : ''">
      <UPageBody :ui="{ wrapper: 'mt-0 pb-0'}">
        <slot />
      </UPageBody>
    </UPage>
    <main-footer />
  </div>
</template>

<script setup>
// Padding hack, use the route, check if the route is not "aanbod"
const route = useRoute()

const aanbod = route.name === 'aanbod'
</script>