<template>
  <div>
    <LAMTop />
    <LAMSection1 />
    <LAMReviews />
    <LAMSection2 />
    <LAMSection3 />
    <LAMSection4 />
    <LAMSection5 />
    <LAMSection6 />
    <LAMSection7 />
    <LAMFaq />
  </div>
</template>

<script>
export default {
  layout: 'lam',
  head() {
    return {
      title: 'RC Advisors',
      script: [
        {
          ssr: false,
          async: true,
          src: 'https://b-js.ringba.com/CAaeed274cccc44a498c261668dad4510b'
        },
      ]
    }
  },
  mounted(){
    this.$store.commit('setPhone', '18339010352')
    console.log(this.$route.name);
  },
}
</script>
