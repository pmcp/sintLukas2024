<template>
  <UButton
               :to="url" :download="download.length > 0" :target="download.length > 0 ? '_blank' : '_self'" class="hover:bg-primary-100" v-if="flavor === 0" color="black" variant="outline" :ui="{ rounded: 'rounded-none'}" >
    <svg-icon-download v-if="download" class=" w-4 h-4"/>
    <slot />

  </UButton>
  <UButton :to="url" :download="download.length > 0" :target="download.length > 0 ? '_blank' : '_self'" v-if="flavor === 1"  color="black" :ui="{ rounded: 'rounded-none'}">
    <template #leading>
      <svg-icon-download v-if="download" class=" w-4 h-4"/>
    </template>
    <slot />
  </UButton>
  <UButton :to="url" :download="download.length > 0" :target="download.length > 0 ? '_blank' : '_self'" v-if="flavor === 2"  color="primary" :ui="{ rounded: 'rounded-none' }">
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