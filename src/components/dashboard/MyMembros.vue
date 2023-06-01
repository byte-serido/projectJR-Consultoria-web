<template>
    <Loading v-if="isLoading"></Loading>
    <div class="container-membros" v-else>
        <div class="title-row">
            <span>Membros</span>
            <button @click="onRedirectCreateMember()">
                <p>Novo Membro</p> <fa :icon="['fa', 'add']" style=" color: #ffffff;" size="lg"/>
            </button>
        </div>
       
        <div class="grid-membros">
            <div  v-for="(member, index) in members" :key="index">
                <Card
                    :id = "member.id"
                    :name = "member.name"
                    :role = "member.role"
                    :imgURL = "member.imgUrl"
                    :phone= "member.number"
                    :registration = "member.registration"
                    :description = "member.description"
                />
            </div> 
        </div>
    </div>
</template>
<script>
import Card from "@/components/dashboard/components/member/CardMember.vue"
import Loading from "@/components/MySpinnerLoading.vue"
// import Loading from "@/components/dashboard/MySpinnerLoading.vue"
export default{
    components:{Card, Loading},
    methods:{
       onRedirectCreateMember(){
            return this.$router.push({name:'create-member'});
       } 
    },
    computed:{
        members(){
            return this.$store.getters.getMembers
        },

        isLoading(){
            return this.$store.getters.getValid
        }
    },
    async mounted(){
        await this.$store.dispatch('getMembers');
    }
}
</script>
<style scoped>

    p{
        margin: 0;
        padding: 0;
    }
    .container-membros{
        color: black;
        display: flex;
        flex-direction: column;
        font-family: "Inter" , sans-serif;
        gap: 60px;
        height: 100%;
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
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 40px;
        gap: 20px;
    }
    
    /* Responsive */
    @media (max-width:860px){
        .container-membros{
            gap: 40px;
        }

        .title-row{
            gap: 30px;
        }
        .title-row span{
            font-size: 1.2rem;
        }
        .title-row button{
            padding: 6px;
            gap: 16px;
        }

        .title-row button p{
            font-size: 1rem;
            font-weight: 300;
        }

        .grid-membros{
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 30px;
            gap: 16px;
        }
    }

    @media (max-width:640px){
        .container-membros{
            gap: 36px;
        }

        .title-row{
            gap: 28px;
        }
        .title-row span{
            font-size: 1.1rem;
        }
        .title-row button{
            padding: 6px;
            gap: 16px;
        }

        .title-row button p{
            font-size: 1rem;
            font-weight: 300;
        }

        .grid-membros{
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 28px;
            gap: 16px;
        }
    }

    @media (max-width:440px){
        .container-membros{
            gap: 30px;
        }

        .title-row{
            gap: 26px;
        }
        .title-row span{
            font-size: 1rem;
        }
        .title-row button{
            padding: 6px;
            gap: 16px;
        }

        .title-row button p{
            font-size: 1rem;
            font-weight: 300;
        }

        .grid-membros{
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 26px;
            gap: 16px;
        }
    }
</style>