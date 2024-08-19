<template>
  <UAccordion
      color="primary"
      variant="ghost"
      multiple
      :items="items"
  >
    <template #default="{ item, index, open }">
      <UButton color="black" variant="ghost" class="border-b border-black dark:border-black" :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3 pl-0' }, variant: { ghost: 'hover:bg-white'} }">
        <span class="truncate">{{ item.label }}</span>
        <template #trailing>
          <UIcon
              name="i-heroicons-chevron-down-20-solid"
              class="w-5 h-5 ms-auto transform transition-transform duration-200"
              :class="[open && 'rotate-180']"
          />
        </template>
      </UButton>
    </template>
  </UAccordion>
</template>


<script>
export default {
  props: {
    items: {
      type: Array
    },
  },
}
</script>