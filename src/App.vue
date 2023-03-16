<template>
  <template v-if="loading">
    <div class="error-conect">
      <div class="error-text">
        <h1 class="error-title">ERROR 500</h1>
        <div class="error-subtext">
          <p>Manutenção no lado do servidor! Agradecemos sua compreensão. Tente novamente em algumas horas.</p>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <header>
      <NavBar></NavBar>
    </header>
    <router-view></router-view>
    <footer>
      <Footer></Footer>
    </footer>
  </template>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import Footer from "./components/MyFooter.vue"
export default {
  components:{NavBar, Footer},
  name: 'App',
  data(){
    return{
      loading:true,
    }
  },
  mounted(){
    this.loading = this.$store.dispatch("setInDepoiments") && this.$store.dispatch("setInServices")
  }
}
</script>

<style>
  #app{
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .error-conect{
    font-family: "Asap" sans-serif;
    background-color: #F7F9FC;
    min-height: 100%;
  }

  .error-text{
    color: #023F5C;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 36px;
    min-height: 100%;
  }

  .error-title{
    font-family: "Assistant" sans-serif;
    font-size: 4rem;
    font-weight: 700;
  }

  .error-subtext{
    display: flex;
    flex-direction: column;
    line-height: 1.2rem;
    font: 1.2rem;
    text-align: center;
    max-width: 500px;
    font-weight: 600;
  }
</style>
