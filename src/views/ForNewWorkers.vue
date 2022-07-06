<template>
  <div class="for-new-workers-main-wrapper">
    <h1 class="for-new-workers-main-wrapper__heading">{{'For_new_workers_main_heading' | localize}} </h1>
    <div class="main-text">
      <div class="question">
        <h2 class="question__heading">{{'first_question_heading' | localize}}</h2>
        <div class="question__description">
          <p class="question__description-text">
            {{'first_question_first_paragraph' | localize}}
          </p>
          <p class="question-description-text">
            {{'first_question_second_paragraph' | localize}}
          </p>
          <p class="question-description-text">
            {{'first_question_third_paragraph' | localize}}
          </p>
        </div>
      </div>

      <div class="question">
        <h2 class="question__heading">{{'second_question_heading' | localize}}</h2>
        <div class="question__description">
          <ul class="question__description-text">
            <li>{{'second_question_first_item' | localize}}</li>
            <li>{{'second_question_second_item' | localize}}</li>
            <li>{{'second_question_third_item' | localize}}</li>
            <li>{{'second_question_fourth_item' | localize}}</li>
          </ul>
        </div>
      </div>


      <div class="question">
        <h2 class="question__heading">{{'third_question_heading' | localize}}</h2>
        <div class="question__description">
          <ul class="question__description-text">
            <li>{{'third_question_first_item' | localize}}</li>
            <li>{{'third_question_second_item' | localize}}</li>
            <li>{{'third_question_third_item' | localize}}</li>
            <li>{{'third_question_fourth_item' | localize}}</li>
            <li>{{'third_question_fifth_item' | localize}}</li>
            <li>{{'third_question_sixth_item' | localize}}</li>
            <li>{{'third_question_seventh_item' | localize}}</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ForNewWorkers"
}
</script>

<style scoped lang="scss">
.for-new-workers-main-wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px 80px;
  background: #F7F7F7;

  &__heading {
    font-weight: 700;
    font-size: 32px;
    line-height: 177.04%;
    color: #000000;
    @media (max-width: 768px){
      font-size: 28px;
    }
    @media (max-width: 570px){
      font-size: 26px;
    }
  }

  .main-text {
    background: #EEEEEE;
    padding: 50px;
    @media (max-width: 570px){
      padding: 25px;
    }
  }

  .question {
    margin-bottom: 20px;

    &__heading {
      font-weight: 700;
      font-size: 16px;
      line-height: 177.04%;
      color: #000000;
    }
  }

  ul {
    padding-left: 15px;

    > li {
      list-style: initial;
    }
  }
  @media (max-width: 768px){
    padding: 20px 30px;
  }
}

</style>