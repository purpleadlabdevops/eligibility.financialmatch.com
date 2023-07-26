<template>
  <section class="says">
    <div class="container">
      <div class="says__title">
        <h2>What People Say</h2>
      </div>
      <div class="says__slider">
        <vue-tiny-slider v-bind="homeOptions">
          <div>
            <div class="says__item">
              <img src="@/assets/img/says-1.jpeg" />
              <h5>Henry M.</h5>
              <p>Restaurant Franchisee, New York, NY</p>
              <div class="says__message">I thought it would be difficult to claim our many locations as a franchised restaurant but your team made the process very easy. We can't believe we had no idea that the ERTC existed. you have an excellent team at National Tax Credits.</div>
            </div>
          </div>

          <div>
            <div class="says__item">
              <img src="@/assets/img/says-2.jpeg" />
              <h5>Arthur D.</h5>
              <p>Agency Owner, Los Angeles, CA</p>
              <div class="says__message">As a small business owner, the COVID-19 pandemic hit us hard. We experienced a significant decline in gross receipts, and our operations were partially suspended by a government order. We were worried about how we would be able to retain our employees during this challenging time. However, the Employee Retention Tax Credit (ERTC) program provided us with much-needed relief.</div>
            </div>
          </div>

          <div>
            <div class="says__item">
              <img src="@/assets/img/says-3.jpeg" />
              <h5>Rachel M.</h5>
              <p>Restaurant Franchisee, Dallas, TX</p>
              <div class="says__message">We were able to claim the credit for each quarter and reduce our payroll tax liability. The ERTC program enabled us to retain our employees and keep our business afloat during these difficult times. We are grateful for the support that the ERTC program provided.</div>
            </div>
          </div>

          <div>
            <div class="says__item">
              <img src="@/assets/img/says-4.jpeg" />
              <h5>James P.</h5>
              <p>Pittsburgh, PA</p>
              <div class="says__message">Top notch service. They truly are experts at getting us the most in tax credits. The funds we receive will go into expanding machinery. This would have been impossible without the ERTC program. Like they said, the process was fast and easy.</div>
            </div>
          </div>

          <div>
            <div class="says__item">
              <img src="@/assets/img/says-5.jpeg" />
              <h5>Janet L.</h5>
              <p>Beauty Salon, Los Angeles, CA</p>
              <div class="says__message">We were unaware of the ERTC program. So glad we called National Tax Credits to help us submit our file to the IRS. our check came in and we're in happy shock! Now we can rebuild our business by purchasing more inventory. Thank you!</div>
            </div>
          </div>

        </vue-tiny-slider>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  data(){
    return{
      homeOptions: {
        mouseDrag: true,
        items: 1,
        nav: true,
        navPosition: 'bottom',
        controls: false,
        loop: false,
        gutter: 16,
        responsive: {
          992: {
            gutter: 32,
            items: 3,
          }
        }
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.says{
  h2{
    font-size: res(28, 54);
    text-align: center;
    color: var(--accent-color-5);
    background: rgba(255,255,255,0.77);
    padding: res(50, 100) 0;
    margin-bottom: rem(50);
  }
  &__title{
    background: #f4f8fb url(@/assets/img/says-bg.png) no-repeat center/cover;
  }
  &__slider{
    width: 940px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  &__item{
    background-color: white;
    padding: res(16, 50);
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.1);
    border-radius: rem(7);
    padding-bottom: rem(45);
    position: relative;
    img{
      display: block;
      width: rem(45);
      position: absolute;
      left: res(16, 50);
      top: res(16, 50);
    }
    h5{
      font-size: rem(18);
      margin-bottom: rem(4);
      line-height: 1.2;
      padding-left: rem(60);
      color: var(--accent-color-5);
    }
    p{
      font-size: rem(14);
      margin-bottom: rem(20);
      font-weight: 500;
      padding-left: rem(60);
      margin-bottom: 10px;
      margin-top: 0;
    }
  }
  &__message{
    font-size: rem(14);
  }
}
</style>