<template>
  <UFooter class="bg-primary-200 border-b-4 border-accent-800 w-full" :ui="{
  wrapper: 'relative',
  top: {
    wrapper: '',
    container: 'py-8 lg:py-12'
  },
  bottom: {
    wrapper: '',
    container: 'py-8 lg:py-4 lg:flex lg:items-end lg:justify-between lg:gap-x-3',
    left: 'flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1',
    center: 'mt-3 lg:mt-0 lg:order-2 flex items-center justify-center',
    right: 'lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3'
  }
}">
    <template #top>
      <div class="flex flex-col w-full gap-2">
        <elements-newsletter/>
        <elements-markdown v-if="data.markdown" :markdownString="data.markdown" />
        <div class="flex relative -left-1">
          <svg-fb class="h-8 w-auto" />
          <svg-instagram class="h-8 w-auto p-1"/>
        </div>
      </div>
    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm prose ">
        <span>© {{ new Date().getFullYear() }}</span>
      </p>
    </template>

    <template #right>
      <svg-logosl class="h-12 w-auto" />
    </template>
  </UFooter>
</template>

<script setup>
const { data } = await useAsyncData('footer', () => queryContent('site/footer').findOne())
let navItems = []
if(data.value.links) navItems = data.value.links.map(n => ({ 'label': n.label, to: `/pages/nl/${n.page}`}))

</script>