<template>
  <section class="section1">
    <div class="container">
      <div class="section1__inner">
        <div class="section1__item">
          <div class="section1__num">CPA’s</div>
          <div class="section1__title">
            Each account is overseen by a licensed CPA who provides full ERC
            Audit protection
          </div>
        </div>
        <div class="section1__item">
          <div class="section1__num" v-if="this.$route.name === 'lamtiktok'">Get Cash for Each W2 Employee</div>
          <div class="section1__num" v-else>+$26,000</div>
          <div class="section1__title">
            Payout for each employee with NO cap on max credit received!
          </div>
        </div>
        <div class="section1__item">
          <div class="section1__num">$200k</div>
          <div class="section1__title">
            Average Credit Size per ERC Application
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section1 {
  background: #106b70;
  color: #fff;
  padding: res(50, 100) 0;
  &__inner {
    @media(min-width:768px){
      display: flex;
    }
  }
  &__num {
    font-size: res(30, 50);
    font-weight: 700;
    text-shadow: 6px 6px 0px #064a4e;
  }
  &__title {
    font-size: res(16, 20);
  }
  &__item {
    text-align: center;
    padding: res(15, 30) 0;
    @media(min-width:768px){
      width: calc(100% / 3);
      padding: 0 res(15, 30);
    }
  }
}
</style>
