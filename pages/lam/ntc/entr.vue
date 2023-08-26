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
      script: [
        {
          ssr: false,
          async: true,
          src: 'https://b-js.ringba.com/CA17a491cd1e5740db9451307180cf8ea9'
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
