<template>
    <div class="card">
        <div class="content">
            <q-carousel
                v-model="slide"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                control-color="blue"
                navigation
                arrows
                height="100%"
                class="carrosel text-white shadow-1 rounded-borders"
            >   
                <q-carousel-slide v-for="(depoiment,i) in depoiments" :name="(i+1)" :key="i"  class="card-article">
                    <div class="container-text">
                        <img class="aspas" src="../../assets/dep/icon-aspas.svg" alt="Icone de aspas">
                        <p class="coment">{{ depoiment.testimony}}</p>
                    </div>
                    <div class="person-row">
                        <img class="avatar" src="../../assets/dep/avatar-generic.svg" alt="Avatar">
                        <article class="person-article">
                            <p class="name-person">{{ depoiment.name }}</p>
                            <p class="off-comp">{{ depoiment.office }}/{{ depoiment.company }}</p>
                        </article>
                    </div>
                </q-carousel-slide>
            </q-carousel>
        </div>
        <div class="img-padrao"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            slide:1,
        }
    },
    computed:{
        depoiments(){
            return this.$store.getters.getDepoiments;
        }
    },
}
</script>

<style scoped>
    .card{
        height: 480px;
        min-width: 100%;
        display: flex;
        background-color: #F7F9FC;
        border-radius: 4px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .carrosel{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .card-article{
        padding: 40px 80px;
        display: flex;
        color: #023F5C;
        flex-direction: column;
        gap: 28px;
        align-items:center;
    }

    .coment{
        max-width: 400px;
        font-family: "Asap",sans-serif;
        font-size: 1.375rem;
        line-height: 35.2px;
        letter-spacing: -1%;
        font-weight: 600;
    }

    .person-row{
        min-width:100%;
        display: flex;
        max-width:400px;
        gap: 10px;
        align-items: center;
        justify-content: flex-start;
    }

    .container-text{
        min-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .aspas{
        height: 60px;
        width: 60px;
    }

    .avatar{
        background-size: cover;
        border-radius: 50%;
        border: #4CB8E7 solid 2px;
        height: 60px;
        width: 60px;
    }

    .person-row .avatar{
        height: 64px;
        width: 64px;
        background-size: cover;
        border-radius: 50%;
    }

    .person-article{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .name-person{
        font-family: "Inter",sans-serif;
        font-weight: 600;
        font-size: 1rem;
        letter-spacing: -1%;
        margin: 0;
    }

    .off-comp{
        font-family: "Asap",sans-serif;
        font-weight: 400;
        font-size: 1rem;
        letter-spacing: -1%;
        color: #4CB8E7;
        margin: 0;
    }

    .img-padrao{
        flex: 2;
        min-height: 100%;  
        border-radius: 0px 4px 4px 0px;
        background-image: url("../../assets/dep/img-padrao.svg");
        background-size: cover;
        text-decoration: none;
    }

    .r-button{
        display: flex;
        align-items: center;
        padding-right: 20px;
        padding-top: 10px;
    }

    .r-button:hover{
        filter: invert(48%) sepia(63%) saturate(445%) hue-rotate(152deg) brightness(109%) contrast(91%);
        color: #41A8D3;
        transition: all 200ms ease;
    }

    .r-button button{
        display: flex;
        background: transparent;
        border: none;
        color: #023F5C;
        font-family: "Inter",sans-serif;
        font-size: 1rem;
        font-weight: 600;
        position: relative;
        transition: all 400ms ease;
        cursor: pointer;
    }

    .arrow{
        width: 20px;
        padding: 0;
        box-shadow: none;
    }
    
    @media (max-width:1098px){
        .person-row{
            max-width:100%;
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: flex-start;
        }

        .card-article{
            gap:20px
        }

        .img-padrao{
            display: none;
        }

        .content{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    @media (max-width:800px){
        .img-padrao{
            display: none;
        }

        .card{
            height: 530px;
            
        }

        .card-article{
            gap:20px
        }
    }

    @media (max-width:560px){
        .card{
            height: 540px;
            
        }
        .card-article{
            padding: 40px 50px;
        }

        .container-text{
            gap: 10px;
        }
    }

    @media (max-width:460px){
        .card{
            min-width: 100%;
            height: 400px;
        }

        .card-article{
            padding: 50px 20px;
        }

        .coment{
            font-family: "Asap",sans-serif;
            font-size: 1.1rem;
            line-height: 20px;
            letter-spacing: -1%;
            font-weight: 600;
        }

        .person-row .avatar{
            height: 40px;
            width: 40px;
            background-size: cover;
            border-radius: 50%;
        }
    }
</style>