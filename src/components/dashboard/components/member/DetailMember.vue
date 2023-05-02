<template>
    <div class="container-details">
        <div class="data-details">
            <h1>Detalhes</h1>
            <div class="card-detail">
                <div>
                    <img :src="objeto.imgURL" alt="Imagemm Avatar" height="200" width="200">
                </div>
                <div class="card-item">
                    <h2>Nome:</h2>
                    <input type="text" v-model="objeto.name">
                </div>
                <div class="card-item">
                    <h2>Área de trabalho:</h2>
                    <input type="text" v-model="objeto.role"/>
                </div>
                <div class="card-item">
                    <h2>Celular de contato:</h2>
                    <input type="number" v-model="objeto.phone"/>
                </div>
                <div class="card-item">
                    <h2>Matrícula:</h2>
                    <input type="number" v-model="objeto.registration"/>
                </div>
                <div class="card-item">
                    <h2>Descrição:</h2>
                    <textarea v-model="objeto.description" rows="7"/>
                </div>
            </div>
        </div>
        <div class="settings-details">
            <h1>Configurações</h1>
            <button class="remove"><p>Deletar Membro</p></button>
            <button><p>Salvar Alterações</p></button>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            objeto:{}
        }
    },
    mounted() {
        this.objeto = JSON.parse(decodeURIComponent(this.$route.params.user));
    },
}
</script>

<style scoped>
    .container-details{
        padding-bottom: 40px;
        color: black;
        display: flex;
        flex-direction: row;
        font-family: "Inter" , sans-serif;
        gap: 60px;
        width: 100%;
    }

    h1{
        color:#023F5C;
        font-size: 1.4rem;
        font-weight: 700;
    }

    h2{
        color:#023F5C;
        font-weight: 600;
    }

    .data-details{
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .settings-details{
        display: flex;
        flex:1;
        flex-direction: column;
        gap: 32px;
    }

    button{
        max-width: 150px;
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

    button:hover{
        background-color: #013249;
    }

    button p{
        font-size: 1rem;
        font-weight: 300;
    }

    .remove{
        background-color: rgb(189, 3, 3);
    }

    .remove:hover{
        background-color: rgb(139, 3, 3);
    }

    .card-detail{
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .card-item{
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .card-item p{
        font-weight: 500;
    }

    /* inputs */

    /* Retirando setas dos inputs */
    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    
    }
    input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
    }

    .card-item input{
        width: 100%;
        padding: 10px 6px;
        border: #8db5c7 solid 1px;
        border-radius: 4px;
    }

    .card-item input:focus{
        border: 2px solid #41A8D3;
        outline: none;
    }

    textarea{
        width: 100%;
        padding: 10px 6px;
        border: #8db5c7 solid 1px;
        border-radius: 4px;
    }

    textarea:focus{
        border: 2px solid #41A8D3;
        outline: none;
    }
</style>