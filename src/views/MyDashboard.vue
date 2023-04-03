<template>

    <!-- Nav bar superior -->
    <header>

        <!-- Coloca todos em linha -->
        <div class="navbar">

            <!-- // Div que contem tudo do usuario e o menu -->
            <div class="container-profile">
                <button>
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
        <transition>
            <template v-if="isMenu">
                <div>oi</div>
            </template>
        </transition>
        <!-- Conteudo que ficara mudando dependendo da escolha no menu -->
        <div class="container-dashbord">
            <h1>ola</h1>
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

    .dashbord{
        display: flex;
        flex-direction: row;
    }

</style>