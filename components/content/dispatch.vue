<template>

<!--  <pre>{{ props }}</pre>-->
  <div v-if="props.type === 'button'" class="inline mr-1">
    <elements-button :flavor="props.data.type" :to="props.data.link" :download="props.data.download" >
      {{ props.data.label}}
    </elements-button>
  </div>

  <div v-if="props.type === 'Link'" class="inline mr-1">
    <elements-button :flavor="2" :to="props.data.link">
      {{ props.data.label}}
    </elements-button>
  </div>

  <div v-if="props.type === 'downloads'" class="inline mr-1">
    <elements-download :download="props.data.download[0]" />
  </div>



  <div v-else-if="props.type === 'person'" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 p-0 pmcp-persons_container">
    <elements-person
        v-for="t in props.data.persons"
        :person="t"
        class="pmcp-persons_element"
    />
  </div>

</template>
<script setup>
const props = defineProps({
  data: Object,
  type: String
});
</script>
