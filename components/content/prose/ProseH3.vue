<template>
  <h3 style="letter-spacing: 0.06em" :id="id">
    <slot />
  </h3>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()
//
// const { headings } = useRuntimeConfig().public.mdc
// const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h3)))
</script>

