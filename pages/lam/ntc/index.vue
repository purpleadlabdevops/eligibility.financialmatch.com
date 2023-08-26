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
          src: 'https://b-js.ringba.com/CA5ba7594e2aa7403eb7660e9cca82fe17'
        },
      ]
    }
  },
  mounted(){
    this.$store.commit('setPhone', '18556512580')
  }
}
</script>
