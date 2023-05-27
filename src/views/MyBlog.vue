<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <CardBlog :post="mainPost"></CardBlog>
    <CardPosts></CardPosts>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import Footer from "@/components/MyFooter.vue";
import NavBar from "@/components/NavBar.vue";
import CardBlog from "@/components/blog/MyCardBlog.vue";
import CardPosts from "@/components/blog/MyCardPosts.vue";
export default {
  components: { NavBar, Footer, CardBlog, CardPosts },
  data() {
    return {
      mainPost: {
        category: "Categoria",
        date: "27 de jan, 2023",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum ante a elit tristique, in pulvinar ligula interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Nulla facilisis risus id leo feugiat, a vestibulum urna tristique. Nam tristique, urna vitae lacinia semper, ipsum metus consequat dui, sed fermentum enim libero sed dui. Mauris viverra justo et turpis tincidunt, eget convallis justo tincidunt.",
        name: "Fulano da silva",
        profileImg: "",
        role: "Cargo na empresa",
      },
    };
  },
};
</script>
<style scoped>
</style>