<template>
  <header>
      <NavBar></NavBar>
  </header>
  <router-view></router-view>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import Footer from "./components/MyFooter.vue"
export default {
  components:{NavBar, Footer},
  name: 'App',
  created(){
    this.$store.dispatch('setInDepoiments');
    this.$store.dispatch("setInServices");
  }
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
