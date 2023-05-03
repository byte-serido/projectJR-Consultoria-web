<template>
    <div class="container-membros">
        <div class="title-row">
            <span>Membros</span>
            <button @click="onRedirectCreateMember()">
                <p>Novo Membro</p> <fa :icon="['fa', 'add']" style=" color: #ffffff;" size="lg"/>
            </button>
        </div>
        <div class="grid-membros">
            <div  v-for="(member, index) in members" :key="index">
                <Card
                    :name = "member.name"
                    :role = "member.role"
                    :imgURL = "member.imgUrl"
                    :phone= "member.phone"
                    :registration = "member.registration"
                    :description = "member.description"
                />
            </div> 
        </div>
    </div>
</template>
<script>
import Card from "@/components/dashboard/components/member/CardMember.vue"
export default{
    components:{Card},
    data(){
        return{
            members:[
                {
                    name:"Tiago José",
                    role:"TI",
                    imgUrl:"https://urocirurgia.com.br/wp-content/uploads/2021/05/28-05-PedroRomanelliblog.png",
                    phone:99999999992, 
                    registration:98777234234281, 
                    description:"Um bom colega de trabalho, além de um incrivel desenvolverdor de software!"
                },
                {
                    name:"Marilia Maia",
                    role:"RH",
                    imgUrl:"https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg",
                    phone:99999999994, 
                    registration:998777434234272, 
                    description:"Uma boa colega de trabalho, além de um incrivel desenvolvedora de software!"
                },
                {
                    name:"Julia Sousa",
                    role:"Financeiro",
                    imgUrl:"https://dentistaubatuba.com.br/wp-content/uploads/2021/06/o-que-as-pessoas-bonitas-tem-em-comum-2.jpg",
                    phone:99999999993, 
                    registration:99877753423423, 
                    description:"Uma boa colega de trabalho, além de um incrivel desenvolvedora de software!"
                },
                {
                    name:"Julia Sousa",
                    role:"Financeiro",
                    imgUrl:"https://dentistaubatuba.com.br/wp-content/uploads/2021/06/o-que-as-pessoas-bonitas-tem-em-comum-2.jpg",
                    phone:99999999993, 
                    registration:99877753423423, 
                    description:"Uma boa colega de trabalho, além de um incrivel desenvolvedora de software!"
                },
                {
                    name:"Julia Sousa",
                    role:"Financeiro",
                    imgUrl:"https://dentistaubatuba.com.br/wp-content/uploads/2021/06/o-que-as-pessoas-bonitas-tem-em-comum-2.jpg",
                    phone:99999999993, 
                    registration:99877753423423, 
                    description:"Uma boa colega de trabalho, além de um incrivel desenvolvedora de software!"
                },
            ]
        }
    },
    methods:{
       onRedirectCreateMember(){
            return this.$router.push({name:'create-member'});
       } 
    }
}
</script>
<style scoped>
    .container-membros{
        color: black;
        display: flex;
        flex-direction: column;
        font-family: "Inter" , sans-serif;
        gap: 60px;
    }

    .title-row{
        display: flex;
        gap: 40px;
        align-items: center;
    }

    .title-row span{
        color:#023F5C;
        font-size: 1.4rem;
        font-weight: 700;
    }

    .title-row button{
        font-family: "Inter" , sans-serif;
        padding: 10px;
        background-color: #023F5C;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 20px;
        border-radius: 4px;
        border: none;
        color: #ffffff;
        transition: all 400ms ease;
    }

    .title-row button:hover{
        background-color: #013249;
    }

    .title-row button p{
        font-size: 1rem;
        font-weight: 300;
    }

    .grid-membros{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px;
    }
</style>