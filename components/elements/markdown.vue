<script setup>
import markdownParser from "@nuxt/content/transformers/markdown"

const props = defineProps({
  markdownString: {
    type: String,
    required: true,
  }
});

const record = ref("");

record.value = await markdownParser.parse("custom.md", props.markdownString)

const markdown = computed(() => props.markdownString)

watch(markdown, async (newString, oldString) => {
  if(newString === oldString) return
  await markdownParser
      .parse("custom.md", props.markdownString)
      .then((md) => record.value = md)

})


</script>

<template>
  <div class="prose-a:font-normal" v-if="record">
    <ContentRendererMarkdown :value="record" />
  </div>

</template>
