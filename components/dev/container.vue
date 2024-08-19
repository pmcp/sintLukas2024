<template>
  <UPopover :popper="{ placement: 'top-end' }">
    <elements-button :style="0">
      <div class="inline sm:inline md:hidden lg:hidden xl:hidden 2xl:hidden">SM</div>
      <div class="hidden sm:hidden md:inline lg:hidden xl:hidden 2xl:hidden">MD</div>
      <div class="hidden sm:hidden md:hidden lg:inline xl:hidden 2xl:hidden">LG</div>
      <div class="hidden sm:hidden md:hidden lg:hidden xl:inline 2xl:hidden">XL</div>
      <div class="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:inline">2XL</div>
    </elements-button>

    <template #panel>
      <div class="p-4 w-full">
        <UTabs :items="items" class="w-96" :ui="config">
          <template #item="{ item }">
            <UCard class="overflow-scroll text-xs max-h-96">
              <dev-content v-if="item.key === 'content'" />
              <dev-pre v-if="item.key === 'pre'">
                {{ useState('devContentPre') }}
              </dev-pre>
            </UCard>
          </template>
        </UTabs>
      </div>
    </template>
  </UPopover>

</template>
<script setup lang="ts">
const items = [{
  key: 'content',
  label: 'Content',
}, {
  key: 'pre',
  label: 'Pre',
}]

const config = {
  wrapper: 'relative space-y-2',
  container: 'relative w-full',
  base: 'focus:outline-none',
  list: {
    base: 'relative',
    background: 'bg-gray-100 dark:bg-gray-800',
    rounded: 'rounded-lg',
    shadow: '',
    padding: 'p-1',
    height: 'h-10',
    width: 'w-full',
    marker: {
      wrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
      base: 'w-full h-full',
      background: 'bg-white dark:bg-gray-900',
      rounded: 'rounded-md',
      shadow: 'shadow-sm',
    },
    tab: {
      base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
      background: '',
      active: 'text-black dark:text-white',
      inactive: 'text-white dark:text-white',
      height: 'h-8',
      padding: 'px-3',
      size: 'text-sm',
      font: 'font-medium',
      rounded: 'rounded-md',
      shadow: '',
    },
  },
}


</script>