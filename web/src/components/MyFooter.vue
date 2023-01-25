<template >
    <section class="footer-container">
        <div class="container footer">
            <img src="../assets/footer/logotipo.svg" alt="Logotipo da Project Jr Consultoria"/>
    
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
    
                        <router-link class="menu-button" to="/contact" active-class="active">
                            <a>Contato</a>
                        </router-link>
                    </div>
                </div>
                <div class="social">
                    <p class="title">Redes Sociais</p>
                    <div class="menu-social">
                        <img src="../assets/footer/facebook.svg" alt="Facebook">
                        <img src="../assets/footer/instagram.svg" alt="Instagram">
                        <img src="../assets/footer/linkedin.svg" alt="LinkedIn">
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
        padding: 86px 75px 86px 255px;
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
        letter-spacing: -0.01rem;
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
</style>