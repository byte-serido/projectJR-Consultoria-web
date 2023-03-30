<template>
     <header class="navbar-container">
        <div class="container navbar">
            <div class="profile">
                <div class="avatar">YOU</div>
                <span>{{ username }}</span>
            </div>
            <button class="menu-button" @click="onLogout()">Logout</button>
        </div>
    </header>
</template>
<script>
export default {
    data(){
        return{
            username:""
        }
    },
    methods:{
        onLogout(){
            this.$store.dispatch("logout")
            this.$router.push("/login");
        }
    },
    created(){
        this.username = window.localStorage.getItem('username');
    }
}
</script>
<style scoped>
    .navbar-container {
        padding: 20px 60px;
        background-color: #FFFFFF;
        font-family: 'Assistant', sans-serif;
        border-bottom: #eeebeb 1px solid; 
    }
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .menu-button{
        border-radius: 6px;
        padding: 10px;
        background-color: #023F5C;
        border: #023F5C solid 1px;
        color: #FFFFFF;
        font-size: 1.25rem;
        font-weight: 400;
        font-family: 'Assistant', sans-serif;
        line-height: 1.5rem;
        cursor: pointer;
        box-sizing: border-box;
        position: relative;
        transition: all 400ms ease;
        letter-spacing: -0.01rem;
    }
    .menu-button:hover{
        color: #41A8D3;
        background-color: #FFFFFF;
        border: #41A8D3 1px solid;
    }

    .avatar{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
        color: #023F5C;
        height: 50px;
        width: 50px;
        border: #023F5C 1px solid;
        border-radius: 50px;
    }

    .profile{
        display: flex;
        align-items: center;
        justify-content: center;
        gap:20px;
    }

    .profile span{
        color: #023F5C;
        font-size: 1rem;
    }
</style>