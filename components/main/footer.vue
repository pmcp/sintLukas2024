<template>
  <UFooter class="bg-primary-200 border-b-4 border-accent-800 mt-24">
    <template #top>
      <elements-markdown :markdownString="data.markdown" class="" />
    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>

    <template #right>
      <UColorModeButton size="sm" />

      <UButton
          to="https://github.com/nuxt-ui-pro/landing"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="gray"
          variant="ghost"
      />
    </template>
  </UFooter>
</template>

<script setup>
const { data } = await useAsyncData('footer', () => queryContent('site/footer').findOne())
console.log(data)
</script>