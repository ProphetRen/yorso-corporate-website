<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date | date('datetime') }}</span>
      </div>
      <profile @logout="logout"></profile>
    </div>
  </nav>
</template>

<script>
import profile from "./Profile";

export default {

  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null,
    customDropdown:null,
  }),
  components:{
    profile
  },
  name: "Navbar",
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout")
      this.$router.push('/login?message=logout')
    },
  },
  beforeDestroy() {
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  }
}
</script>

<style scoped lang="scss">
@media (max-width: 500px){
  .navbar{
    padding: 0 10px;
  }
}

.navbar-left{
  z-index: 40;
  line-height: normal;
}
</style>