<template>
  <div class="flex flex-col gap-2" v-if="aanbod">
    <nuxt-link
        v-for="(c, key) in aanbod"
        :key="`categories-${key}`" to="./aanbod" class="text-2xl font-bold"
    >
      <!-- HACK: Was getting hydration issues resolved by wrapping in clientonly -->
      <client-only>
        <elements-category :color="c.color">
          {{ c.nl }}
        </elements-category>
      </client-only>
    </nuxt-link>
  </div>
</template>
<script setup>
const { data: aanbod } = await useAsyncData('categories', () => queryContent('aanbod/nl')
    .find())
</script>
