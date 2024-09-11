<script setup>
import markdownParser from "@nuxt/content/transformers/markdown"

const props = defineProps({
  markdownString: {
    type: String,
    required: true,
  }
});

const record = await markdownParser.parse("custom.md", props.markdownString)

</script>

<template>
  <ContentRendererMarkdown :value="record" v-if="record" class="prose-a:font-normal" />
</template>