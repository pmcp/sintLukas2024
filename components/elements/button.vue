<template>
  <!--  TODO: add download -->
  <UButton :to="url" :download="download.length > 0" class="hover:bg-primary-100" v-if="flavor === 0" color="black" variant="outline" :ui="{ rounded: 'rounded-none' }">
    <svg-icon-download v-if="download" class=" w-4 h-4"/>
    <slot />
  </UButton>
  <UButton :to="url" :download="download.length > 0" v-if="flavor === 1"  color="black" :ui="{ rounded: 'rounded-none'}">
    <svg-icon-download v-if="download" class=" w-4 h-4"/>
    <slot />
  </UButton>
  <UButton :to="url" :download="download.length > 0" v-if="flavor === 2"  color="primary" :ui="{ rounded: 'rounded-none' }">
    <svg-icon-download v-if="download" class=" w-4 h-4"/>
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
});

let url = props.to
if(props.download.length > 0) {
  url = props.download
}

</script>