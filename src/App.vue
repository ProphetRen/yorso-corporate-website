<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout";
import MainLayout from "./layouts/MainLayout";
import FrontLayout from "./layouts/FrontLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + "Layout"
    }
  },
  components: {
    EmptyLayout, MainLayout, FrontLayout
  },
};
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
.primary-btn {
  width: 200px;
  height: 40px;
  background: #FF7800;
  border-radius: 10px;
  border: none;
  transition: all ease-in-out .3s;
  cursor: pointer;
  color: white;
  font-weight: bold;

  &:hover {
    background: #cc6105;
  }
}
</style>
