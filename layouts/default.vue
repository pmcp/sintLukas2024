<template>
  <div>
    <main-header />
    <UPage>
      <UPageBody :ui="{ wrapper: 'mt-0'}">
        <slot />
      </UPageBody>
    </UPage>
    <main-footer />
  </div>
</template>