<template>
  <span class="text-4xl uppercase font-bold px-2 inline-block bg-blend-color-burn" :style="style"
  >
    <slot />
  </span>
</template>

<script setup>
const props = defineProps({
  color: String,
  texture: Number
});

const style = {
  backgroundColor: props.color,
  backgroundSize: 'contain',
  backgroundImage: `url(assets/site/Textuur-${props.texture}.svg)`
}

// Jongeren en Volwassenen is met de bolletjes. De andere drie met de potloodstrepen.

</script>