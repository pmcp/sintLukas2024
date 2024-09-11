<template>
  <div class="flex flex-col gap-2" v-if="aanbod">
    <nuxt-link
        v-for="(c, key) in aanbod"
        :key="`categories-${key}`" :to="`/aanbod/`" class="text-2xl font-bold"
    >
      <span
        class="text-4xl uppercase font-bold px-2 inline-block bg-blend-soft-light	"
        :style="{
        backgroundColor: c.color,
        backgroundSize: 'contain',
        backgroundImage: `url(assets/site/Textuur-${random([1,2,3])}.svg)`
        }"
      >
      <!--    TODO: Lang -->
      {{ c.nl }}
      </span>
    </nuxt-link>
  </div>
</template>
<script setup>
const { data: aanbod } = await useAsyncData('categories', () => queryContent('aanbod/nl')
    .find())


function random(numbers) {
  return numbers[Math.floor(Math.random()*numbers.length)];
}
</script>
