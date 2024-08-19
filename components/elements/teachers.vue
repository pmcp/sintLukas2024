<template>
  <UPageGrid :ui="{wrapper: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 p-0 pmcp-teacher_container'}">
<div v-for="t in props.teachers" :key="t._path">
  console.log(t)
<!--  {{ t._path.replace('/teachers/', '') }}-->
<!--  <elements-teacher :teacher="t._path.replace('/teachers/', '')" />-->
</div>

<!--    <elements-teacher-->
<!--        v-for="t in props.teachers"-->
<!--        :teacher="t._path.replace('/teachers/', '')"-->
<!--        class="pmcp-teacher_element"-->
<!--    />-->
    </UPageGrid>
</template>

<script setup>
const props = defineProps({
  teachers: {
    type: Array,
    required: true,
  }
});
</script>