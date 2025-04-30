<template>
  <NuxtImg
      :src="computedImages"
  />

</template>
<script setup>
// i have ten svg images. I need to loop them all, and by one, with a small delay between each.
// They need to loop forever
// The svgs are called animatie header_1.svg, animatie header_2.svg, animatie header_3.svg,...
// write a loop that loops through all the svgs, and by one, with a small delay between each. The svgs need to loop forever.

const active = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    active.value++
    if (active.value > 9) active.value = 0
  }, 1000)

})

const computedImages = computed(() => {
  return `/assets/animatedBanner/animatie header_${active.value + 1}.svg`
})

onUnmounted(() => {
  interval.clearInterval()
})


</script>
