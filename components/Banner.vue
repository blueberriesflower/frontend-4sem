<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="banner">
    <h1>{{ text }}</h1>
  </div>
</template>

<style lang="scss" scoped>
@use "~/styles/mixins" as *;

.banner {
  @include shared-styles;
  background-color: var(--primary-color);
  padding: 2rem;
  text-align: center;
}
</style>