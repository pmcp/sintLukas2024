<template>

  <UButton :to="url" :download="download.length > 0" :target="download.length > 0 ? '_blank' : '_self'" class="hover:bg-primary-100 w-fit" v-if="flavor === 0" color="black" variant="outline" :ui="{ rounded: 'rounded-none'}">
    <svg-icon-download v-if="download" class=" w-4 h-4"/>

    <slot />

  </UButton>
  <UButton :to="url" :download="download.length > 0" :target="download.length > 0 ? '_blank' : '_self'" v-if="flavor === 1"  color="black" :ui="{ rounded: 'rounded-none'}" class="w-fit">
    <template #leading>
      <svg-icon-download v-if="download" class=" w-4 h-4"/>
    </template>
    <slot />
  </UButton>
  <UButton :to="url" :download="download.length > 0" :target="download.length > 0 ? '_blank' : '_self'" v-if="flavor === 2"  :ui="{ rounded: 'rounded-none',  color: {'my': {solid: 'shadow-none ring-none text-black font-bold bg-primary-300 hover:bg-primary-400 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',ghost: 'text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',}}}" class="w-fit">
    <template #leading>
      <svg-icon-download v-if="download" class=" w-4 h-4"/>
    </template>
    <slot />
  </UButton>
</template>

<script setup>
const props = defineProps({
  flavor: {
    type: Number,
    // default: 0
  },
  to: {
    type: String
  },
  download: {
    type: String,
    default: ''
  },
  pageLink: {
    type: String,
    default: ''
  },
});
// TODO: Lang
let lang = 'nl'
let url = props.to
if(props.download.length > 0) {
  url = props.download
}

if(props.pageLink.length > 0) {
  url = `/${props.pageLink}.${lang}`
}

</script>