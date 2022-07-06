<template>
  <div>
    <loader v-if="loading"/>
    <div class="app-main-layout" v-else>

      <Navbar @click="isOpen = !isOpen"/>

      <Sidebar v-model="isOpen"/>

      <main class="app-content" >
        <div class="app-page" :class="{full: !isOpen}">
          <router-view/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'
import messages from "../utils/messages";

export default {
  name: "MainLayout",
  components: {
    Navbar, Sidebar
  },
 async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }
    this.loading = false
  },
  data: () => ({
    isOpen: true,
    loading:true,
  }),
  computed:{
    error(){
      return this.$store.getters.error
    }
  },
  watch:{
    error(fbError){
      this.$error(messages[fbError.code] || "что-то пошло не так")
    }
  }

};
</script>

<style scoped>
.app-page{
  padding-left: 150px;
  transition: all ease .3s;
}
</style>