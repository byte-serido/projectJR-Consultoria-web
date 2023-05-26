<template>
    <div class="create-member">
        <form class="form">
            <h1>Crie um novo membro!</h1>
            <div class="form-grid">
                <div class="form-item">
                    <h2>Nome:</h2>
                    <input type="text" v-model="name">
                </div>
                <div class="form-item">
                    <h2>Área de trabalho:</h2>
                    <input type="text" v-model="role"/>
                </div>
                <div class="form-item">
                    <h2>Celular de contato:</h2>
                    <input type="number" v-model="phone"/>
                </div>
                <div class="form-item">
                    <h2>Matrícula:</h2>
                    <input type="number" v-model="registration"/>
                </div>
                <div class="form-item">
                    <h2>Descrição:</h2>
                    <textarea v-model="description" rows="7"/>
                </div>
            </div>
            <div class="form-item">
                <h2>Imagem:</h2>
                <input type="file" @change="onFileSelected">
                <img :src="imageUrl" alt="Imagem de exemplo" height="300" width="300">
            </div>
        </form>
        <div class="form-button" >
            <button @click="createMember()" type="submit">Salvar</button>
            <button @click="cancel()" class="cancel">Cancelar</button>
        </div>
    </div>
</template>
<script>
import img from '@/assets/dashboard/img_examble.svg';
import { storage } from "../../../../firebase";
import {ref,uploadBytes, getDownloadURL} from "firebase/storage";
import router from '@/router';
import axios from 'axios';
export default{
    data(){
        return{
            name:"",
            role:"",
            phone:null,
            registration:null,
            description:"",

            //Config de imagem preview
            imageUrl:img,
            imageFile:null,
        }
    },

    methods:{
        // Função para criar um membro
        async createMember(){
            const imgAux = await this.uploadImage();
            const member={
                name:this.name,
                role:this.role,
                number:this.phone.toString(),
                registration:this.registration.toString(),
                description:this.description,
                imgUrl:imgAux
            }
            await axios.post("https://pjr-api.onrender.com/member/create",member).then(resp =>{
                if(resp.status !== 200){
                    alert("Membro não cadastrado, verifique os dados e tente novamente !!")
                }else{
                    alert("Membro cadastrado com sucesso!!")
                    router.push("/membros");
                }
            }).catch((error)=>{
                return console.log(error);
            })
        },

        //Função que seta a imagem na tela antes de salvar
        onFileSelected(event) {
            const file = event.target.files[0];
            this.imageFile = file;
            this.imageUrl = URL.createObjectURL(file);
        },

        // Função que faz o upload da imagem no bucket
        async uploadImage() {
            try{
                if(this.imageFile === null){
                    return ""
                }else{
                    const storageRef = ref(storage, `member/${this.imageFile.name}`);
                    await uploadBytes(storageRef, this.imageFile);
                    const url =  await getDownloadURL(storageRef);
                    console.log("Imagem ssalva com sucesso, aqui estar a url: "+ url);
                    return url.toString()
                }
            }catch(error){
                console.error(error)
            } 
        },
        
        cancel(){
            router.push("/membros");
        }
    }
}
</script>

<style scoped>
    .create-member{
        padding-bottom: 40px;
        color: black;
        display: flex;
        flex-direction: column;
        font-family: "Inter" , sans-serif;
        gap: 60px;
        width: 100%;
    }

    h1{
        color:#023F5C;
        font-size: 2rem;
        font-weight: 700;
    }

    h2{
        margin: 0;
        padding: 0;
        font-size: 1.4rem;
        color:#023F5C;
        font-weight: 600;
    }

    .form{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .form-grid{
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 40px;
    }

    .form-button{
        display: flex;
        align-items: center;
        gap:10px;
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

    .cancel{
        background-color: rgb(236, 69, 69);
    }

    .cancel:hover{
        background-color: rgb(179, 44, 44);
    }

    button:hover{
        background-color: #013249;
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

    .form-item{
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .form-item input{
        width: 100%;
        padding: 10px 6px;
        border: #8db5c7 solid 1px;
        border-radius: 4px;
    }

    .form-item input:focus{
        border: 2px solid #41A8D3;
        outline: none;
    }

    textarea{
        min-width: 100%;
        padding: 10px 6px;
        border: #8db5c7 solid 1px;
        border-radius: 4px;
    }

    textarea:focus{
        border: 2px solid #41A8D3;
        outline: none;
    }

    img{
        cursor: pointer;
        border-radius: 4px;
    }

    .error{
        border: #ec3824 solid 1px;
        color: #ec3824;
    }
</style>