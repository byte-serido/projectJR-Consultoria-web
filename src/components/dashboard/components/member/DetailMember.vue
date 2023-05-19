<template>
    <div class="container-details">
        <div class="data-details">
            <h1>Detalhes</h1>
            <div class="card-detail">
                <div>
                    <img class="avatar" :src="urlImg" alt="Imagemm Avatar">
                    <input type="file" @change="onFileSelected">
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
            <button @click="updateMember()"><p>Salvar Alterações</p></button>
        </div>
    </div>
</template>
<script>
import { storage } from "../../../../firebase";
import {ref,uploadBytes, getDownloadURL, deleteObject} from "firebase/storage"
import axios from "axios";
// import axios from 'axios';
export default{
    data(){
        return{
            objeto:{},
            imageFile:null,
            urlImg:"",
        }
    },

    methods:{
        // Função para criar um membro
        async updateMember(){
            const imgAux = await this.updateImageMember();
            const member={
                id: this.objeto.id,
                name:this.objeto.name,
                role:this.objeto.role,
                number:this.objeto.phone.toString(),
                registration:this.objeto.registration.toString(),
                description:this.objeto.description,
                imgUrl:imgAux
            }
            await axios.put("https://pjr-api.onrender.com/member/update",member).then(resp =>{
                if(resp.status !== 201){
                    return alert("Membro não alterado, verifique os dados e tente novamente !!")
                }else{
                    return alert("Membro alterado com sucesso!!")
                }
            }).catch((error)=>{
                return console.log(error);
            })
        },
        async updateImageMember(){
            try {
                if (this.imageFile === null) {
                    // Se nenhuma nova imagem for selecionada, retorne a URL existente ou uma string vazia
                    return this.objeto.imgURL || "";
                } else {
                // Exclua a imagem atual
                if (this.objeto.imgURL) {
                    const currentImageRef = ref(storage, this.objeto.imgURL);
                    await deleteObject(currentImageRef);
                }
                    // Faça o upload da nova imagem
                    const storageRef = ref(storage, `member/${this.imageFile.name}`);
                    await uploadBytes(storageRef, this.imageFile);

                    // Obtenha a nova URL da imagem
                    const url = await getDownloadURL(storageRef);
                    console.log("Imagem salva com sucesso. Aqui está a nova URL: " + url);

                    return url.toString();
                }
            } catch (error) {
                console.log(error);
            }
        },
         //Função que seta a imagem na tela antes de salvar
         onFileSelected(event) {
            const file = event.target.files[0];
            this.imageFile = file;
            this.urlImg = URL.createObjectURL(file);
        },
    },

    mounted() {
        const objetoJson = JSON.parse(decodeURIComponent(this.$route.params.user));
        this.objeto = objetoJson;
        this.urlImg = objetoJson.imgURL
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

    .card-detail .avatar{
        height: 400px;
        width: 540px;
        border-radius: 4px;
    }

    h1{
        color:#023F5C;
        font-size: 2rem;
        font-weight: 700;
    }

    h2{
        margin: 0;
        padding: 0;
        color:#023F5C;
        font-weight: 600;
        font-size: 1.6rem;
    }

    p{
        margin: 0;
        padding: 0;
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