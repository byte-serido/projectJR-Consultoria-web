<template>
    <section class="container-login">
        <div class="container login">
            <!-- Imagem maior da logo -->
            <img class="img-login" src="@/assets/login/logo-login.svg" alt="Logo da Empresa">
            <!-- Card para efetuar login -->
            <div class="card-login">
                <!-- Logo da empresa em tamanho menor -->
                <img src="@/assets/login/logo-login-min.svg" alt="Logo da empresa pequena">
                <!-- Espaço para colocar inputs e link para recuperação de senha, feito para centralizar tudo.-->
                <div class="box-login">
                    <input class="input-login" type="text" placeholder="username" v-model="username">
                    <!-- Div especifica para criar um input com icone de visibilidade de senha-->
                    <div class="container-input">
                        <input class="input-login" :type="isVisiblity ? 'text' : 'password'" placeholder="password" v-model="password">
                        <button @click="isVisiblity=!isVisiblity" class="button-eye">
                            <template v-if="isVisiblity">
                                <fa :icon="['fa', 'eye']" style="color: #48b3e2;" size="lg"/>
                            </template>
                            <template v-else>
                                <fa :icon="['fa', 'eye-slash']" style="color: #48b3e2;" size="lg" />
                            </template>
                        </button>
                    </div>
                    <!-- Linke de recuperação de senha utilizando o router-link-->
                    <router-link class="link-login" to="/forgot-password" active-class="active" exact>
                        Esqueceu sua senha ?
                    </router-link>
                </div>
                <!-- Button para para fazer login-->
                <div v-if="loading" class="spinner"></div>
                <button v-else @click="loginSubmit()" :class="isReleased ? 'card-button-disabled' : 'card-button'" :disabled="isReleased">
                    Entrar
                </button>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data(){
        return{
            username:"",
            password:"",
            isVisiblity:false,
            loading: false,
        }
    },
    computed:{
        //Fuction apra indentificar se os campos estão vazio ou não, se estiver retorna um booleam ativando ou não o button de enviar
        isReleased(){
            if(this.username == "" || this.password == ""){
                return true;
            }else{
                return false;
            }
        }
    },

    methods:{
        // Funcionalidade de login
        async loginSubmit(){
            this.loading = true;
            await this.$store.dispatch('login',{username:this.username, password:this.password});
            this.loading = false;
        }
    }
}
</script>

<style scoped>
    .container-login{
        font-family: 'Inter', sans-serif;
        background-image: url("@/assets/login/background.svg");
        background-size: cover;
        height: 100%;
        padding-left:138px;
        padding-right: 138px;
    }

    .login{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .card-login{
        width: 500px;
        padding: 54px 40px;
        background-color: #E1E5ED;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 64px;
    }

    .box-login{
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: center;
        min-width: 100%;
    }

    /* CSS dos inputs */
    .container-input{
        position: relative;
        min-width: 100%;
    }

    .input-login{
        font-family: 'Inter', sans-serif;
        min-width: 100%;
        padding: 16px;
        background-color: white;
        border: solid 1px white;
        border-radius: 4px;
        font-size: 1rem;
        font-weight: 700;
        position: relative;
        transition: all 400ms ease;
    }

    .input-login:focus{
        border: 1px solid #48B3E2;
        outline: none; 
    }

    .button-eye{
        display: flex;
        align-items: center;
        justify-content: center;
        max-height: 100%;
        position:absolute;
        top:0; right:0;
        z-index:10;
        border:none;
        background:transparent;
        outline:none;
        padding: 20px;
        cursor: pointer;
    }

    /* CSS do link */
    .link-login{
        text-decoration: none;
        color: #48B3E2;
        font-size: 1rem;
        letter-spacing: -1%;
        font-weight: 700;
        position: relative;
        transition: all 400ms ease;
    }

    .link-login:hover{
        color: #1e789e;
    }

    /* CSS do button de login */
    .card-button{
        border-radius: 4px;
        background-color: #52B6E3;
        font-family: 'Inter', sans-serif;
        padding: 12px 16px;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 700;
        color: #F5F5F5;
        border: none;
        cursor: pointer;
        position: relative;
        transition: all 400ms ease;
    }

    .card-button:hover{
        background-color: #1e789e;
    }

    .card-button-disabled{
        border-radius: 4px;
        background-color: #9c9b9b;
        font-family: 'Inter', sans-serif;
        padding: 12px 16px;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 700;
        color:  #3f4547;
        border: none;
    }

    .spinner {
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    /* Responsividade */

    @media (max-width:1080px){
        .container-login{
            font-family: 'Inter', sans-serif;
            background-image: url("@/assets/login/background.svg");
            background-size: cover;
            min-height: 100%;
            padding: 40px 30px;
        }
        .img-login{
            display: none;
        }

        .login{
            padding: none;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            min-height: 100%;
        }
    }

    @media (max-width:490px){
        .card-login{
            padding: 54px 40px;
            min-width: 280px;
            background-color: #E1E5ED;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 64px;
        }

        .input-login{
            font-family: 'Inter', sans-serif;
            padding: 16px;
            background-color: white;
            border: solid 1px white;
            border-radius: 4px;
            font-size: 1rem;
            font-weight: 700;
            min-width: 88%;
            position: relative;
            transition: all 400ms ease;
        }
    }
</style>
