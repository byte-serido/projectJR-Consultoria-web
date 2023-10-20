<template>
    <SpinnerLoading v-if="isLoading"></SpinnerLoading>
    <div class="container-details" v-else>
        <div class="data-details">
            <h1>Detalhes</h1>
            <div class="card-detail">
                <div>
                    <img class="avatar" :src="urlImg === null ? member.imgUrl : urlImg" alt="Imagemm Avatar">
                    <input type="file" @change="onFileSelected">
                </div>
                <div class="card-item">
                    <h2>Nome:</h2>
                    <input type="text"  v-model="member.name" onkeypress="return isNaN(event.key) || event.key === ' '">
                </div>
                <div class="card-item">
                    <h2>Área de trabalho:</h2>
                    <input type="text" onkeypress="return isNaN(event.key) || event.key === ' '" v-model="member.role"/>
                </div>
                <div class="card-item">
                    <h2>Celular de contato:</h2>
                    <input v-mask="['(##) ####-####', '(##) #-####-####']" v-model="member.number"/>
                </div>
                <div class="card-item">
                    <h2>Matrícula:</h2>
                    <input v-mask="'###########'" v-model="member.registration"/>
                </div>
                <div class="card-item">
                    <h2>Descrição:</h2>
                    <textarea v-model="member.description" rows="7"/>
                </div>
            </div>
        </div>
        
        <div class="settings-details" >
            <h1>Configurações</h1>
            <template v-if="!isAlter">
                <SpinnerLoading></SpinnerLoading>
            </template>
            <button @click="updateMember()" v-else><p>Salvar Alterações</p></button>
            <template v-if="!isDeleted">
                <SpinnerLoading></SpinnerLoading>
            </template>
            <button @click="deleteMember()" class="remove" v-else><p>Deletar Membro</p></button>
        </div>
    </div>
</template>
<script>
import { storage } from "../../../../firebase";
import {ref,uploadBytes, getDownloadURL, deleteObject} from "firebase/storage"
import SpinnerLoading from "@/components/MySpinnerLoading.vue"
import router from '@/router';

// import axios from 'axios';
import axios from "axios";
// mascara
import {mask} from 'vue-the-mask';

export default{
    directives: {mask},
    components:{
        SpinnerLoading,
    },
    data(){
        return{
            imageFile:null,
            urlImg:null,

            //Validação para loading
            isAlter:true,
            isDeleted:true
        }
    },

    computed:{
        member(){
            return this.$store.getters.getMember
        },
        isLoading(){
            return this.$store.getters.getValidMember
        }
    },

    methods:{

         //Função que seta a imagem na tela antes de salvar
        onFileSelected(event) {
            const file = event.target.files[0];
            this.imageFile = file;
            this.urlImg = URL.createObjectURL(file);
        },

        // Função para criar um membro
        async updateMember(){
            //loading
            this.isAlter = !this.isAlter
            const member={
                id: this.member.id,
                name:this.member.name,
                role:this.member.role,
                number:this.member.number.toString(),
                registration:this.member.registration.toString(),
                description:this.member.description,
                imgUrl: await this.updateImageMember()
            }
            await axios.put("https://project-jr.onrender.com/member/update",member).then(resp =>{
                if(resp.status !== 201){
                    alert("Membro não alterado, verifique os dados e tente novamente !!")
                }else{
                    alert("Membro alterado com sucesso!!")
                    router.push("/membros");
                }
            }).catch((error)=>{
                return console.log(error);
            })
            this.isAlter = !this.isAlter
        },
        async updateImageMember(){
            try {
                if (this.imageFile === null) {
                    // Se nenhuma nova imagem for selecionada, retorne a URL existente ou uma string vazia
                    return this.member.imgUrl;
                } else {
                    // Exclua a imagem atual
                    if (this.member.imgUrl !== '') {
                        const currentImageRef = ref(storage, this.member.imgUrl);
                        await deleteObject(currentImageRef);
                    }
                    // Faça o upload da nova imagem
                    const storageRef = ref(storage, `member/${this.imageFile.name}`);
                    await uploadBytes(storageRef, this.imageFile);

                    // Obtenha a nova URL da imagem
                    const url = await getDownloadURL(storageRef);

                    return url;
                }
            } catch (error) {
                console.log(error);
            }
        },
        //Fução de delecão
        async deleteMember(){
            this.isDeleted = !this.isDeleted
            await axios.delete("https://project-jr.onrender.com/member/delete",{ data: {id:this.member.id} }).then(resp =>{
                if(resp.status !== 201){
                    return alert("Erro ao deletar membro, verifique os dados e tente novamente !!")
                }else{
                    alert("Membro deletado com sucesso!!")
                    router.push("/membros");
                }
            }).catch((error)=>{
                return console.log(error);
            })
            this.isDeleted = !this.isDeleted
        }
    },

    async mounted() {
        const objetoJson = JSON.parse(decodeURIComponent(this.$route.params.user));
        await this.$store.dispatch('getMemberAction',objetoJson)
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
        height: 25%;
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

    @media (max-width:1188px){
        .container-details{
            padding-bottom: 40px;
            color: black;
            display: flex;
            flex-direction: column;
            font-family: "Inter" , sans-serif;
            gap: 60px;
            width: 100%;
        }
    }

    @media (max-width:610px){
        .card-detail .avatar{
            width: 100%;
            height: 300px;
            border-radius: 4px;
        }
    }
</style>