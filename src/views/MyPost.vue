<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <MyPostDetail :id="mainPost.id" :post="mainPost"></MyPostDetail>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import Footer from "@/components/MyFooter.vue";
import NavBar from "@/components/NavBar.vue";
import MyPostDetail from "@/components/blog/MyPostDetail.vue";
export default {
  data() {
    return {
      mainPost: {
        id: 1,
        category: "Categoria",
        date: "27 de jan, 2023",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum ante a elit tristique, in pulvinar ligula interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Nulla facilisis risus id leo feugiat, a vestibulum urna tristique. Nam tristique, urna vitae lacinia semper, ipsum metus consequat dui, sed fermentum enim libero sed dui. Mauris viverra justo et turpis tincidunt, eget convallis justo tincidunt. Phasellus sed feugiat est, nec congue est. Proin sollicitudin ex eget ex ultrices, nec lacinia risus ultricies. Mauris gravida quam et est elementum, et maximus enim egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ac semper nunc, ut faucibus ex. Sed condimentum pretium quam in pulvinar. In pharetra, tortor at volutpat vulputate, nibh arcu sagittis nisi, at scelerisque nibh tortor sit amet purus.",

          "Donec id elit non dolor condimentum rhoncus. Mauris sodales urna quis metus efficitur, in eleifend tortor laoreet. Nunc auctor lorem ipsum, non rhoncus felis lacinia id. Aenean eleifend nulla sed gravida vestibulum. Sed sagittis magna nec tellus vehicula, at fermentum mi dapibus. Aliquam et suscipit lacus. Donec a lectus ut felis tempor venenatis nec ut tellus. Integer lobortis justo ut venenatis eleifend. Fusce accumsan, libero eu iaculis commodo, enim lacus aliquet odio, id commodo tellus arcu vitae lorem. Sed iaculis, libero sit amet feugiat bibendum, eros sem tincidunt est, ut fringilla enim metus non neque. Mauris sodales, massa nec euismod euismod, ipsum tortor sollicitudin tellus, a sollicitudin mauris lorem eu nisl.",
        ],
        name: "Fulano da silva",
        profileImg: "",
        role: "Cargo na empresa",
      },
    };
  },
  props: {
    id: Number,
  },
  components: { MyPostDetail, Footer, NavBar },
};
</script>
<style>
</style>