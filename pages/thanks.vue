<template>
  <section class="thanks">
    <div class="container">
      <h1>Thank you for your submission</h1>
      <h2>A MEMBER OF OUR TEAM WILL CONTACT YOU SHORTLY</h2>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.thanks{
  min-height: 50vh;
  padding: res(50,100) 0;
  background: url(@/assets/img/step-bg.png) no-repeat center/cover;
  h1{
    font-size: res(30, 60);
    color: #106b70;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
  }
  h2{
    font-size: res(18, 30);
    color: #106b70;
    font-weight: 700;
    text-align: center;
  }
}
</style>