<template>
  <header>
      <NavBar></NavBar>
  </header>
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar.vue"
export default {
  components:{NavBar},
  name: 'App',
}
</script>

<style>
  #app{
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100%;
  }
</style>
