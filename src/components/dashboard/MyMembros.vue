<template>
    <div class="container-membros">
        <div class="title-row">
            <span>Membros</span>
            <button @click="onRedirectCreateMember()">
                <p>Novo Membro</p> <fa :icon="['fa', 'add']" style=" color: #ffffff;" size="lg"/>
            </button>
        </div>
       
        <Loading v-if="isLoading"></Loading>
    
        <div class="grid-membros" v-else >
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
        width: 100%;
        height: 100%;
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
        gap: 20px;
        padding-bottom: 40px;
    }
</style>