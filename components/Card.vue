<script setup>
import defaultImage from '~/assets/2.jpg';
defineProps({
  text: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    default: defaultImage,
  },
});

const emit = defineEmits(['button-click'])
</script>

<template>
  <div class="card">
    <img :src="imageSrc" class="card-image" />
    <p>{{ text }}</p>
    <button @click="emit('button-click')">{{ buttonText }}</button>
  </div>
</template>

<style lang="scss" scoped>
@use "~/styles/mixins" as *;

.card {
  @include shared-styles;
  background-color: var(--secondary-color);
  padding: 1.5rem;
  margin: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .card-image {
    width: 100%;
    max-width: 200px;
    border-radius: var(--border-radius);
    object-fit: cover;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--accent-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>