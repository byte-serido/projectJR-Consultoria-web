<template>
  <div>
    <header>
      <NavBar></NavBar>
    </header>
    <main>
        <MyHero id="hero"></MyHero>
        <MyAbout></MyAbout>
        <MyService></MyService>
        <MyDepoiment></MyDepoiment>
        <MyPostBlog></MyPostBlog>
        <MyContact></MyContact>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/MyFooter.vue"
import MyHero from "../components/home/MyHero.vue"
import MyAbout from "@/components/home/MyAbout.vue";
import MyService from "../components/home/MyService.vue"
import MyDepoiment from "@/components/home/MyDepoiment.vue";
import MyPostBlog from "@/components/home/MyPostBlog.vue";
import MyContact from "@/components/home/MyContact.vue";
export default {
    components:{MyHero, MyAbout, MyService, MyPostBlog, MyContact, MyDepoiment, NavBar, Footer},
}
</script>

<style scoped>
    
</style>
