<template>
  <div class="page__content">
    <NTCBanner />
    <NTCForm :hook="true" :thanks="true" />
    <NTCQuality />
    <NTCWide />
    <NTCRetention />
    <NTCSays />
  </div>
</template>

<script>
export default {
  layout: 'ntc',
  head() {
    return {
      script: [
        {
          ssr: false,
          async: true,
          src: 'https://b-js.ringba.com/CA2919c057d34b44f9bdecc7bfa5a0da3b'
        },
      ]
    }
  },
  mounted(){
    this.$store.commit('setPhone', '18669602397')
  }
}
</script>
