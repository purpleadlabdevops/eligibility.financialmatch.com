<template>
  <section class="wide">
    <div class="container">
      <h2>WIDE RANGE OF INDUSTRIES THAT ARE ELIGIBLE FOR ERTC</h2>
      <h3>We have helped small businesses claim over <span>$3B+</span> in payroll tax credits</h3>
      <div class="wide__list">
        <div class="wide__item">
          <img src="@/assets/img/ind-1.png" />
          <h4>304,540</h4>
          <p>Construction</p>
        </div>
        <div class="wide__item">
          <img src="@/assets/img/ind-2.png" />
          <h4>576,612</h4>
          <p>Automotive</p>
        </div>
        <div class="wide__item">
          <img src="@/assets/img/ind-3.png" />
          <h4>643,654</h4>
          <p>Health Care</p>
        </div>
        <div class="wide__item">
          <img src="@/assets/img/ind-4.png" />
          <h4>720,756</h4>
          <p>Manufacturing</p>
        </div>
        <div class="wide__item">
          <img src="@/assets/img/ind-5.png" />
          <h4>792,828</h4>
          <p>Security</p>
        </div>
        <div class="wide__item">
          <img src="@/assets/img/ind-6.png" />
          <h4>864,900</h4>
          <p>Restaurant</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wide{
  padding: rem(30) 0 res(50, 100);
  background: #fff;
  h2{}
  h3{
    margin-bottom: 2rem;
    span{
      color: var(--accent-color-1)
    }
  }
  &__list{
    display: flex;
    justify-content: space-between;
  }
  &__item{
    text-align: center;
    width: calc(100% / 6 - 1rem);
    img{
      display: block;
      width: 100%;
      height: auto;
    }
    h4{
      background: var(--accent-color-4);
      color: white;
      border-radius: rem(50);
      margin-top: -1rem;
      font-size: res(18, 24);
      padding: rem(8);
      position: relative;
      z-index: 2;
      display: inline-block;
    }
    p{}
  }
}
</style>