<template>
  <div class="news-main-wrapper">
    <div class="news-main-wrapper__heading-block">
      <h1 class="news-main-wrapper__heading">{{'News' | localize}}</h1>
      <button class="primary-btn news-main-wrapper__new-post" @click="openPopup">{{'Add_post' | localize}}</button>
    </div>
    <div class="posts-block-wrapper" >
      <div class="post" v-for="post in posts" :key="post.postHeading">
        <img src="../../src/assets/images/post-img.png" alt="post img" class="post-img">
        <div class="post__heading">
          {{post.postHeading}}
        </div>

        <div class="post__description">
          {{post.postDescription}}
        </div>
        <div class="post__footer">
          <div class="date-and-time-block">
            <span class="date">{{ post.date }}</span>
            <span class="time">{{ post.time.hours}} : {{post.time.minutes}}</span>
          </div>
        </div>
        <button class="delete-post-btn" @click="deletePost(post.id)">
          {{ 'Delete' | localize }}
        </button>
      </div>
    </div>
    <newPostPopup v-if="isCreatingPopup" @close="closePopup"/>
  </div>
</template>

<script>
import newPostPopup from "../components/app/NewPostPopup";

export default {
  name: "News",
  components: {
    newPostPopup
  },
  data: () => ({
    isCreatingPopup: false
  }),
  methods: {
    openPopup() {
      this.isCreatingPopup = true
      document.body.style.overflowY = 'hidden'
      document.body.style.overflowX = 'hidden'
    },
    closePopup() {
      this.isCreatingPopup = false
      document.body.style.overflow = 'auto'
    },
    deletePost(id) {
      let arrOfPostsKeys = Object.entries(this.$store.getters.posts)
      this.$store.dispatch('deletePost', {id, arrOfPostsKeys})
      setTimeout(() => {
        window.location.reload()
      }, 3000)
    }
  },
  computed:{
    posts(){
      return this.$store.getters.posts
    }
  },

}
</script>

<style scoped lang="scss">
.news-main-wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px 80px;
  background: #F7F7F7;

  &__heading-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__heading {
    margin: 0;
    @media (max-width: 991px){
      font-size: 38px;
    }
    @media (max-width: 570px){
    font-size: 24px;
  }
  }

  .posts-block-wrapper {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .post {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: white;
    margin-top: 60px;
    width: 100%;
    &-img {
      width: 100%;
    }

    &__heading {
      padding: 35px 0;
      font-weight: 700;
      font-size: 24px;
      line-height: 181.53%;
      text-align: center;
      color: #000000;
      border-bottom: 2px solid #E7E0E0;
      width: 100%;
      @media(max-width: 768px){
        font-size: 18px;
      }
    }

    &__description {
      padding: 30px 40px;
      font-size: 16px;
      line-height: 181.53%;
      color: #000000;
      word-wrap: anywhere;
      box-sizing: border-box;

      @media(max-width: 570px){
        font-size: 12px;
      }
    }

    &__footer {
      width: 100%;
      display: flex;
      padding: 10px 40px;
      flex-direction: row;
      justify-content: flex-end;

      .date-and-time-block {
        display: flex;
        justify-content: space-between;
        min-width: 15%;
        font-size: 12px;
        line-height: 181.53%;
        color: #C5C1C1;
        font-weight: 700;
        @media (max-width: 1400px){
          min-width: 20%;
        }
        @media (max-width: 991px){
          min-width: 40%;
        }
        @media (max-width: 768px){
          min-width: 60%;
        }
      }
    }
    .delete-post-btn{
      background: transparent;
      border: none;
      color: rgba(189, 8, 8, 0.5);
      cursor:pointer;
      align-self: start;
      margin: 0 0 10px 10px;
    }
  }
  @media (max-width: 768px){
    padding: 20px 30px;
  }

}

</style>