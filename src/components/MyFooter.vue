<template >
    <section class="footer-container">
        <div class="container footer">
            <img class="logotipo" src="../assets/footer/logotipo.svg" alt="Logotipo da Project Jr Consultoria"/>

            <div class="footer-content">
                <div class="navigation">
                    <p class="title">Mapa do Site</p>
                    <div class="navigation_menu">
                        <router-link class="menu-button" to="/" active-class="active" exact>
                            <a>Início</a>
                        </router-link>
    
                        <router-link class="menu-button" to="/about" active-class="active">
                            <a>Quem somos</a>
                        </router-link>
    
                        <router-link class="menu-button" to="/services" active-class="active">
                            <a>Serviços</a>
                        </router-link>
    
                        <router-link class="menu-button" to="/blog" active-class="active">
                            <a>Blog</a>
                        </router-link>
                        
                        <router-link class="menu-button" to="/login" active-class="active">
                            <a>Login</a>
                        </router-link>
                    </div>
                </div>
                <div class="social">
                    <p class="title">Redes Sociais</p>
                    <div class="menu-social">
                        <a href="https://m.facebook.com/100063631264547/" target="_blank">
                            <img src="../assets/footer/facebook.svg" alt="Facebook">
                        </a>
                        <a href="https://instagram.com/projectjrconsultoria?igshid=YmMyMTA2M2Y=" target="_blank">
                            <img src="../assets/footer/instagram.svg" alt="Instagram">
                        </a>
                        <a href="https://www.linkedin.com/company/projectjr/" target="_blank">
                            <img src="../assets/footer/linkedin.svg" alt="LinkedIn">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>
<style scoped>
    .footer-container{
        font-family: 'Inter',sans-serif;
        background-color: #023F5C;
    }

    .footer{
        padding: 86px 80px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .footer-content{
        display: flex;
        flex-direction: row;
        gap: 79px;
    }

    .navigation{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    .title{
        font-size: 1.5rem;
        font-weight: 700;
        color:#EDF0F7;
    }

    .navigation_menu{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .menu-button{
        font-size: 1.125rem;
        font-weight: 300;
        color:#EDF0F7;
        transition: all 400ms ease;
        letter-spacing: -0.01rem;
    }

    .menu-button:hover{
        color: #41A8D3;
    }

    .social{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    .menu-social{
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    a{
        text-decoration: none;
    }

    @media (max-width:1080px){
        .footer{
            padding: 86px 80px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }

    @media (max-width:880px){
        .footer{
            padding: 70px 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        .logotipo{
            height: 140px;
            width: 140px;
        }

        .title{
            font-size: 1.2rem;
            font-weight: 700;
            color:#EDF0F7;
        }

        .menu-button{
            font-size: 1rem;
            font-weight: 300;
            color:#EDF0F7;
            letter-spacing: -0.01rem;
        }
    }

    @media (max-width:680px){
        .footer{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 60px;
        }

        .footer-content{
            display: flex;
            flex-direction: column;
            gap: 60px;
        }

        .logotipo{
            height: 180px;
            width: 180px;
        }
    }

    @media (max-width:480px){
        .footer{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .logotipo{
            height: 160px;
            width: 160px;
        }
    }
</style>