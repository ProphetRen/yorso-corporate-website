<template>
  <ul class="right">
    <language-select/>
    <li :class="layout === 'FrontLayout'?'dark-border':false">
      <a
          class="dropdown-trigger black-text"
          href="#"
          ref="dropdown"
          data-target="dropdown"
      >
        {{ name }}
        <i class="material-icons right">arrow_drop_down</i>
      </a>

      <ul id="dropdown" class="dropdown-content">
        <li>
          <router-link to="/bill" class="black-text">
            <i class="material-icons">account_circle</i>Профиль
          </router-link>
        </li>
        <li class="divider" tabindex="-1" v-if="this.$store.getters.info.name"></li>
        <li v-if="this.$store.getters.info.name">
          <a href="#" class="black-text" @click.prevent="$emit('logout')">
            <i class="material-icons">assignment_return</i>Выйти
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import languageSelect from "./LanguageSelect";

export default {
  name: "profile",
  components: {
    languageSelect
  },
  computed: {
    name() {
      if (this.$store.getters.info.name) {
        return this.$store.getters.info.name
      }else{
        return "Войти"
      }
    },
    layout() {
      return this.$route.meta.layout + 'Layout'
    }
  },

  mounted() {
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true
    })
  }
}
</script>

<style scoped lang="scss">

.dark-border {
  border: 2px solid #c9c9c9;
  border-radius: 10px;
}

.right{
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 500px){
  .dropdown-trigger{
    padding: 0 5px !important;
  }

  .right{
    margin-left: 5px !important;
  }
}

</style>