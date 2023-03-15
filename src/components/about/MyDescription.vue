<template lang="pt-br">
    <section class="description-container">
        <div class="container description">
            <div class="description-text">
                <h1>quem somos</h1>
                <div class="description-subtext">
                    <p>A Project Junior é uma empresa júnior formada por estudantes do curso de Engenharia de Produção da Universidade Federal Rural do Semi-Árido (UFERSA). Como uma empresa júnior, seu objetivo é fornecer soluções de consultoria e projetos para empresas e organizações em diversas áreas, incluindo gestão da qualidade, gestão de processos, planejamento estratégico, gestão de pessoas, entre outras.</p>
                    <p>Os membros da Project Junior são todos estudantes da graduação, que trabalham em projetos sob a supervisão de professores e profissionais experientes da área de Engenharia de Produção. Essa experiência oferece aos alunos a oportunidade de aplicar seus conhecimentos teóricos em projetos práticos, enquanto desenvolvem habilidades importantes, como liderança, trabalho em equipe e comunicação.</p>
                    <p>Além disso, a Project Junior oferece aos seus membros treinamentos e capacitações para que possam se desenvolver profissionalmente e aprimorar suas habilidades técnicas e interpessoais. A empresa júnior também busca promover o empreendedorismo e a inovação entre seus membros e clientes, visando contribuir para o desenvolvimento regional e socioeconômico da região em que está inserida.</p>
                </div>
            </div>
            <img class="img" src="../../assets/about/office.svg" alt="Pessoas felizes trabalhando em um escritório">            
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>
<style scoped>
    h1{
        color: #023F5C;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        text-transform: uppercase;
    }

    p{
        font-family: 'Asap';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: justify;
        letter-spacing: -0.01em;
        color: #000000;
    }

    .description-container{
        background-color: #F7F9FC;
    }

    .description{
        display: flex; 
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px 0px 0px 80px;
        gap: 50px;
    }

    .description-text{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 639px;
        gap: 50px;
    }

    .description-subtext{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    /* Responsividade */
    @media (max-width:1250px) {
        .img{
            display: none;
        }

        .description {
            padding: 80px 80px;
            display: flex;
            flex-direction: column;
        }
    }

    @media(max-width:740px){
        .description{
            padding: 80px 80px;
            display: flex;
            flex-direction: column;
        }
    }

    @media(max-width:640px) {
        .description {
            padding: 80px 30px;
            display: flex;
            flex-direction: column;
        }
    }

    @media (max-width:440px){
        h1{
            font-size: 1.8rem;
            font-weight: 700;
        }
    }

</style>