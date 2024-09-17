<template>
<!--  <NuxtLayout class="relative">-->
    <pages-academie :data="data" />
<!--  </NuxtLayout>-->
</template>

<script setup>
const { data } = await useAsyncData('academie', () => queryContent('fixedpages/academie').findOne())
</script>