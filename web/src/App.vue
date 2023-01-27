<template>
  <header>
      <NavBar></NavBar>
  </header>
  <router-view></router-view>
  <service/>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import Footer from "./components/MyFooter.vue"
import Service from "./components/MyService.vue"
export default {
  components:{NavBar, Footer, Service},
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
