<template>
  <div class="flex w-full h-20">
    <div class=" flex-1">
      Dé academie voor beeldende kunsten in hartje Brussel!
    </div>
    <div class="flex-grow flex flex-row gap-2">

        <svg-eyes :type="i" v-for="i in 3"></svg-eyes>

    </div>

  </div>
</template>