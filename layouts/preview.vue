<template>
  <div class="relative overflow-clip w-full">
    <UPage>
      <UPageBody :ui="{ wrapper: 'mt-0 '}">
        <slot />
      </UPageBody>
    </UPage>
  </div>
</template>