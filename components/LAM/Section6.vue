<template>
  <section class="section6">
    <div class="container">
      <h2 class="section6__title">How It Works</h2>
      <div class="section6__steps">
        <div class="section6__step">
          <div class="section6__step-num">1</div>
          <h4 class="section6__step-title">Take the Qualification Quiz</h4>
        </div>
        <div class="section6__step">
          <div class="section6__step-num">2</div>
          <h4 class="section6__step-title">
            Fill Out Application (Online or Phone)
          </h4>
        </div>
        <div class="section6__step">
          <div class="section6__step-num">3</div>
          <h4 class="section6__step-title">
            Work With Our Team to Get Docs and Info
          </h4>
        </div>
        <div class="section6__step">
          <div class="section6__step-num">4</div>
          <h4 class="section6__step-title">
            Processing, Submission and Payment from IRS
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section6',
}
</script>

<style lang="scss" scoped>
.section6 {
  background: rgb(243, 255, 255);
  padding: 60px 0;
}
.section6__title {
  color: #106b70;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  margin: 0;
}
.section6__steps {
  display: flex;
  margin-top: 30px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
}
.section6__step {
  width: calc(100% / 4);
  text-align: center;
  padding: 15px;
  @media (max-width: 991px) {
    width: calc(100% / 2);
  }
  @media (max-width: 575px) {
    width: 100%;
  }
}
.section6__step-num {
  display: inline-flex;
  width: 126px;
  height: 126px;
  align-items: center;
  justify-content: center;
  border: 5px solid #106b70;
  border-radius: 50%;
  font-size: 80px;
  font-weight: 600;
  color: #106b70;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(95, 198, 193, 0.15);
    border-radius: 50%;
    left: 10%;
    top: 0;
  }
}
.section6__step-title {
  font-weight: 400;
  font-size: 24px;
  color: #106b70;
  line-height: 1.2;
  margin: 0.7em 0;
}
.section6__step-text {
  font-style: italic;
  font-size: 18px;
  color: gray;
  margin: 0;
}
</style>
