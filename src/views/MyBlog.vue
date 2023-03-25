<template>
    <header>
      <NavBar></NavBar>
    </header>
    <main>
        <h1>Blog</h1>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/MyFooter.vue"
export default {
    components:{NavBar, Footer}
}
</script>
<style scoped>
    
</style>