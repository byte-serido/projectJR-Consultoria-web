<template>
    <section class="dep-container">
        <div class="container dep">
            <p>DEPOIMENTOS DE CLIENTES E PARCEIROS</p>
            <MyCardDep 
                :i="index"
                :length="depoiments.length"
                :user="depoiments[index].name" 
                :coment="depoiments[index].testimony" 
                :company="depoiments[index].company" 
                :office="depoiments[index].office" 
                :image-url="depoiments[index].imgUrl"
                @next="index = $event"
            />
        </div>
    </section>
</template>

<script>
import MyCardDep from './MyCardDep.vue';
export default {
    components:{MyCardDep},
    data () {
      return {
        index: 0,
      }
    },
    computed:{
        depoiments(){
            return this.$store.getters.getDepoiments
        } 
    }
  }
</script>
<style scoped>
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
