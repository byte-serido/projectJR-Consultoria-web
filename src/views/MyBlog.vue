<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <!-- <CardBlog :post="mainPost"></CardBlog> -->
    <CardBlog :posts="posts"></CardBlog>
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
  data() {
    return {
      posts: [
        {
          id: 1,
          category: "Categoria",
          date: "27 de jan, 2023",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum ante a elit tristique, in pulvinar ligula interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Nulla facilisis risus id leo feugiat, a vestibulum urna tristique. Nam tristique, urna vitae lacinia semper, ipsum metus consequat dui, sed fermentum enim libero sed dui. Mauris viverra justo et turpis tincidunt, eget convallis justo tincidunt.",
          name: "Fulano da silva",
          profileImg: "",
          role: "Cargo na empresa",
          img: "http://localhost:8080/img/postImage.d7e6d514.svg",
        },
        {
          id: 2,
          category: "Categoria",
          date: "27 de jan, 2023",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum ante a elit tristique, in pulvinar ligula interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          name: "Fulano da silva",
          profileImg: "",
          role: "Cargo na empresa",
          img: "http://localhost:8080/img/postImage.d7e6d514.svg",
        },
        {
          id: 3,
          category: "Categoria",
          date: "27 de jan, 2023",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum ante a elit tristique, in pulvinar ligula interdum.",
          name: "Fulano da silva",
          profileImg: "",
          role: "Cargo na empresa",
          img: "http://localhost:8080/img/postImage.d7e6d514.svg",
        },
        {
          id: 4,
          category: "Categoria",
          date: "27 de jan, 2023",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum ante a elit tristique, in pulvinar ligula interdum.",
          name: "Fulano da silva",
          profileImg: "",
          role: "Cargo na empresa",
          img: "http://localhost:8080/img/postImage.d7e6d514.svg",
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>