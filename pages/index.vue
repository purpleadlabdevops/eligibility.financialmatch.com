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
}
</script>
