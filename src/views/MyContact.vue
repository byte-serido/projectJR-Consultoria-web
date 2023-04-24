<template>
    <header>
      <NavBar></NavBar>
    </header>
    <main>
      <MyContact/>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
</template>

<script lang="js">
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/MyFooter.vue"
import MyContact from "@/components/home/MyContact.vue";
export default {
    components:{ NavBar, Footer, MyContact }
}
</script>
<style scoped>
    
</style>
