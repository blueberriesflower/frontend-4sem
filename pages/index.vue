<template>
    <div>
      <Header />
      <Banner />
      <h1>Hello, World!</h1>
      <p>Look at my website</p>
      <Button>Here</Button>
      <Button>And here</Button>
      <Footer />
    </div>
  </template>

  
  <script>
  import Header from '~/components/Header.vue'
  import Banner from '~/components/Banner.vue'
  import Button from '~/components/Button.vue'
  import Footer from '~/components/Footer.vue'
  
  export default {
    components: {
      Header,
      Banner,
      Button,
      Footer
    }
  }
  </script>