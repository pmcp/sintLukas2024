<template>
  <span class="text-4xl uppercase font-bold px-2 inline-block" :style="style"
  >
    <slot />
  </span>
</template>

<script setup>
const props = defineProps({
  color: String,
  name: String
});

const style = {
  backgroundColor: props.color,
  backgroundSize: 'contain',
  backgroundImage: `url('assets/aanbod/Banner aanbod 600x60px_${props.name}.svg')`
}

// Jongeren en Volwassenen is met de bolletjes. De andere drie met de potloodstrepen.

</script>