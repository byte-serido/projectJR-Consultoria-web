<template>
    <section class="blog-container">
        <div class="container blog">
            <MyBlog 
                :title="items[0].title"
                :corp="items[0].corp"
                :link="items[0].link"
                :lamp ="items[0].lamp"
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
                items:[
                    {
                        title: "Postagem 1",
                        corp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        link: "#",
                        lamp: "web/src/assets/blog/desk-lamp-svgrepo-com.svg"
                    }
                ]
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
        padding: 60px 61px;
        display: flex;
        flex-direction: column;
    }

    @media(max-width: 460px){
        
        .blog{
            padding: 30px 20px;
        }
    }
</style>
