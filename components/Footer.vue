<template>
  <footer class="main-footer">
    <div class="container">
      <div class="main-footer__top">
        <div class="main-footer__logo">
          <img src="@/assets/img/logo-white.png" alt="logo" />
        </div>
        <div>The experts at Financial Match take pride in maximizing your credits so that you can grow your business.</div>
      </div>
      <div class="main-footer__bottom">
        <div class="main-footer__menu">
          <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
          <nuxt-link to="/terms">Terms and Conditions</nuxt-link>
        </div>
        <div>© 2023 Employee Retention Tax Credit. All Rights Reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.main-footer {
  margin-top: res(50, 100);
  &__top {
    margin-left: auto;
    margin-right: auto;
    max-width: rem(600);
    padding: 0 0  res(20, 30);
    text-align: center;
  }
  &__bottom {
    border-top: 1px solid #279f96;
    padding: res(10, 30) 0;
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__logo {
    width: res(100, 250);
    display: block;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    img {
      width: 100%;
    }
  }
  a{
    color: #000;
    display: block;
  }
}
</style>
