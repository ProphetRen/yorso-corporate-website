<template>
  <div>
    <div class="page-title">
      <h3>Об аккаунте</h3>
    </div>

    <div class="account-name">
      <span style="margin-right: 10px">Имя пользователя:</span>
      <span>{{ name }}</span>
    </div>

    <div class="history-chart">
      <canvas></canvas>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      if (this.$store.getters.info.name) {
        return this.$store.getters.info.name
      } else {
        return "Войти"
      }
    },
  }
}
</script>

