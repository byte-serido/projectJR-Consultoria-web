<template lang="pt-br">
    <section class="container-login">
        <div class="container login">
            <img class="img-login" src="@/assets/login/logo-login.svg" alt="Logo da Empresa">
            <div class="card-login">
                <img src="@/assets/login/logo-login-min.svg" alt="Logo da empresa pequena">
                <div class="box-login">
                    <input class="input-login" type="text" placeholder="username">
                    <input class="input-login" type="password" placeholder="password">
                    <router-link class="link-login" to="/" tag="a" active-class="active" exact>
                        Esqueceu sua senha ?
                    </router-link>
                </div>
                <button class="card-button">
                    Entrar
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .container-login{
        font-family: 'Inter', sans-serif;
        background-image: url("@/assets/login/background.svg");
        background-size: cover;
        min-height: 100%;
    }

    .login{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        min-height: 100%;
        padding-left:138px;
        padding-right: 138px;
    }

    .card-login{
        padding: 54px 40px;
        min-width: 379px;
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

    .input-login{
        font-family: 'Inter', sans-serif;
        padding: 16px;
        background-color: white;
        border: solid 1px white;
        border-radius: 4px;
        font-size: 1rem;
        font-weight: 700;
        min-width: 90%;
        position: relative;
        transition: all 400ms ease;
    }

    .input-login:focus{
        border: 1px solid #48B3E2;
        outline: none; 
    }


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
</style>