<template>
  <section class="quality">
    <div class="container">
      <div class="quality__item">
        <h4>Qualify 1 of 3 <br>Different Ways</h4>
        <p>(Revenue Reduction, Shutdowns Supply Chain Disruptions)</p>
      </div>
      <div class="quality__item">
        <h4>Get Money <br> from the IRS</h4>
        <p>Even if You Got PPP</p>
      </div>
      <div class="quality__item">
        <h4>No Cap on <br> Refund.</h4>
        <p>50 Employee Business Can Get $5 Million</p>
      </div>
      <div class="quality__item">
        <h4>No Credit Check. <br> Not a loan.</h4>
        <p>Receive a tax credit of up to $7,000 per employee per quarter</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.quality{
  padding: res(30, 75) 0;
  .container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  &__item{
    width: calc(100% / 2 - 1rem);
    padding: 1rem .5rem;
    background: #fff;
    text-align: center;
    border-radius: rem(8);
    border-bottom: rem(4) solid transparent;
    transition: .5s ease;
    @media(min-width:768px){
      width: calc(100% / 4 - 1rem);
    }
    @media(min-width:1200px){
      width: calc(100% / 5 - 1rem);
    }
    &:not(:first-child){
      margin-left: 1rem;
    }
    &:hover{
      border-color: var(--accent-color-4);
      box-shadow: 0 44px 98px 0 rgba(0,0,0,0.12);
    }
  }
  h4{
    font-weight: 700;
    font-size: res(18, 24);
    line-height: 1.3;
    margin-bottom: 2rem;
    color: var(--accent-color-4);
  }
  p{
    font-size: res(14, 16);
  }
}
</style>