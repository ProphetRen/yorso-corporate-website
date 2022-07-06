<template>
  <div class="col s12  l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">{{'Currency_account' | localize}}</span>

        <p v-for="cur in currencies"
           :key="cur"
            class="currency-line">
          <span>{{getCurrency(cur) | currency(cur)}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeBill",
  data:()=> ({
    currencies:['RUB', 'USD' ,'EUR']
  }),
  props:[
    'rates'
  ],
  computed:{
    base(){
      return this.$store.getters.info.bill / this.rates['USD'] / this.rates['RUB']
    }
  },
  methods:{
    getCurrency(currency){
      return Math.floor(this.base * this.rates[currency])
    }
  }
}
</script>

<style scoped>

</style>