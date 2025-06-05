<script setup>
import { ref } from 'vue'
import defaultImage from '~/assets/2.jpg';
import newImage from '~/assets/1.jpg';
const bannerText = ref('Hello, World!')
const cardText = ref('Look at my website')
const buttonText = ref('Click me!')
const currentImage = ref(defaultImage)

const changeContent = () => {
  bannerText.value = bannerText.value === 'Hello, World!' ? 'New Banner Text' : 'Hello, World!'
  cardText.value = cardText.value === 'Look at my website' ? 'New Card Text' : 'Look at my website'
  buttonText.value = buttonText.value === 'Click me!' ? 'Clicked!' : 'Click me!'
  currentImage.value = currentImage.value === defaultImage ? newImage : defaultImage
}
</script>

<template>
  <div class="app">
    <Header />
    <Banner :text="bannerText" />
    <div class="content">
      <Card 
        :text="cardText" 
        :buttonText="buttonText" 
        :imageSrc="currentImage"
        @button-click="changeContent" 
      />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
@use "~/styles/main";
</style>