<template lang="pt-br">
    <section class="about-container">
        <div class="container about">
            <article>
                <h2>CONHEÇA A  <span>PROJECT JR.</span></h2>
                <p>Descubra mais sobre nossa Cultura e Equipe</p>
            </article>

            <div>
                <img src="../../assets/footer/logotipo.svg" alt="">
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>

    /* INICIO DO CSS */

    /* ESTILIZAÇÃO DO CONTAINER INTOR ABOUT */

    .about-container{
        background-color: #023F5C;
    }

    .about{
        flex-direction: row;
        display: flex ;
        justify-content: center;
    }

    /* ESTILIZAÇÃO TITULO */

    article{
        padding: 142px 250px 142px 80px;
        
    }

    h2{
        color: #F7F9FC;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 3.1rem;
        line-height: 61px;
        padding-bottom: 20px;
        
    }

    p{
        font-family: 'Asap';
        font-style: normal;
        font-weight: 400;
        font-size: 1.375rem;
        color: #F7F9FC;
        line-height: 160%;
    }

    span{
        color: #4CB8E7;
    }

    /* ESTILIZAÇÃO LOGO PROJECT.JR */

    img{
        width: 300px;
        height: 300px;
        padding: 50px 171px 50px 0;
    }

    /* RESPONSIVIDADE */
    
    @media(max-width:1130PX){
        article{
            padding: 152px 150px 152px 80px;
    }
    }
    
    @media(max-width:1060PX){
        article{
            padding: 152px 100px 152px 80px;
            justify-content: center;
            text-align: center;
    }

        img{
            display: none;
        }

    }
    
    @media(max-width:480PX){
        article{
            padding: 152px 50px 152px 80px;
        }
    }
</style>
