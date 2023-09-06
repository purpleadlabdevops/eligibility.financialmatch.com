<template>
  <section class="section4">
    <div class="container">
      <h2 class="section4__title">
        Introducing the 100% Done-For-You ERC Service from <span v-html="['lam-rca', 'lam-rca-entr'].includes(this.$route.name) ? 'RC Advisors':'National Tax Credits'"></span>
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section4',
}
</script>

<style lang="scss" scoped>
.section4 {
  //padding: 80px 0px 350px 0px;
  padding: 80px 0px 80px 0px;
  background: #106b70;
  //@media (max-width: 1399px) {
  //  padding-bottom: 35%;
  //}
  //@media (max-width: 767px) {
  //  padding-top: 40px;
  //  padding-bottom: 40%;
  //}
}
.section4__title {
  color: #fff;
  font-size: 54px;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;

  @media (max-width: 767px) {
    font-size: 30px;
  }
}
</style>
