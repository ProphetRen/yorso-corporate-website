<template>
  <div class="activities-wrapper">
    <div class="activity" v-for="activity in activities">
      <img src="../../src/assets/images/smm.png" alt="">
      <div class="activity__info">
        <h2 class="activity__heading">{{ activity.heading }}</h2>
        <span class="activity__description">{{ activity.description }}</span>
        <span class="activity__condition">Условия участия: {{ activity.condition }} </span>
      </div>
      <a href="" class="primary-btn ">Участвовать</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activities",
  computed: {
    activities() {
      return this.$store.getters.activities
    }
  }
}
</script>

<style scoped lang="scss">

h2 {
  margin: 0;
}

.activity {
  display: flex;
  flex-direction: row;
  background: rgba(225, 225, 225, 50%);
  align-items: center;

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px 50px;
    flex: 0 0 60%;
    min-height: 250px;
  }

  &__heading {
    font-weight: 700;
    font-size: 20px;
    line-height: 177.04%;
    color: #000000;
  }

  &__description {
    font-weight: 700;
    font-size: 14px;
    line-height: 177.04%;
    color: #000000;
  }

  &__condition {
    font-weight: 700;
    font-size: 14px;
    line-height: 177.04%;
    color: #000000;
  }

  .primary-btn {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    width: 200px;
    height: 50px;
  }
}

</style>