<template>
    <div class="create-member">
        <form class="form">
            <h1>Crie um novo membro!</h1>
            <div class="erros-list">
                <div
                    v-for="error of v$.$errors"
                    :key="error.$uid"
                    class="erros"
                >
                    <strong>{{ error.$message }}</strong>
                </div>
            </div>
            <div class="form-grid">

                <div class="form-item">
                    <span>Nome:</span>
                    <input :class="{error:v$.name.$error,input:!v$.name.$error}" type="text" onkeypress="return isNaN(event.key) || event.key === ' '" v-model="name" placeholder="Digite um nome!">
                </div>
                <div class="form-item">
                    <span>Área de trabalho:</span>
                    <input :class="{error:v$.role.$error,input:!v$.role.$error}" type="text" onkeypress="return isNaN(event.key) || event.key === ' '" v-model="role" placeholder="Digite sua área de trabalho!"/>
                </div>
                <div class="form-item">
                    <span>Celular de contato:</span>
                    <input :class="{error:v$.phone.$error,input:!v$.phone.$error}" v-model="phone" v-mask="['(##) ####-####', '(##) #-####-####']"  placeholder="Digite seu celular!"/>
                </div>
                <div class="form-item">
                    <span>Matrícula:</span>
                    <input :class="{error:v$.registration.$error,input:!v$.registration.$error}" v-model="registration" v-mask="'###########'" placeholder="Digite sua matrícula!"/>
                </div>
                <div class="form-item">
                    <span>Descrição:</span>
                    <textarea :class="{error:v$.description.$error,input:!v$.description.$error}" v-model="description" rows="10" placeholder="O mínimo de caracteres é 30 e o maximo são 600!"/>
                </div>
                
                <div class="form-item">
                    <span>Imagem:</span>
                    <input type="file" @change="onFileSelected">
                    <img :class="{error:v$.imageFile.$error,input:!v$.imageFile.$error}" :src="imageUrl" alt="Imagem de exemplo">
                </div>
            </div>
        </form>
        <div class="form-button" >
            <template v-if="isCreated">
                <button @click="createMember()" type="submit">Salvar</button>
            </template>
            <template v-else>
                <Loading></Loading>
            </template>
            <button @click="cancel()" class="cancel">Cancelar</button>
        </div>
    </div>
</template>
<script>
//Imagem padrão
import img from '@/assets/dashboard/img_examble.svg';
// Imports do firebase
import { storage } from "../../../../firebase";
import {ref,uploadBytes, getDownloadURL} from "firebase/storage";
// Import rotas e axios
import router from '@/router';
import axios from 'axios';
//Vuelidate
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, maxLength } from '@vuelidate/validators';
//Spiner de carregamento
import Loading from "@/components/MySpinnerLoading.vue"
// mascara
import {mask} from 'vue-the-mask';

export default{
    directives: {mask},
    components:{Loading},
    setup(){
        return{
            v$: useVuelidate()
        }
    },

    data(){
        return{
            name:"",
            role:"",
            phone:null,
            registration:null,
            description:"",

            //Config de loading
            isCreated:true,

            //Config de imagem preview
            imageUrl:img,
            imageFile:null,
        }
    },

    validations () {
        return {
            name:{
                required,
                minLength: minLength(4),
                $lazy: true
            },
            role:{
                required,
                minLength: minLength(2),
                $lazy: true,
            },
            phone:{
                required,
                $lazy: true
            },
            registration:{
                required,
                maxLength:maxLength(11),
                minLength: minLength(11),
                $lazy: true
            },
            description:{
                required,
                maxLength:maxLength(600),
                minLength: minLength(30),
                $lazy: true
            },
            imageFile:{
                required,
                $lazy: true,
            }
        }
    },

    methods:{
        // Função para criar um membro
        async createMember(){
            this.isCreated= !this.isCreated
            //Verificando os dados
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect){
                return this.isCreated= !this.isCreated
            } 
            //Carregando image
            const imgAux = await this.uploadImage();
            const member={
                name:this.name,
                role:this.role,
                number:this.phone.toString(),
                registration:this.registration.toString(),
                description:this.description,
                imgUrl:imgAux
            }
            //Requisição para salvar
            await axios.post("https://pjr-api.onrender.com/member/create",member).then(resp =>{
                if(resp.status !== 200){
                    alert("Membro não cadastrado, verifique os dados e tente novamente !!")
                }else{
                    router.push("/membros");
                    alert("Membro cadastrado com sucesso!!")
                }
            }).catch((error)=>{
                return console.log(error);
            })
            this.isCreated= !this.isCreated
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
                    alert("Por favor escolha uma imagem!!")
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

        // Callback Page
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
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 30px;
    }

    span{
        font-size: 1rem;
        color:#023F5C;
        font-weight: 600;
    }

    .form{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .form-grid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 40px;
        width: 100%;
    }

    .form-button{
        display: flex;
        align-items: center;
        gap:32px;
    }

    .form-item{
        display: flex;
        flex-direction: column;
        gap: 1px;
    }

    .form-item .input{
        width: 100%;
        padding: 10px 6px;
        border: #8db5c7 solid 1px;
        border-radius: 4px;
    }

    .form-item .input:focus{
        border: 1px solid #41A8D3;
        outline: none;
    }

    textarea{
        padding: 10px 6px;
        border: #8db5c7 solid 1px;
        border-radius: 4px;
    }

    textarea:focus{
        border: 2px solid #41A8D3;
        outline: none;
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

    img{
        cursor: pointer;
        border-radius: 4px;
        border: #41A8D3 solid 2px;
    }

    .error{
        width: 100%;
        padding: 10px 6px;
        border-radius: 4px;
        border: #ec3824 solid 1px;
    }

    .error:focus{
        border: #ec3824 solid 1px;
        outline: none;
    }

    .erros-list{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }

    .erros{
        padding: 8px;
        border: #ec3824 2px solid;
        background-color: transparent;
        color: #ec3824;
        font-size: 1rem;
        font-weight: bolder;
        border-radius: 10px;
    }

    /* Responsive */
    @media (max-width:1188px){
        .form-grid{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 40px;
        }
    }

    @media (max-width:860px){
        .form{
            width: 100%;
        }
        .form-grid{
            display: flex;
            flex-direction: column;
            gap: 40px;
        }

        .form-item .input{
            width: 100%;
            padding: 10px 6px;
            border: #8db5c7 solid 1px;
            border-radius: 4px;
        }

        textarea{
            padding: 10px 6px;
            border: #8db5c7 solid 1px;
            border-radius: 4px;
        }
    }
</style>