<template>
    <div class="card">
        <img :src="imgURL" alt="Imagem do Membro">
        <article>
            <p>{{ name }}</p>
            <p>{{ role }}</p>
            <p>{{ phone }}</p>
        </article>
    </div>
</template>

<script>
export default {
    props:{
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
            type: String,
            required: true,
        },
        description:{
            type: String,
            default:"Um bom membro de eguipe!"
        }
    }
}
</script>

<style scoped>
    .card{
        font-family: "Inter", sans-serif;
        background-color: #ffffff;
        border-radius: 8px;
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .card img{
        height: 200px;
        width: 100%;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }

    .card article{
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
        gap: 8px;
    }

    .card article p{
        font-size: 0.8rem;
        font-weight: 500;
        color: #023F5C;
    }
</style>