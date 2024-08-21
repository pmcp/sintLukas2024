  <template>
  <main>

    <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " :elements="data.elements"/>

  </main>
</template>
<script setup>
const route = useRoute()
const { data } = await useAsyncData('home', () => queryContent(route.path).findOne())
</script>