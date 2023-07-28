<template>
  <section class="banner">
    <div class="container">
      <h1 class="banner__title">Get Up to $26,000 Cash <br> for Each W2 Employee</h1>
      <h2 class="banner__subtitle">TAKE ADVANTAGE OF CONGRESS CARES ACT FOR EMPLOYERS IMPACTED BY COVID</h2>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner {
  &__title {
    font-size: res(26, 54);
    font-weight: 600;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--accent-color-5);
  }
  &__subtitle {
    font-weight: 400;
    font-size: res(16, 20);
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1rem;
    color: var(--accent-color-4);
  }
}
</style>
