<template>
    <div class="card">
        <article class="card-article">
            <div class="container-text">
                <img class="aspas" src="../../assets/dep/icon-aspas.svg" alt="Icone de aspas">
                <p class="coment">{{ coment }}</p>
            </div>
            <div class="person-row">
                <img class="avatar" src="../../assets/dep/avatar-generic.svg" alt="Avatar">
                <article class="person-article">
                    <p class="name-person">{{ name }}</p>
                    <p class="off-comp">{{ office }}/{{ company }}</p>
                </article>
            </div>
            <div class="r-button">
                <button @click="next">Proximo ></button>
            </div>
        </article>
        <div class="img-padrao">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            index: this.i
        }
    },
    methods:{
        next(){
            if (this.index === this.length) {
                this.index = 0;
                this.$emit('next', this.index)
            }else{
                this.index++
                this.$emit('next', this.index)
            }
        }
    },
    props:{
        length:{
            type: Number,
            required: true,
        },

        i:{
            type: Number,
            required: true,
            default: 0
        },
        name:{
            type: String,
        },
        coment:{
            type: String,
        },
        office:{
            type: String,
        },
        company:{
            type: String,
        },
    },
}
</script>

<style scoped>
    .card{
        height: 469px;
        min-width: 100%;
        display: flex;
        background-color: #F7F9FC;
        align-items: center;
        border-radius: 20px;
    }
    .card-article{
        padding: 40px 80px;
        display: flex;
        flex: 1;
        color: #023F5C;
        flex-direction: column;
        gap: 50px;
        align-items: flex-start;
    }

    .coment{
        max-width: 294px;
        font-family: "Asap",sans-serif;
        font-size: 1.375rem;
        line-height: 35.2px;
        letter-spacing: -1%;
        font-weight: 600;
    }

    .person-row{
        min-width:100%;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: flex-start;
    }

    .container-text{
        min-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .aspas{
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
    }

    .off-comp{
        font-family: "Asap",sans-serif;
        font-weight: 400;
        font-size: 1rem;
        letter-spacing: -1%;
        color: #4CB8E7;
    }

    .img-padrao{
        flex: 2;
        min-height: 100%;  
        border-radius: 0px 20px 20px 0px;
        background-image: url("../../assets/dep/img-padrao.svg");
        background-size: cover;
        text-decoration: none;
    }

    .r-button{
        min-width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .r-button button{
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

    .r-button button:hover{
        color: #41A8D3;
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
    }

    @media (max-width:800px){
        .img-padrao{
            display: none;
        }

        .card-article{
            gap:20px
        }
    }

    @media (max-width:560px){
        .card-article{
            padding: 40px 50px;
        }

        .container-text{
            gap: 20px;
        }
    }

    @media (max-width:460px){
        .card{
            min-width: 90%;
            height: 300px;
            padding:36px 26px ;
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