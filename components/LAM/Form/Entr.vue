<template>
  <form @submit.prevent="submit" class="form" :class="`form__${design}`">
    <div class="form-progress" :style="`width: ${((step + 1) * 100) / (quiz.length + 1)}%`" ></div>
    <div class="step" v-for="(item, i) in quiz" v-show="step === i && !notQualify">
      <h2 class="form-question" v-html="item.question"></h2>
      <h3 v-if="step === 0">
        <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5306 1.22407C6.19336 0.0793971 -9.40939 2.75616 10.8777 22.6206M9.29278 14.5903C9.328 16.6859 9.68373 21.2153 10.8249 22.5678C9.59215 21.8458 5.38329 20.5602 2.68891 20.296" stroke="#75A7EF" />
        </svg>
        Please Select One
        <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.999659 1.22407C11.3369 0.0793971 26.9397 2.75616 6.65257 22.6206M8.2375 14.5903C8.20227 16.6859 7.84655 21.2153 6.7054 22.5678C7.93812 21.8458 12.147 20.5602 14.8414 20.296" stroke="#75A7EF" />
        </svg>
      </h3>
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
        >
          {{ option }}
        </button>
      </div>
    </div>
    <div class="step" v-if="step === quiz.length && !notQualify">
      <h2>Enter info below to get your results.</h2>
      <input
        type="text"
        placeholder="Company Name"
        v-model="company"
        @change="change('company', $event)"
        required
        id="company"
      />
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
        ref="phone"
        @change="change('phone', $event)"
        @input="phoneInput"
        maxlength="14"
        id="phone">

      <input type="submit" value="Submit" :disabled="spinner" />

      <div class="small">By clicking submit, you are providing express consent to be contacted by SMS, possibly using automated technology to the number you provided. If at any time you wish to opt-out of communication, please reply "STOP". Text "HELP" for help. Message frequency may vary. Message/data rates may apply. Submission of this form does not authorize the purchase of goods, services, or products. See the privacy policy/Terms and Conditions on the webpage.</div>
    </div>
    <div class="step" v-if="notQualify">
      <h2>You Do Not Qualify for ERC</h2>
      <p>Unfortunately, based on your answers it appears we can not help you at this time.</p>
    </div>

    <input ref="leadid_token" id="leadid_token" name="universal_leadid" type="hidden" />
    <input type="hidden" name="is_employee" :value="getAnswer('owner') === 'I am a Business Owner' ? 'No':'Yes'">

    <div class="spinner" v-if="spinner">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" />
      </svg>
    </div>
  </form>
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
          question: 'I had W2 Employees in 2020 or 2021',
          options: ['Yes', 'No'],
          answer: null,
          id: 'w2_employees',
        },
        {
          question: 'How Many W2 Employees Do You Have?',
          options: 'Number',
          min: 1,
          max: 100,
          answer: null,
          id: 'number_of_w2_employees',
        },
        {
          question: 'Did You Experience a Supply Chain Disruption in 2020 or 2021?',
          options: ['Yes', 'No'],
          answer: null,
          id: 'supply_chain_disruption',
        },
        {
          question: 'Did You Have a Decrease in Revenue in 2020 or 2021 compared to 2019?',
          options: ['Yes', 'No'],
          answer: null,
          id: 'decreased_revenue',
        },
        {
          question: 'Are you the owner or decision maker for this business?',
          options: ['Yes', 'No'],
          answer: null,
          id: 'owner_decision_maker',
        },
        {
          question: 'Did You Receive PPP Money',
          options: ['Yes', 'No'],
          answer: null,
          id: 'ppp_money',
        },
        {
          question: 'Are you?',
          options: ['I am a Business Owner', 'I am an Employee'],
          answer: null,
          id: 'owner',
        },
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
      if(this.phone.length < 14){
        this.$refs.phone.classList.add('err')
        alert('Please insert valid phone number')
        setTimeout(()=>{
          this.$refs.phone.classList.remove('err')
        }, 2000);
      } else{
        this.spinner = true
        const owner = this.getAnswer('owner') === 'I am a Business Owner' ? 'No':'Yes';
        this.$store.commit('setResult', this.getAnswer('number_of_w2_employees'))

        const employees = this.getAnswer('number_of_w2_employees')

        const phone = '1'+this.phone.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '')

        const data = {
          first_name: this.first_name,
          last_name: this.last_name,
          phone_home: phone,
          email_address: this.email,
          company_name: this.company,
          is_employee: owner,
          ppp_money: this.getAnswer('ppp_money'),
          w2_employees: this.getAnswer('w2_employees'),
          number_of_w2_employees: this.getAnswer('number_of_w2_employees'),
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
              if(employees > 4 && owner === 'Yes' && this.hook){
                this.hookAction(this.first_name, this.last_name, this.email, phone)
              }
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
            if(process.env.NODE_ENV === 'production') this.$axios.post(process.env.API+'/error', { params: { msg: 'LAM/Form/Entr.vue '+err } })
            this.$swal(err)
          })
          .finally(() => {
            this.spinner = false
          })
      }
    },
  },
  watch: {
    notQualify(val) {
      if (val) this.step = this.quiz.length
    }
  }
}
</script>

