<template>
  <div>
    <div class="page-title">
      <h3>{{'Bill' | localize}}</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading"/>

    <div v-else class="row currency-wrapper">
      <HomeBill
      :rates="currency.rates"/>
      <HomeCurrency
          :rates="currency.rates"
          :date="currency.date"/>
    </div>
  </div>
</template>

<script>
import HomeBill from "../components/HomeBill";
import HomeCurrency from "../components/HomeCurrency";

export default {
  name: 'bill',
  components: {
    HomeBill, HomeCurrency
  },data:()=>({
    loading:true,
    currency: null
  }),
  async mounted() {
    this.currency = await this.$store.dispatch('fetchCurrency')
    setTimeout(()=>{
      this.loading = false
    },3000)
  },
  methods:{
   async refresh(){
      this.loading = true
      this.currency = await this.$store.dispatch('fetchCurrency')
     this.loading = false
    }
  }
}

</script>

<style scoped lang="scss">
@media(max-width: 768px){
  .currency-wrapper{
    display: flex;
    flex-direction: column;
    >div{
      width: 100%;
    }
  }
}

</style>