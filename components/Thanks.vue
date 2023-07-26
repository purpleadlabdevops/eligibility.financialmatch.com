<template>
  <section class="thanks">
    <div class="container">
      <div v-if="progress">
        <h1 class="thanks__title">{{ title }}</h1>
        <div class="thanks__progress">
          <span :style="`width: ${step}%`"></span>
        </div>
      </div>
      <ThanksAff v-else />
    </div>
  </section>
</template>

<script>
export default{
  data(){
    return{
      progress: true,
      step: 0,
      title: '',
      steps: {
        0: 'Getting Results',
        30: 'Checking Partners',
        70: 'Almost There',
        100: 'Done'
      }
    }
  },
  mounted(){
    const interval = setInterval(() => {
      if(this.steps[this.step]) this.title = this.steps[this.step]
      if(this.step === 100) {
        clearInterval(interval)
        setTimeout(()=>{
          this.progress = false
        }, 500);
      }
      this.step = this.step + 1
    }, 70);
  }
}
</script>

<style lang="scss" scoped>
.thanks{
  min-height: 400px;
  padding: 50px 0;
  &__title{
    font-size: 40px;
    color: #106b70;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
  }
  &__progress{
    box-sizing: content-box;
    height: 40px;
    position: relative;
    margin: 0 auto;
    border-radius: 25px;
    padding: 10px;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
    max-width: 100%;
    width: 600px;
    span {
      display: block;
      height: 100%;
      border-radius: 20px;
      background-color: rgb(43, 194, 83);
      box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0, 0, 0, 0.4);
      position: relative;
      overflow: hidden;
      background-image: linear-gradient(#5FC6C1, #136B70);
      &:after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: linear-gradient( -45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent );
        z-index: 1;
        background-size: 50px 50px;
        animation: move 2s linear infinite;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        overflow: hidden;
      }
    }
  }
}
@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}
</style>