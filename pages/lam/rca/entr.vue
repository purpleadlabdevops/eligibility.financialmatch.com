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
          src: 'https://b-js.ringba.com/CAd0a242d7649e43278669006024b697e2'
        },
      ]
    }
  },
  mounted(){
    this.$store.commit('setPhone', '18449974732')
  },
}
</script>
