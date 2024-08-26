<template>
  <UPageGrid :ui="{wrapper: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 p-0 pmcp-persons_container'}">
    <div v-for="(t,key) in props.persons" :key="`persons_${key}`">
      <elements-person :person="t" />
    </div>

    </UPageGrid>
</template>

<script setup>
const props = defineProps({
  persons: {
    type: Array,
    required: true,
  }
});
</script>