<template>
  <div>
    <custom-header></custom-header>
    <main class="app-content">
      <loader v-if="loading" class="loader"></loader>
      <div>
        <router-view/>
      </div>
    </main>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import customHeader from "../components/most-usefull/CustomHeader";
import customFooter from "../components/most-usefull/CustomFooter";
import loader from "../components/app/Loader";

export default {
  name: "FrontLayout",
  components: {
    customHeader, customFooter, loader
  },
  data: () => ({
    loading:true
  }),
  async mounted() {
    if (!this.$store.getters.posts) {
      await this.$store.dispatch('fetchInfo')
    }
    this.loading = false
  },
}
</script>

<style scoped>
  .loader{
    position: absolute;
    top: 50%;
    left: 50%;
  }
</style>