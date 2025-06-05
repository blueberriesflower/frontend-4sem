<script setup>
import LogoFooter from '~/assets/logofuter.svg';
import PhoneIcon from '~/assets/phone.svg';
import EmailIcon from '~/assets/email.svg';
import PlaceIcon from '~/assets/placeholder-filled-point.svg';
const phoneNumber = '+7 (900) 900-90-90';
const email = 'info@gmail.com';
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <div class="footer__brand">
          <img :src="LogoFooter" alt="zagdom" class="footer__brand-logo">
          </div>
          <div class="footer__nav">
            <nav class="footer__nav">
              <a href="#" class="footer__nav-link">Реализованные проекты</a>
              <a href="#" class="footer__nav-link">Новости</a>
              <a href="#" class="footer__nav-link">Контакты</a>
            </nav>
          </div>
        
        <div class="footer__contacts">
          <div class="footer__contacts-item">
            <img :src="PhoneIcon" alt="zagdom" class="footer__contacts-item">
            <a :href="`tel:${phoneNumber.replace(/\D/g, '')}`" class="footer__contacts-item">{{ phoneNumber }}</a>
          </div>
          <div class="footer__contacts-item">
            <img :src="EmailIcon" alt="zagdom" class="footer__contacts-item">
            <a :href="`mailto:${email.replace(/\D/g, '')}`" class="footer__contacts-item">{{ email }}</a>
          </div>
          <div class="footer__contacts-item">
            <img :src="PlaceIcon" alt="zagdom" class="footer__contacts-item">
            <span>г. Владивосток, ул. Выселковая 49, стр. 3</span>
          </div>
        </div>

        <div class="footer__cta">
          <button class="footer__cta-button">Оставить заявку</button>
        </div>
      </div>

       <div class="footer__bottom">
        <div class="footer__copyright">
          © Загдом, 2021
        </div>
        <div class="footer__bottom-links">
          <a href="#" class="footer__bottom-link">Пользовательское соглашение</a>
          <a href="#" class="footer__bottom-link">Политика конфиденциальности</a>
        </div>
        
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "~/styles/footer";
</style>