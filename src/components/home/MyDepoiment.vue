<template>
    <section class="dep-container">
        <div class="container dep">
            <p>DEPOIMENTOS DE CLIENTES E PARCEIROS</p>
            <Loading v-if="loading"></Loading>
            <MyCardDep 
                :i="index"
                :length="depoiments.length"
                :name="depoiments[index].name" 
                :coment="depoiments[index].testimony" 
                :company="depoiments[index].company" 
                :office="depoiments[index].office" 
                :image-url="depoiments[index].imgUrl"
                @next="index = $event"
                v-else
            />
        </div>
    </section>
</template>

<script>
import MyCardDep from './MyCardDep.vue';
import Loading from "@/components/MyLoading.vue"
export default {
    components:{MyCardDep, Loading},
    data () {
      return {
        index: 0,
      }
    },   
    computed:{
        loading(){
            return this.$store.getters.getIsValid
        },
        depoiments(){
            return this.$store.getters.getDepoiments
        }
    },
    async mounted(){
        await this.$store.dispatch("setInDepoiments")
    }
  }
</script>
<style scoped>

    /* INICIO DO CSS */

    /* ESTILIZAÇÃO CONTAINER DEPOIENTOS */

    .dep-container{
        font-family: 'Inter', sans-serif;
        background-color: #023F5C;
    }

    .dep{
        padding: 50px 80px 30px 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:50px;
    }

    .dep p{
        color: #F7F9FC;
        font-weight: 700;
        text-align: start;
        font-size: 2.25rem;
        letter-spacing: 0.01em;
    }

    /* REPONSIVIDADE */

    @media (max-width:800px){
        .dep p{
            color: #F7F9FC;
            font-weight: 700;
            font-size: 2rem;
            letter-spacing: 0.01em;
        }
    }

    @media (max-width:560px){
        .dep p{
            color: #F7F9FC;
            font-weight: 700;
            font-size: 1.8rem;
            letter-spacing: 0.01em;
        }
    }

    @media (max-width:460px){
        .dep{
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .dep p{
            color: #F7F9FC;
            font-weight: 700;
            font-size: 1.6rem;
            letter-spacing: 0.01em;
        }
    }
</style>
