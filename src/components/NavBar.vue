<template lang="pt-br">
    <section class="navbar-container">
        <div class="container navbar">
            <img src="../assets/nav/logo-bar.svg" alt="Logo da ByteSeridó Jr">
            <div class="menu-bar">
                <router-link class="menu-button" to="/" tag="a" active-class="active" exact>
                    <a>Início</a>
                </router-link>
                <router-link class="menu-button" to="/about" tag="a"  active-class="active">
                    <a>Quem somos</a>
                </router-link>
                <button 
                    class="button-services"
                    id="menu-activator"
                >
                    Serviços
                    <img src="@/assets/nav/arrow-down.svg">
                </button>

                <v-menu transition="scale-transition" activator="#menu-activator" open-on-hover>
                    <v-list>
                        <div
                            class="list-itens"
                            v-for="(item, index) in items"
                            :key="index"
                            :value="index"
                        >
                            <div class="list-item">
                                <router-link class="item" to="" tag="a"  active-class="active">{{ item.title }}</router-link>
                            </div>
                        </div>
                    </v-list>
                </v-menu>
                <router-link class="menu-button" to="/blog" tag="a"  active-class="active">
                    <a>Blog</a>
                </router-link>
                <router-link class="menu-button" to="/contact" tag="a"  active-class="active">
                    <a>Fale conosco</a>
                </router-link>
            </div>
            <button class="nav-button">Agende um Diagnóstico</button>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            items: [
                { title: 'Comunicação' },
                { title: 'Organização' },
                { title: 'Proatividade' },
                { title: 'Reuniões' },
            ],
        }
    }
}
</script>
<style scoped lang="css">

    /* INICIO DO CSS */

    /* ESTILIZAÇÃO DO NAVBAR */
    .navbar-container {
        padding: 25px 80px;
        background-color: #023F5C;
        font-family: 'Assistant', sans-serif;
    }

    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* ESTILIZAÇÃO DOS BOTÕES DE NAVEGAÇÃO */

    .menu-bar{
        display: flex;
        gap: 50px;
    }

    .menu-button{
        background-color: transparent;
        border: none;
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
    }

    /* ESTILIZAÇÃO DO BOTÃO DE AGENDAMENTO */

    .nav-button{
        font-family: 'Assistant', sans-serif;
        color: #FFFFFF;
        background-color: #41A8D3;
        border:1px solid #41A8D3;
        padding: 12px 20px; 
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.01rem;
        border-radius: 6px;
        position: relative;
        transition: all 400ms ease;
        cursor: pointer;
    }

    .nav-button:hover{
        border:1px solid white;
        background-color: transparent;
    }

    /* RESET STYLE */

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
    }

    /* RESPONSIVIDADE */
    
    @media (max-width:1080px){
        .menu-bar{
            display: none;
        }
        .navbar{
            justify-content: center;
        }
        .nav-button{
            display: none;
        }
    }
</style>