<template>
  <section class="form__wrap">
    <div class="container">
      <form @submit.prevent="submit" class="form" :class="`form__${design}`">
        <div class="form__progress" :data-tab="step + 1">
          <div class="form__num" :class="step + 1 >= 1 ? 'active':''">
            {{ step + 1 > 1 ? '✔' : '1' }}
            <span>EMPLOYEES</span>
          </div>
          <div class="form__num" :class="step + 1 >= 2 ? 'active':''">
            {{ step + 1 > 2 ? '✔' : '2' }}
            <span>EXPERIENCE</span>
          </div>
          <div class="form__num" :class="step + 1 >= 3 ? 'active':''">
            {{ step + 1 > 3 ? '✔' : '3' }}
            <span>REVENUE</span>
          </div>
          <div class="form__num" :class="step + 1 >= 4 ? 'active':''">
            {{ step + 1 > 4 ? '✔' : '4' }}
            <span>OWNER</span>
          </div>
          <div class="form__num" :class="step + 1 >= 5 ? 'active':''">
            {{ step + 1 > 5 ? '✔' : '5' }}
            <span>PPP MONEY</span>
          </div>
          <div class="form__num" :class="step + 1 >= 6 ? 'active':''">
            {{ step + 1 > 6 ? '✔' : '6' }}
            <span>BORROWER INFO</span>
          </div>
        </div>
        <div class="step" v-for="(item, i) in quiz" v-show="step === i && !notQualify">
          <h3 class="form-title" v-if="item.title" v-html="item.title" ></h3>
          <h2 class="form-question" v-html="item.question"></h2>
          <div class="form-options" v-if="item.options === 'Number'">
            <select v-model="number" id="emp">
              <option disabled value="">Choose one</option>
              <option :value="i" v-for="i in item.max">{{ i }}</option>
              <option :value="+item.max + 1">{{ item.max + '+' }}</option>
            </select>
            <div class="buttons">
              <button
                @click.prevent="chooseAnswer(number, i)"
                :key="number"
                class="yellow"
                v-if="number"
              >
                Submit
              </button>
              <button class="back" @click.prevent="stepBack">
                <img src="@/assets/img/arrow-back.svg" />
              </button>
            </div>
          </div>
          <div class="form-options" v-else>
            <button
              v-for="option in item.options"
              @click.prevent="chooseAnswer(option, i)"
              :key="option"
              :class="`btn btn__${option}`"
            >
              <span>{{ option }}</span>
            </button>
          </div>
        </div>
        <div class="step" v-if="step === quiz.length && !notQualify">
          <h2 class="form-title">Enter info below to get your results.</h2>
          <input
            type="text"
            placeholder="Company Name"
            v-model="company"
            @change="change('company', $event)"
            required
            id="company"
          />
          <div class="form-row">
            <input
              type="text"
              placeholder="First Name"
              v-model="first_name"
              @change="change('first_name', $event)"
              required
              id="first_name"
            />
            <input
              type="text"
              placeholder="Last Name"
              v-model="last_name"
              @change="change('last_name', $event)"
              required
              id="last_name"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            v-model="email"
            @change="change('email', $event)"
            required
            id="email"
          />
          <input
            type="tel"
            placeholder="(###) ###-####"
            v-model="phone"
            @change="change('phone', $event)"
            @input="phoneInput"
            minlength="14"
            maxlength="14"
            id="phone"
            required>

          <input type="submit" value="Submit" :disabled="spinner" />

          <div class="small">By clicking submit, you are providing express consent to be contacted by SMS, possibly using automated technology to the number you provided. If at any time you wish to opt-out of communication, please reply "STOP". Text "HELP" for help. Message frequency may vary. Message/data rates may apply. Submission of this form does not authorize the purchase of goods, services, or products. See the privacy policy/Terms and Conditions on the webpage.</div>

        </div>
        <div class="step" v-if="notQualify">
          <h2>You Do Not Qualify for ERC</h2>
          <p>Unfortunately, based on your answers it appears we can not help you at this time.</p>
        </div>

        <input ref="leadid_token" id="leadid_token" name="universal_leadid" type="hidden" />

        <div class="spinner" v-if="spinner">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" />
          </svg>
        </div>

      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    design: {
      type: String,
      default: 'default'
    },
    hook: {
      type: Boolean,
      default: false
    },
    thanks: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      spinner: false,
      step: 0,
      number: '',
      first_name: null,
      last_name: null,
      email: null,
      phone: null,
      company: null,
      notValid: true,
      quiz: [
        {
          question: 'How Many W2 Employees Do You Have?',
          title: 'I HAD W2 EMPLOYEES IN 2020 OR 2021',
          required: true,
          options: ['1-4','5-10','11-50','51-100','101-200','200+'],
          answer: null,
          id: 'num_employees_range',
          type: 'text',
        },
        {
          question: 'Did You Experience a Supply Chain Disruption in 2020 or 2021?',
          required: true,
          options: ['yes', 'no'],
          answer: null,
          id: 'supply_chain_disruption',
          type: 'icon',
        },
        {
          question: 'Did You Have a Decrease in Revenue in 2020 or 2021 compared to 2019?',
          required: true,
          options: ['yes', 'no'],
          answer: null,
          id: 'decreased_revenue',
          type: 'icon',
        },
        {
          question: 'Are you the owner or decision maker for this business?',
          options: ['yes', 'no'],
          answer: null,
          id: 'owner_decision_maker',
          type: 'icon',
        },
        {
          question: 'Did You Receive PPP Money',
          options: ['yes', 'no'],
          answer: null,
          id: 'ppp_money',
          type: 'icon',
        }
      ]
    }
  },
  mounted(){
    if(this.$route.name === 'goat_v2'){
      const newQuiz = []
      this.quiz.forEach((item, index) => {
        if(!['decreased_revenue', 'owner_decision_maker', 'ppp_money', 'supply_chain_disruption'].includes(item.id)){
          newQuiz.push(item)
        }
      })
      this.quiz = newQuiz
      console.dir(this.quiz)
    }
    if(['lam', 'lamtiktok', 'lam-vol'].includes(this.$route.name)){
      const newQuiz = []
      newQuiz.push(this.quiz[0])
      newQuiz.push(this.quiz[1])
      newQuiz[0].question = 'Did you Have W2 Employees in 2020 or 2021?'
      newQuiz[1].question = 'How Many W2 Employees Did You Have?'
      this.quiz = newQuiz
    }
  },
  computed: {
    notQualify() {
      return ((this.quiz[0].answer === 'No' || this.quiz[1].answer) < 2 && this.step > 1)
    },
    result() {
      return this.$store.state.result
    },
    leadsData() {
      return this.$store.state.leads.data
    },
  },
  methods: {
    change(model, e){
      this[model] = e.target.value
    },
    phoneInput(e) {
      let arr = this.phone.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('');
      if (arr.length > 0) arr.splice(0, 0, '(');
      if (arr.length > 4) arr.splice(4, 0, ') ');
      if (arr.length > 8) arr.splice(8, 0, '-');
      this.phone = arr.toString().replace(/[,]/g, '');
    },
    chooseAnswer(a, i) {
      if(this.step === this.quiz.length){
        this.submit()
      } else {
        this.quiz[i].answer = a
        this.step = this.step + 1
      }
    },
    stepBack() {
      this.step = this.step - 1
    },
    phoneNumberInput(e) {
      let arr = e.target.value
        .replace(/[^\dA-Z]/g, '')
        .replace(/[\s]/g, '')
        .split('')
      this.phone = arr.toString().replace(/[,]/g, '')
    },
    getAnswer(id){
      if(this.quiz.find(item => item.id === id)){
        const item = this.quiz.find(item => item.id === id)
        return item.answer
      } else {
        return false
      }
    },
    hookAction(first_name, last_name, email, phone){
      const cookie = document.cookie.split('; ').reduce((prev, current) => {
        const [name, ...value] = current.split('=');
        prev[name] = value.join('=');
        return prev;
      }, {});
      const hookData = {
        name: first_name+' '+last_name,
        email: email,
        phone: phone,
        transaction_id: this.$route.query.c1 || false,
        fbp: cookie._fbp || false,
        fbc: cookie._fbc || false,
        gclid: this.$route.query.gclid || false,
      }
      if(this.$route.name === 'entr'){
        hookData.transaction_id = this.$route.query.tx_id
      }
      this.$axios.post(process.env.API+'/hook', { params: hookData })
        .then(result => {
          console.log('START hook 3oa9fu6 ------------------')
          console.dir(result)
        })
        .catch(err => {
          console.dir(err)
        })
        .finally(() => {
          console.log('END hook 3oa9fu6 ------------------')
        })
    },
    hookActionSecond(obj){
      this.$axios.post(process.env.API+'/hook-3uskego', { params: obj })
        .then(result => {
          console.log('START hook 3uskego -------------------')
          console.dir(result)
        })
        .catch(err => {
          console.dir(err)
        })
        .finally(() => {
          console.log('END hook 3uskego -------------------')
        })
    },
    firstpromoterAction(){
      const cookie = document.cookie.split('; ').reduce((prev, current) => {
        const [name, ...value] = current.split('=');
        prev[name] = value.join('=');
        return prev;
      }, {});
      this.$axios.post(process.env.API+'/firstpromoter',
        {params: {
          email: this.email,
          tid: cookie._fprom_tid,
        }})
        .then(result => {
          console.log('START firstpromoter --------------------')
          console.dir({
            email: this.email,
            tid: cookie._fprom_tid,
          })
          console.dir(result)
        })
        .catch(err => {
          console.dir(err)
        })
        .finally(() => {
          console.log('END firstpromoter --------------------')
        })
    },
    submit() {
      this.spinner = true
      const phone = '1'+this.phone.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '')
      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        phone_home: phone,
        email_address: this.email,
        company_name: this.company,
        ppp_money: this.getAnswer('ppp_money'),
        w2_employees: 'Yes',
        num_employees_range: this.getAnswer('num_employees_range'),
        supply_chain_disruption: this.getAnswer('supply_chain_disruption'),
        decreased_revenue: this.getAnswer('decreased_revenue'),
        owner_decision_maker: this.getAnswer('owner_decision_maker'),
        opt_in_url: window.location.href,
        data8: this.$route.query.utm_source || false,
        data9: this.$route.query.utm_medium || false,
        data10: this.$route.query.utm_campaign || false,
        utm_source: this.$route.query.utm_source || false,
        utm_medium: this.$route.query.utm_medium || false,
        utm_campaign: this.$route.query.utm_campaign || false,
        utm_content: this.$route.query.utm_content || false,
        utm_term: this.$route.query.utm_term || false,
        jornaya_lead_id: this.$refs.leadid_token ? this.$refs.leadid_token.value : false,
        aff_id: this.$route.query.affid || false,
        s1: this.$route.query.utm_source || this.$route.query.sub1 || false,
        s2: this.$route.query.utm_medium || this.$route.query.sub2 || false,
        s3: this.$route.query.utm_campaign || this.$route.query.sub3 || false,
        s4: this.$route.query.utm_content || this.$route.query.sub4 || false,
        s5: this.$route.query.utm_term || this.$route.query.sub5 || false,
      }

      data.lp_offer_id = 4
      data.lp_campaign_id = "64d27de536191"

      if(process.env.NODE_ENV === 'development' || this.email === 'onyx18121990@gmail.com') data.lp_test = 1

      this.$axios.post(process.env.API+'/lp', {
        headers: {'Content-Type': 'application/json'},
        params: data
      })
        .then(res => {
          console.dir(res)
          if(res.data.result === "failed" || res.status > 299){
            throw res.data.message
          } else {
            if(['refe'].includes(this.$route.name)){
              this.firstpromoterAction()
            }
            this.hookActionSecond(data)
            // if(employees > 4 && this.hook){
            //   this.hookAction(this.first_name, this.last_name, this.email, phone)
            // }
            if(this.thanks){
              this.$router.push({
                path: '/thanks',
                query: {
                  q: JSON.stringify(this.quiz),
                  name: this.$route.name,
                  email: this.email,
                  r: JSON.stringify(res)
                }
              })
            } else {
              this.$parent.route = this.$route.name
            }
          }
        })
        .catch(err => {
          if(process.env.NODE_ENV === 'production') this.$axios.post(process.env.API+'/error', { params: { msg: 'Form.vue '+err } })
          this.$swal(err)
        })
        .finally(() => {
          this.spinner = false
        })
    },
  },
  watch: {
    notQualify(val) {
      if (val) this.step = this.quiz.length
    }
  }
}
</script>

<style lang="scss" scoped>
.form{
  background: rgba(#dbeae9, .2);
  border-radius: 15px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  padding: rem(40) rem(20);
  border-radius: 20px;
  border: 2px #568f96 solid;
  &__wrap{
    background: url(@/assets/img/step-bg.png) no-repeat center/cover;
    padding-top: rem(125);
  }
  &__num{
    position: relative;
    z-index: 2;
    background: #C8C8C8;
    width: res(40, 50);
    height: res(40, 50);
    line-height: res(40, 50);
    text-align: center;
    color: #333;
    display: block;
    border-radius: 50%;
    font-size: res(16, 24);
    &.active{
      background: var(--brand-red);
      color: #fff;
    }
    span{
      font-size: res(8, 12);
      text-transform: uppercase;
      color: #111;
      font-weight: 600;
      line-height: 1.1;
      display: block;
      position: absolute;
      top: calc(100% + .5rem);
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      padding: 0;
      white-space: nowrap;
    }
  }
  &__progress {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-250%);
    &:before{
      content: "";
      background: var(--accent-color-4);
      height: 1px;
      transition: 1s ease;
      position: absolute;
      left: 0; right: 0;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }
  }
  .spinner {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    svg {
      width: 50%;
      max-width: 10rem;
      animation: rotate 3.6s linear infinite;
    }
    circle {
      fill: none;
      stroke: #106b70;
      stroke-width: 8px;
      stroke-dasharray: 300;
      animation: outline 2s cubic-bezier(0.77, 0, 0.18, 1) infinite;
    }
  }
  @keyframes outline {
    0% {
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dashoffset: 300;
    }
    100% {
      stroke-dashoffset: 600;
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(-1turn);
    }
  }
  &:before {
    content: '';
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 15px;
    @media (min-width: 768px) {
      height: 30px;
    }
  }
  &-question{
    font-weight: 700;
    font-size: res(16, 20);
    color: #333;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e5e5e5;
    &:after{
      content: '(Required)';
      color: var(--brand-red);
      font-weight: 400;
      margin-left: .5rem;
    }
  }
  &-title{
    font-weight: 600;
    font-size: res(18, 32);
    color: #000;
    margin-bottom: 15px;
  }
  &-options {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .buttons {
      .back {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 15px;
        box-shadow: none;
      }
      @media (max-width: 767px) {
        display: flex;
        flex-direction: row-reverse;
        .back {
          flex: 1 30%;
        }
      }
    }
    button {
      border: none;
      font-weight: 700;
      font-size: res(24, 30);
      line-height: 1.1;
      text-align: center;
      color: var(--text-black);
      background: #ffffff;
      box-shadow: 0px 4px 10px rgba(1, 1, 1, 0.3), 0px -4px 0px #f8f8f8 inset;
      border-radius: 15px;
      height: rem(125);
      display: block;
      margin: .5rem;
      width: calc(100% / 2 - 1rem);
      max-width: rem(125);
      transition: 0.25s ease-in-out;
      @media(min-width:992px){
        width: calc(100% / 3 - 1rem);
      }
      @media(min-width:1200px){
        width: calc(100% / 5 - 1rem);
      }
      &.yellow {
        color: #fff;
        background: #fcd53f;
        box-shadow: 0px 4px 10px #c7d6ed, 0px -4px 0px #fbca38 inset;
      }
      &.btn{
        background: linear-gradient(45deg, rgba(255,255,255,1) 40%, rgba(200,200,200,1) 100%);
        background-size: 100% 100%;
        background-position: center center;
        height: rem(125);
        border-radius: 15px;
        position: relative;
        &__yes{
          background-image: url(@/assets/img/yes.png);
        }
        &__no{
          background-image: url(@/assets/img/no.png);
        }
        &__yes, &__no{
          span {
            display: block;
            font-size: 18px;
            text-transform: capitalize;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(5px);
          }
        }
        &:hover{
          cursor: pointer;
          transform: scale(0.9);
        }
      }
    }
  }
  input,
  select {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    height: 77px;
    background: #ffffff;
    border: 2px solid rgb(39, 159, 150);
    border-radius: 15px;
    font-weight: 500;
    font-size: 23px;
    color: #59595a;
    padding: 0 30px;
    &:not(:first-child) {
      margin-top: 15px;
    }
    &::placeholder {
      color: #a4bce1;
    }

    &[type='submit'] {
      border: 2px solid var(--accent-color-5);
      font-weight: 500;
      font-size: 23px;
      line-height: 26px;
      text-align: center;
      color: #fff;
      box-shadow: 0px 4px 10px #c7d6ed;
      border-radius: 15px;
      height: 74px;
      display: inline-block;
      margin: 15px auto;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      background: var(--accent-color-1);
      @media(min-width:768px){
        width: 300px;
        color: #000;
        background: rgba(var(--accent-color-1), .2);
      }
      &:hover {
        background: var(--accent-color-1);
        border-color: var(--accent-color-1);
        color: #fff;
      }
      &:active,
      &.active {
        background: #75a7ef;
        color: #fff;
        box-shadow: 0px 4px 10px #c7d6ed, 0px -4px 0px #75a7ef inset;
      }
      &.disabled, &:disabled {
        opacity: 0.5;
        cursor: wait;
      }
    }
  }
  &-row{
    margin-top: 15px;
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
    }
    input{
      @media(min-width:768px){
        width: calc(100% / 2 - 1rem);
        margin: 0 !important;
      }
    }
  }
}

.radio{
  display: flex;
  justify-content: center;
  align-items: center;
  input{
    width: 30px;
    height: 30px;
    margin-left: 0;
    margin-right: 10px;
  }
  label{
    font-size: 16px;
  }
  &-wrap{
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
  }
  &:not(:first-child){
    margin-left: 20px;
  }
}



</style>
