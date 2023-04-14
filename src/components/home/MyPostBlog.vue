<template>
    <section class="blog-container">
        <div class="container blog">
            <!-- exibe o componente de blog -->
            <MyBlog 
                :principal="principal"
                :post1="post1"
                :post2="post2"
                :post3="post3"
            />
        </div>
    </section>
</template>

<script>
import MyBlog from './MyBlog.vue';
    export default{
        components:{MyBlog},
        data(){
            return{
                principal:{
                    title: "Postagem 1",
                    corp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    link: "#",
                },
                post1:{
                    title: "Postagem 2",
                    corp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    link: "#",
                },
                post2:{
                    title: "Postagem 3",
                    corp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    link: "#",
                },
                post3:{
                    title: "Postagem 4",
                    corp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    link: "#",
                }
            }
        }
    }
</script>

<style scoped>
    .blog-container{
        background-color: #F7F9FC;
        font-family: 'Inter',sans-serif;
    }
    .blog{
        padding: 60px 80px;
        display: flex;
        flex-direction: column;
    }

    @media(max-width: 460px){
        
        .blog{
            padding: 30px 20px;
        }
    }
</style>
