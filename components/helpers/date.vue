<template>
  {{ format(new Date(date), "long", "nl") }}
</template>
<script setup>
import { format } from "@formkit/tempo"
const props = defineProps({
  date: String
});
</script>