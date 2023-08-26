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
          src: 'https://b-js.ringba.com/CA7a2742a80cfc4a4bb35e5b9d4a696dba'
        },
      ]
    }
  },
  mounted(){
    this.$store.commit('setPhone', '18559631428')
    console.log(this.$route.name);
  }
}
</script>
