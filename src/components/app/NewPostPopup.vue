<template>
  <div class="popup-main-wrapper">
    <div class="overlay" @click="$emit('close')"></div>
    <form class="form">
      <img src="../../assets/images/x.svg" alt="" @click="$emit('close')" class="close-btn">
      <div class="form-body">
        <input type="text" class="post-heading" v-model="postHeading" placeholder="Заголовок записи">
        <textarea type="text" class="post-description" v-model="postDescription" placeholder="Текст записи"></textarea>
        <button class="submit-btn primary-btn" @click.prevent="submit">
          Создать пост
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewPostPopup",
  data: () => ({
    postHeading: null,
    postDescription: null,
  }),
  methods: {
    submit() {
      if (this.postDescription.length > 10 && this.postHeading.length > 10) {
        this.$store.dispatch('createPost', {
          postHeading: this.postHeading,
          postDescription: this.postDescription,
          date: this.date.toLocaleDateString(),
          time: this.time,
          id: this.posts ? Object.keys(this.posts).length + 1: 1
        })
        this.$emit('close')
        setTimeout(() => {
          window.location.reload()
        }, 3000)
      }
    },
  },
  computed:{
    posts(){
      return this.$store.getters.posts
    },
    date(){
      return new Date()
    },
    time(){
      return {
          hours: new Date().getHours().toString().length > 1 ? new Date().getHours() : '0' + new Date().getHours(),
          minutes: new Date().getUTCMinutes().toString().length > 1 ? new Date().getUTCMinutes() : '0' + new Date().getUTCMinutes(),
      }
    }
  },
  mounted() {
    console.log(this.posts)
  }
}
</script>

<style scoped>

* {
  box-sizing: border-box;
}

.overlay {
  position: absolute;
  top: -100px;
  width: 300vw;
  height: 300vh;
  z-index: 40;
  background: #282828;
  opacity: 0.5;
}

.popup-main-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999;
  height: 100%;
  justify-content: center;
  display: flex;
}

.form {
  position: absolute;
  background: #fff;
  opacity: 1;
  z-index: 42;
  top: 25vh;
  border-radius: 10px;
  padding: 50px;
  min-width: 600px;
}

.close-btn {
  cursor: pointer;
  top: 15px;
  left: 15px;
  position: absolute;
}

.form-body {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}


.post-description {
  border: 2px solid #d7d7d7;
  background: #fff;
  resize: none;
  min-height: 150px;
}

input::placeholder, textarea::placeholder {
  color: #000000;
}

textarea:focus {
  border: #26a29a solid 2px;
  outline: none;
}
</style>