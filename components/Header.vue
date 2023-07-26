<template>
  <header class="main-header">
    <div class="container">
      <nuxt-link to="/" class="main-header__logo">
        <img src="@/assets/img/logo-white.png" alt="logo" />
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
.main-header {
  padding: res(10, 20) 0;
  .container{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media(min-width:768px){
      align-items: center;
    }
  }
  &__logo {
    width: res(100, 250);
    display: block;
    img {
      width: 100%;
    }
  }
}
</style>
