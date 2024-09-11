<template>
  <span class="text-4xl uppercase font-bold px-2 inline-block bg-blend-soft-light" :style="style"
  >
    <slot />
  </span>
</template>

<script setup>
const props = defineProps({
  color: String
});

function random(numbers) {
  return numbers[Math.floor(Math.random()*numbers.length)];
}

const randomImage = `url(assets/site/Textuur-${random([1,2,3])}.svg)`

const style = {
  backgroundColor: props.color,
  backgroundSize: 'contain',
  backgroundImage: randomImage
}


</script>