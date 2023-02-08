<template>
    <section class="dep-container">
        <div class="container dep">
            <p>DEPOIMENTOS DE CLIENTES E PARCEIROS</p>
            <MyCardDep 
                :i="index"
                :length="items.length"
                :name="items[index].name" 
                :coment="items[index].coment" 
                :company="items[index].company" 
                :office="items[index].office" 
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
        items: [
            {
                name: "Fulano da Silva",
                coment: "Trabalhei com a Project Jr, uma empresa com pessoas incriveis e atenciosas!",
                office: "CEO",
                company: "Alura"
            },
            {
                name: "Fulano Maia",
                coment: "Trabalhei com a Project Jr é muito legal!",
                office: "Gerente",
                company: "DIO"
            },
            {
                name: "Fulano Araujo",
                coment: "Trabalhei com a Project Jr, é realizar um sonho!",
                office: "Funcionário",
                company: "Nasa"
            },
        ],
      }
    },
  }
</script>
<style scoped>
    .dep-container{
        font-family: 'Inter', sans-serif;
        background-color: #023F5C;
    }

    .dep{
        padding: 50px 80px 0px 80px;
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