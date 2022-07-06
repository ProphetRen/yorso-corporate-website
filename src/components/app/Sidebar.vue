<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">


    <router-link
        v-for="link in links"
        :key="link.url"
        :to="link.url"
        custom
        v-slot="{ href, route, navigate, isActive, isExactActive }"
    >
      <li :class="[isExactActive && 'active']">
        <a :href="href" @click="navigate" class="waves-effect waves-orange pointer">{{link.title }}</a>
      </li>
    </router-link>

  </ul>
</template>

<script>
export default {
  props: ['value'],
  name: "Sidebar",
  data: () => ({
    links: [
      {title: 'Счет', url: '/bill', exact: true},
      {title: 'Об аккаунте', url: '/aboutAccount'},
      {title: 'На главную', url: '/'}
    ]
  })
}
</script>

<style scoped>

</style>