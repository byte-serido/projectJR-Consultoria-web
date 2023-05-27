<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <CardBlog></CardBlog>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import Footer from "@/components/MyFooter.vue";
import NavBar from "@/components/NavBar.vue";
import CardBlog from "@/components/blog/MyCardBlog.vue";
export default {
  components: { NavBar, Footer, CardBlog },
};
</script>
<style scoped>
</style>