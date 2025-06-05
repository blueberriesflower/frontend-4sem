<script setup>
const phoneNumber = '+7 (800) 900-90-90';
import HomeIcon from '~/assets/logo.svg';
import PhoneIcon from '~/assets/phone.svg';
</script>
<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img :src="HomeIcon" alt="Home" class="header__icon">zagdom</div>
      
      <nav class="header__nav">
        <a href="#" class="header__link">Реализованные проекты</a>
        <a href="#" class="header__link">Новости</a>
        <a href="#" class="header__link">Контакты</a>
      </nav>
      
      <div class="header__contacts">
        <a :href="`tel:${phoneNumber.replace(/\D/g, '')}`" class="header__phone">
          <img :src="PhoneIcon" alt="Phone" class="header__icon">
          {{ phoneNumber }}
        </a>
        <button class="header__button">Оставить заявку</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use "~/styles/header";
</style>