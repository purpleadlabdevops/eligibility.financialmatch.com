<template>
  <div class="sponsors" direction="left" scrollamount="10">
    <img v-for="(item, i) in 10" :src="require(`@/assets/img/logos/img-${i+1}.png`)" />
  </div>
</template>
<style lang="scss" scoped>
.sponsors {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  img{
    display: block;
    margin: 30px 15px 0;
  }
}
</style>
