<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-2">
    <elements-course v-for="c in courses" :key="c.category" :course="c.category" />
  </div>

</template>

<script setup>
const props = defineProps({
  courses: {
    type: Array,
    required: true,
  }
});
</script>
