<template>
  <div class="flex flex-col gap-2">
    <nuxt-link
        v-for="(c, key) in aanbod"
        :key="`categories-${key}`" :to="`/aanbod/`" class="text-2xl font-bold"
    >
      <span
        class="text-4xl uppercase font-bold px-2 inline-block"
        :style="{
        backgroundColor: c.color
        // backgroundSize: 'contain',
        // backgroundImage: `url(${c.background})`
        }"
      >
      <!--    TODO: Lang -->
      {{ c.nl }}
      </span>
    </nuxt-link>
  </div>
</template>
<script setup>

let categories;
const { data: aanbod } = await useAsyncData('categories', () => queryContent('aanbod/nl')
    .find())

console.log(aanbod)



</script>
