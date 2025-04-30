<template>
  <div class="flex flex-col gap-2" v-if="aanbod">
    <nuxt-link
        v-for="(c, key) in aanbodSorted"
        :key="`categories-${key}`" to="./aanbod" class="text-2xl font-bold"
    >
      <!-- HACK: Was getting hydration issues resolved by wrapping in clientonly -->
      <!-- ALSO: had a good setup for controlling the color and the texture, but had to do away with it before launch-->
      <client-only>
        <elements-category :color="c.color" :name="c.nl">
          {{ c.nl }}
        </elements-category>
      </client-only>
    </nuxt-link>
  </div>
</template>
<script setup>
const { data: aanbod } = await useAsyncData('categories', () => queryContent('aanbod/nl')
    .find())

// order aanbod by a.order
const aanbodSorted = aanbod.value.sort((a, b) => a.order - b.order)

</script>
