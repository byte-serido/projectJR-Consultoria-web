<template lang="">
    <section class="hero-container">
        <div class="container hero">
            <div class="content-hero">
                <article>
                    <p class="headline">Transforme suas <strong>Metas</strong> em <strong>Resultados</strong></p>
                    <p class="body">Ajudamos você a encontrar a melhor forma de otimizar os processos da sua empresa, alcançar os melhores resultados e destacar seu negócio no mercado.</p>
                    <p class="action-call">Fale conosco agora e descubra como podemos ajudá-lo.</p>
                </article>
                <button>
                    Solicite nosso Diagnóstico gratuito
                </button>
            </div>
            <img class="img-hero" src="../../assets/hero/girl_happy.svg" alt="Imagem de uma moça linda e feliz!">
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .hero-container{
        font-family: 'Inter', sans-serif;
        background-image: url("../../assets/hero/background.svg");
        background-size: cover;
    }

    .hero{
        padding: 61px 0px 0px 80px;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-items: center;
    }

    .content-hero{
        padding-bottom: 161px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    .content-hero article{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 40px;
    }

    article .headline{
        color: black;
        font-size: 4.5rem;
        font-weight: 700;
        letter-spacing: 0.01rem;
    }

    article strong{
        color: #41A8D3;
    }

    article .body{
        font-family: 'Asap', sans-serif;
        color: #1A202C;
        max-width: 565px;
        line-height: 35px;
        font-size: 1.375rem;
        font-weight: 400;
        letter-spacing: -0.01rem;
    }

    article .action-call{
        font-family: "Asap",sans-serif;
        font-size: 1.125rem;
        font-weight: 600;
        color: #1A202C;
        letter-spacing: -0.01rem;
    }

    .content-hero button{
        padding: 16px 24px;
        background-color: #0A4B69;
        border: 1px solid #0A4B69;
        color: #FFFFFF;
        border-radius: 6px;
        font-family: "Assistant",sans-serif;
        font-weight: 700;
        font-size: 1.125rem;
        letter-spacing: -0.01rem;
        cursor:pointer;
        box-sizing: border-box;
        position: relative;
        transition: all 400ms ease;
    }

    .content-hero button:hover{
        background-color: white;
        color: #0A4B69;
        border: 1px solid #0A4B69;
    }
</style>