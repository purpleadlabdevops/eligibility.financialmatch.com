<template>
  <div class="page__content">
    <Banner />
    <Form :hook="true" :thanks="true" />
    <Quality />
    <Wide />
    <Retention />
    <Says />
  </div>
</template>

<script>
export default {
  mounted(){
    // this.$store.commit('setPhone', '18775070229')
  },
}
</script>
