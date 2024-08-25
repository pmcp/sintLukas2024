<template>
 HERE IS THE PAGE
  <ContentQuery :path="`pages${$route.path}`" find="one" v-slot="{ data }">
    DATA {{ data }}
    <main v-if="data ">
      IF DATA <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " :elements="data.elements"/>
    </main>
<!--    <ContentRenderer :value="data" class="prose" />-->
  </ContentQuery>

</template>
