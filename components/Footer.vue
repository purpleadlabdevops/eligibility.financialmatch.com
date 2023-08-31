<template>
  <footer class="main-footer">
    <div class="container">
      <div class="main-footer__top">
        <div class="main-footer__logo" :class="['lam-rca-entr', 'lam-rca', 'lam-rca-privacy', 'lam-rca-terms'].includes(this.$route.name) ? 'main-footer__logo-rca':''">
          <img v-if="['lam-rca-entr', 'lam-rca', 'lam-rca-privacy', 'lam-rca-terms'].includes(this.$route.name)" src="@/assets/img/rca-logo.png" alt="logo" />
          <img v-else src="@/assets/img/ntc-logo.png" alt="logo" />
        </div>
        <div>The experts at <span v-html="['lam-rca-entr', 'lam-rca', 'lam-rca-privacy', 'lam-rca-terms'].includes(this.$route.name) ? 'RC Advisors' : 'National Tax Credits'"></span> take pride in maximizing your credits so that you can grow your business.</div>
      </div>
      <div class="main-footer__bottom">
        <div class="main-footer__menu">
          <nuxt-link :to="['lam-rca-entr', 'lam-rca', 'lam-rca-privacy', 'lam-rca-terms'].includes(this.$route.name) ? '/lam/rca/privacy' : '/privacy'">Privacy Policy</nuxt-link>
          <nuxt-link :to="['lam-rca-entr', 'lam-rca', 'lam-rca-privacy', 'lam-rca-terms'].includes(this.$route.name) ? '/lam/rca/terms' : '/terms'">Terms and Conditions</nuxt-link>
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
  margin-top: res(30, 50);
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
    width: res(200, 300);
    display: block;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
    img {
      width: 100%;
    }
    &-rca{
      width: res(80, 150);
    }
  }
  a{
    color: #000;
    display: block;
  }
}
</style>
