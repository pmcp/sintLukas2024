<template>
  <UButton
      v-if="flavor === 0"
      :to="url"
      :download="download.length > 0"
      :target="download.length > 0 ? '_blank' : '_self'"
      :ui="{
        padding:
        {
          '2xs': 'px-2 py-3',
          xs: 'px-4 py-3',
          sm: 'px-4 py-3'
        },
        rounded: 'rounded-none'
      }"
      size="xl"
      class="hover:bg-primary-100 w-fit no-underline "
      color="black"
      variant="outli  ne"
  >
    <svg-icon-download v-if="download" class=" w-4 h-4"/>
    <span class="font-bold">
      <slot/>
    </span>
  </UButton>

  <UButton
      v-if="flavor === 1"
      :to="url"
      :download="download.length > 0"
      :target="download.length > 0 ? '_blank' : '_self'"
      :ui="{
        rounded: 'rounded-none',
        padding: {
          '2xs': 'px-2 py-3',
          xs: 'px-4 py-3',
          sm: 'px-4 py-3'
        },
      }"
      class="w-fit no-underline "
      size="xl"
      color="black"
  >
    <template #leading>
      <svg-icon-download v-if="download" class=" w-4 h-4"/>
    </template>
    <span class="font-bold">
      <slot/>
    </span>
  </UButton>

  <UButton
      v-if="flavor === 2"
      :to="url"
      :download="download.length > 0"
      :target="download.length > 0 ? '_blank' : '_self'"
      :ui="{
        rounded: 'rounded-none',
        padding: {
          '2xs': 'px-2 py-3',
          xs: 'px-4 py-3',
          sm: 'px-4 py-3'
        },
        color: {
          black: {
            solid: 'shadow-sm text-black bg-primary-200 hover:bg-primary-400 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
            // link: 'text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
          },
        }
      }"
      size="xl"
      class="w-fit no-underline "
      color="black"
  >
    <template #leading>
      <svg-icon-download v-if="download" class=" w-4 h-4"/>
    </template>
    <span class="font-bold">
      <slot/>
    </span>
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