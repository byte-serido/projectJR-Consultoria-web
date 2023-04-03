<template>
    <!-- Nav bar superior -->
    <header>
        <!-- Coloca todos em linha -->
        <div class="navbar">
            <!-- // Div que contem tudo do usuario e o menu -->
            <div class="container-profile">
                <div>
                    <img src="" alt="">
                </div>
                <div class="avatar"></div>
                <span>{{ username }}</span>
            </div>

            <!-- Button de saida -->
            <button @click="onLogout()">
                <img src="" alt="">
            </button>
        </div>
    </header>
    <main class="container dashbord">
        <transition>
            <template v-if="isMenu">
                <div>oi</div>
            </template>
        </transition>
        
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
        height: 40px;
        width: 40px;
    }

    .container-profile span{
        color: #023F5C;
        font-size: 1rem;
        font-weight: 600;
    }

    .dashbord{
        display: flex;
        flex-direction: row;
    }

</style>