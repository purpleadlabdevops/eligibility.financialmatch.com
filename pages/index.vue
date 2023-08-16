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
  mounted(){
    this.$store.commit('setPhone', '18669602397')
  }
}
</script>
