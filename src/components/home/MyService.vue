<template>
    <section class="service-container">
        <div class="container service">
            <article>
                <h2>SERVIÇOS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
            </article>
            <Loading v-if="loading"></Loading>
            <div class="box-container" v-else>
                <div class="box" v-for="service in services" :key="service.id">
                    <img src="../../assets/serv/stack.svg">
                    <h3>{{service.name}}</h3>
                    <p class="p-box">{{service.description}}</p>
                    <a class="a-box">Saiba Mais <img class="arrow" src="../../assets/serv/icon-arrow-up-right.svg" alt="Seta"></a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Loading from "@/components/MyLoading.vue"
export default {
    components:{Loading},
    computed:{
        loading(){
            return this.$store.getters.getIsValid
        },
        services(){
            return this.$store.getters.getServices
        }
    },
    async mounted(){
        await this.$store.dispatch("setInServices")
    }
}

</script>
<style scoped>

    /* INICIO DO CSS */

    /* ESTILIZAÇÃO CONTAINER SERVICE */
    
    .service-container{
        background-color: white;
        font-family: 'Inter', sans-serif;
    }

    .service{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px 92px;
        gap: 50px;
        justify-content: space-between;
    }

    /* ESTILIAÇÃO TITULO DA SEÇÃO */

    .service article{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    h2{
        color: #0A4B69;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 3rem;
        line-height: 120%;
        text-align: center;
        letter-spacing: 0.01em;
    }

    p{
        color: #1A202C;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 150%;
        text-align: center;
        letter-spacing: -0.01em;
    }

    /* ESTILIZAÇÃO DAS BOX */

    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 140%;
        color: #EDF0F7;
    }

    .box-container{
        flex-wrap: wrap;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 36px;
    }

    .box{
        height: 240px;
        width: 246px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 40px;
        gap: 20px;
        background: #115A7B;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }

    .p-box{
        max-width: 200px;
        font-family: 'Asap';
        font-style: normal;
        text-align: left;
        font-weight: 600;
        font-size: 1rem;
        line-height: 150%;
        letter-spacing: -0.01em;
        color: #EDF0F7;
    }

    .a-box{
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        transition: all 400ms ease;
        cursor: pointer;
    }

    .arrow{
        background-color: transparent;
        padding: 0;
        box-shadow: none;
    }

    .a-box:hover{
        filter: invert(48%) sepia(63%) saturate(445%) hue-rotate(152deg) brightness(109%) contrast(91%);
        color:  #41A8D3;
    }

    /* ESTILIZAÇÃO DA IMG */
    
    img{
        background-color: #EDF0F7;
        padding: 0.938rem;
        border-radius: 20%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
    }

    /* RESPONSIVIDADE */

    @media(max-width:880px){
        .service{
            padding: 70px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }
        
            h2{
            color: #0A4B69;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 2.5rem;
            line-height: 120%;
            text-align: center;
            letter-spacing: 0.01em;
        }

            p{
            color: #1A202C;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 1.1rem;
            line-height: 150%;
            text-align: center;
            letter-spacing: -0.01em;
        }

        
    }

    @media(max-width:680px){
        .service{
            padding: 54px 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .box-container{
            justify-content: center;
        }
        
    }

    @media(max-width:480px){
        .service{
            padding: 38px 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>    
