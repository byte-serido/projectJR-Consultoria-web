<template>

    <div class="card" @click="onDetailRedirect()">
        <img :src="imgURL" alt="Imagem do Membro">
        <article>
            <p>Nome: {{ name }}</p>
            <p>Área: {{ role }}</p>
            <p>Contato: {{ phone }}</p>
        </article>
    </div>
  
</template>

<script>
export default {
    data(){
        return{
           idMember:this.id
        }
    },
    props:{
        id:{
            type: String,
            required:true,
        },
        name:{
            type:String,
            required: true,
        },
        role:{
            type: String,
            required: true,
        },
        imgURL:{
            type: String,
            default: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
        },
        phone:{
            type: Number,
            required: true,
        },
        registration:{
            type: Number,
            required: true,
        },
        description:{
            type: String,
            default:"Um bom membro de eguipe!"
        }
    },

    methods:{
        onDetailRedirect(){
            const objeto = encodeURIComponent(JSON.stringify(this.idMember));
            return this.$router.push({ name: 'detail', params: { user: objeto}})
        }
    }
}
</script>

<style scoped>
    .card{
        width: 260px;
        max-height: 400px;
        font-family: "Inter", sans-serif;
        background-color:#FFFFFF;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        cursor: pointer;
    }

    .card img{
        height: 240px;
        width: 100%;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }

    .card article{
        width: 100%;
        display: flex;
        gap: 4px;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
    }

    .card article p{
        margin: 0;
        font-size: 1rem;
        font-weight: 700;
        color:#023F5C;
    }

    a{
        text-decoration: none;
        color: #023F5C;
    }
</style>