<template lang="pt-br">
    <section class="about-container">
        <div class="container about">
            <article>
                <h2>Conheça a  <span>Project Jr.</span></h2>
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
    .about-container{
        background-color: #023F5C;
    }

    .about{
        flex-direction: row;
        display: flex ;
        justify-content: center;
    }

    article{
        padding: 142px 250px 20px 80px;
    }

    h2{
        color: #F7F9FC;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 3.125rem;
        padding-bottom: 20px;
        
    }

    span{
        color: #4CB8E7;
    }

    img{
        width: 300px;
        height: 300px;
        padding: 50px 171px 50px 0;
    }

    p{
        font-family: 'Asap';
        font-style: normal;
        font-weight: 400;
        font-size: 1.375rem;
    }


    
</style>