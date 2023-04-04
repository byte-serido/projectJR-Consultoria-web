<template>

    <!-- Nav bar superior -->
    <header>

        <!-- Coloca todos em linha -->
        <div class="navbar">

            <!-- // Div que contem tudo do usuario e o menu -->
            <div class="container-profile">
                <button @click="isMenu=!isMenu">
                    <img class="menu-icon" src="@/assets/dashboard/icon-list.svg" alt="Icone de menu de opções.">
                </button>
                <div class="avatar"></div>
                <span>{{ username }}</span>
            </div>

            <!-- Button de saida -->
            <button @click="onLogout()">
                <img class="button-icon" src="@/assets/dashboard/icon-log-out.svg" alt="Icone de indicado para sair.">
            </button>
        </div>
    </header>
    <main class="container dashbord">
        <!-- Menu com animação se for ativado -->
        <transition name="slide" mode="out-in">
            <!-- Menu que irá aparecer quando for clicado -->
            <div class="menu" v-if="isMenu">
                <div class="item">
                    <span>Cadastrar Adm</span>
                    <img src="@/assets/dashboard/icon-user-plus.svg" alt="Icone de usuarios">
                </div>
                <div class="item">
                    <span>Listar Adms</span>
                    <img src="@/assets/dashboard/icon-users.svg" alt="Icone Lista de usuarios">
                </div>
                <div class="item">
                    <span>Cadastrar Membro</span>
                    <img src="@/assets/dashboard/icon-user-plus.svg" alt="Icone de Membro">
                </div>
                <div class="item">
                    <span>Listar Membros</span>
                    <img src="@/assets/dashboard/icon-users.svg" alt="Icone Lista de Membro">
                </div>
                <div class="item">
                    <span>Cadastrar Serviço</span>
                    <img src="@/assets/dashboard/icon-briefcase.svg" alt="Icone de Serviços">
                </div>
                <div class="item">
                    <span>Listar Serviço</span>
                    <img src="@/assets/dashboard/icon-layers.svg" alt="Icone de Lista de Serviços">
                </div>
                <div class="item">
                    <span>Cadastrar Depoimentos</span>
                    <img src="@/assets/dashboard/icon-message-circle.svg" alt="Icone de depoimentos">
                </div>
                <div class="item">
                    <span>Listar Depoimentos</span>
                    <img src="@/assets/dashboard/icon-message-circle.svg" alt="Icone de Lista depoimentos">
                </div>
                <div class="item">
                    <span>Criar Post</span>
                    <img src="@/assets/dashboard/icon-layout.svg" alt="Icone de Post">
                </div>
                <div class="item">
                    <span>Listar Posts</span>
                    <img src="@/assets/dashboard/icon-cards.svg" alt="Icone de Listar Posts">
                </div>
            </div>
        </transition>
        <!-- Conteudo que ficara mudando dependendo da escolha no menu -->
        <div class="container-dashbord">
            <article>
                <p>Olá aqui será onde teremos cadastros e listas, uiiiiiii!!!</p>
                <hr>
            </article>
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return{
            isMenu: false,
            username:"",
        }
    },
    methods:{
        onLogout(){
            this.$store.dispatch("logout");
            this.$router.push("/login");
        }
    },
    created(){
        this.username = window.localStorage.getItem('username');
    }
}
</script>
<style scoped>

    /* Nav Bar */
    header{
        font-family: 'Assistant', sans-serif;
    }
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 60px;
        background-color: white;
        border-bottom: 1px solid rgb(230, 227, 227);
    }

    .navbar .container-profile{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .container-profile .avatar{
        background-color: #023F5C;
        display: flex;
        justify-content: center;
        align-items: center;
        color: aliceblue;
        border-radius: 50%;
        height: 38px;
        width: 38px;
    }

    .container-profile span{
        color: #023F5C;
        font-size: 1.2rem;
        font-weight: 700;
    }

    .container-profile button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        position: relative;
        transition: all 400ms ease;
        border-radius: 10%;
    }

    .container-profile button:active{
        background-color: rgb(231, 226, 226);
    }

    .menu-icon{
        height: 32px;
        width: 32px;
    }

    .navbar button{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .button-icon{
        height: 26px;
        width: 26px;
    }

    /* Dashboard */
    .dashbord{
        display: flex;
        flex-direction: row;
        min-height: 100%;
        min-width: 100%;
    }

    /* Menu */
    .menu{
        max-width: 300px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1;
        border-right: 1px solid rgb(230, 227, 227);
    }

    .menu .item{
        padding-left:10px;
        padding-right: 10px;
        padding-top: 22px ;
        padding-bottom:22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 94%;
        cursor: pointer;
        position: relative;
        transition: all 400ms ease;
    }

    .menu .item:hover{
        background-color: rgb(206, 202, 202);
    }

    .menu .item span{
        color: #023F5C;
        font-size: 0.9rem;
        font-weight: 500;
        
    }

    .menu .item img{
        height: 18px;
        width: 18px;
    }

    /* Body */
    .container-dashbord {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        flex: 2;
    }

    .container-dashbord article p{
        color: black;
    }

    /* Animação */
    @keyframes slide-in{
        from {transform: translateX(-300px);}
        to {transform: translateX(0);}
    }
    @keyframes slide-out {
        from {transform: translateX(0);}
        to {transform: translateX(-300px);}
    }
    .slide-enter-active{
        animation: slide-in 0.5s ease;
    }
    .slide-leave-active{
        animation: slide-out 0.5s ease;
    }
</style>