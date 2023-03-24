<template>
    <div class="posts">
        <article>
            <h2>CONHEÇA O NOSSO BLOG!</h2>
            <p>Criamos conteúdos com insights valiosos que podem ajudar você e sua empresa. Confira algumas das nossas publicações abaixo:</p>
        </article>
        <div class="wrapper">
            <div class="principal">
                <div id="principal-img">
                </div>
                <div class="text">
                    <h3>{{ principal.title }}</h3>
                    <p>{{ principal.corp }}</p>
                    <a :href="principal.link">Leia mais <img class="arrow" src="../../assets/blog/icon-arrow-up-right.svg" alt="Arrow"></a>
                </div>
            </div>
            <div class="post-column">
                <div class="post">
                    <div class="post-img">
                    </div>
                    <div class="content">
                        <h3>{{ post1.title }}</h3>
                        <p>{{ post1.corp }}</p>
                        <a :href="post1.link">Leia mais <img class="arrow" src="../../assets/blog/icon-arrow-up-right.svg" alt="Arrow"></a>
                    </div>
                </div>
                <div class="post">
                    <div class="post-img">
                        
                    </div>
                    <div class="content">
                        <h3>{{ post2.title }}</h3>
                        <p>{{ post2.corp }}</p>
                        <a :href="post2.link">Leia mais <img class="arrow" src="../../assets/blog/icon-arrow-up-right.svg" alt="Arrow"></a>
                    </div>
                </div>
                <div class="post">
                    <div class="post-img">
                        
                    </div>
                    <div class="content">
                        <h3>{{ post3.title }}</h3>
                        <p>{{ post3.corp }}</p>
                        <a :href="post3.link">Leia mais <img class="arrow" src="../../assets/blog/icon-arrow-up-right.svg" alt="Arrow"></a>
                    </div>
                </div>
            </div>
        </div>
        <a :href="link" id="last">Veja todos os posts do nosso Blog <img class="right-arrow" src="../../assets/blog/icon-arrow-right-circle.svg" alt="Arrow"></a>
    </div>
</template>
<script>
    export default{
        props:{

            principal:{
                type: Object,
            },
            post1:{
                type: Object,
            },
            post2:{
                type: Object,
            },
            post3:{
                type: Object,
            },
        }
    }
</script>

<style scoped>
    .posts{
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    article{
        color: #023F5C;
    }

    article h2{
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 140%;
    }

    article p{
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 140%;
    }

    .wrapper{
        display: flex;
        gap: 22px;
    }

    .principal{
        min-width: 50%;
        height: 560px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 10px;
        background-color: #F7F9FC;
    }

    #principal-img{
        height: 300px;
        background: url(../../assets/blog/desk-lamp-svgrepo-com.svg);
        background-size: cover;
    }   

    .text{
        display: flex;
        flex-direction: column;
        height: 250px;
        padding: 30px 30px;
        line-height: 140%;
        gap: 15px;
    }

    .text h3{
        color: #22749A;
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 140%;
    }

    .text p{
        color: #4A5468;
        font-size: 1.25rem;
        line-height: 140%;
        font-weight: 400;
    }

    .text a{
        color: #1A688A;
        font-size: 1.25rem;
        transition: all 400ms ease;
    }

    .text a:hover, .content a:hover, #last:hover{
        filter: invert(48%) sepia(63%) saturate(445%) hue-rotate(152deg) brightness(109%) contrast(91%);
    }

    .arrow{
        width: 25px;
        height: 16px;
    }

    .post-column{
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 520px;
        height: 560px;
    }

    .post{
        display: flex;
        align-items: center;
        padding: 15px 16px;
        gap: 32px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }

    .post-img{
        width: 500px;
        height: 150px;
        background-image: url(../../assets/blog/desk-lamp-svgrepo-com.svg);
        background-color: #1A688A;
        background-size: cover;
        border-radius: 10px;
    }

    .content{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .content h3{
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 140%;
        color: #22749A;
    }

    .content p{
        font-size: 0.875rem;
        line-height: 140%;
        color: #4A5468;
    }

    .content a{
        font-weight: 400;
        font-size: 0.90rem;
        line-height: 140%;
        color: #1A688A;
        transition: all 400ms ease;
    }

    #last{
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 140%;
        color: #1A688A;
        cursor: pointer;
        display: flex;
        width: fit-content;
        transition: all 400ms ease;
    }

    .right-arrow{
        padding-left: 5px;
    }

    @media (max-width:1098px){
        .principal{
            min-width: 40%;
        }

        #principal-img{
            height: 230px;
        }
        .text{
            min-width: 90%;
            gap: 20px;
        }
        
        .post-column{
            max-width: 450px;
        }
        .content h3{
            font-size: 1.10rem;
            line-height: 100%
        }
        .content p{
            line-height: 100%
        }
    }

    @media(max-width:940px){
        .text{
            gap: 10px;
        }

        .text h3{
            font-size: 1.50rem;
        }
        .post-column{
            min-width: 300px;
            display: flex;
            justify-content: space-between;
        }
        .post-img{
            height: 120px;
        }
        .content h3{
            font-size: 1rem;
            line-height: 100%
        }
        .content p{
            font-size: 0.800rem;
            line-height: 100%
        }
    }

    @media(max-width:840px){
        .text{
            min-width: 80%;
        }
        .text h3{
            font-size: 1.30rem;
        }

        .text p{
            font-size: 1rem;
        }
        .text a{
            font-size: 1rem;
        }
        .post-column{
            min-width: 250px;
            gap: 5px;
        }

        .post{
            padding: 10px 16px;
            height: 150px;
        }

        .content{
            gap: 5px;
        }

        .post-img{
            height: 100px;
        }

    }

    @media (max-width: 640px){
        .text h3{
            font-size: 1.50rem;
        }

        .text p {
            font-size: 1.25rem;
        }

        .text a {
            font-size: 1.25rem;
        }
        .wrapper{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .post-column{
            max-width: 506px;
        }
    }

    @media(max-width:560px){
        article h2{
            font-size: 2rem;
        }
        
        article p{
            font-size: 1.20rem;
        }
        .principal{
            height: 460px;
        }

        #principal-img{
            height: 150px;
        }
        
        .text{
            gap: 15px;
        }
        .text h3{
            font-size: 1.50rem;
        }

        #last{
            font-size: 1.10rem;
        }

        .right-arrow{
            width: 25px;
        }
    }

    @media(max-width: 460px){
        .text{
            gap: 20px;
        }
        .text h3{
            font-size: 1.30rem;
        }

        .text p{
            font-size: 1.10rem;
        }

        .text a{
            font-size: 1rem;
        }

        .post-column{
            height: 600px;
        }

        .post{
            height: 180px;
        }

        #last{
            font-size: 1rem;
        }

        .right-arrow{
            padding-top: 2px;
            width: 20px;
        }
    }
</style>
