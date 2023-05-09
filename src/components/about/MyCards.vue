<template>
    <section class="cards-container">
        <div class="container cards">
            <header>
                <h2>MISSÃO, VISÃO E VALORES</h2>
            </header>
            <div class="wrapper">
                <div class="card">
                    <figure>
                        <img src="../../assets/about/icon-target.svg" alt="Alvo">
                    </figure>
                    <h3>Missão</h3>
                    <span>
                        Formar, por meio da vivência empresarial, lideranças unidas, inconformadas e comprometidas com a evolução da realidade do empreendedorismo brasileiro.
                    </span>
                </div>
                <div class="card">
                    <figure>
                        <img src="../../assets/about/icon-eye.svg" alt="Alvo">
                    </figure>
                    <h3>Visão</h3>
                    <span>
                        Ser uma empresa do interior em que impacta a vivência da organizações, sendo modelo de inovação e qualidade executando serviços de gestão empresarial com credibilidade e excelência.
                    </span>
                </div>
                <div class="card">
                    <figure>
                        <img src="../../assets/about/icon-star.svg" alt="Alvo">
                    </figure>
                    <h3>Valores</h3>
                    <ul>
                        <li>Compromisso</li>
                        <li>Empatia</li>
                        <li>Qualidade</li>
                        <li>Orgulho de ser GOAT</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        
    }
</script>

<style scoped>
    .cards-container{
        background-color: #F7F9FC;
        font-family: 'Inter', normal;
    }

    h2{
        font-size: 1.6rem;
        font-weight: 600;
    }

    .cards{
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 80px;
        gap: 50px;
    }

    header{
        font-weight: 700;
        font-size: 1.875rem;
        line-height: 150%;
        letter-spacing: -0.01em;
        color: #023F5C;
    }

    .wrapper{
        display: flex;
        justify-content: space-around;
        width: 100%;
        gap: 20px;
    }

    .card{
        width: 360px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
        gap: 15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        transition: transform 0.3s;
        cursor: pointer;
    }

    .card:hover{
        transform: scale(1.1);
    }
    
    .card h3{
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 140%;
        color: #115A7B;
    }

    .card span{
        font-family: 'Asap', normal;
        max-width: 260px;
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 150%;
        text-align: center;
        letter-spacing: -0.01em;
        color: #115A7B;
    }

    .card li{
        font-family: 'Asap', normal;
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 180%;
        text-align: center;
        letter-spacing: -0.01em;
        color: #115A7B;
    }

    @media(max-width:1098px){
        .cards{
            padding: 50px 20px;
        }

        .wrapper{
            gap: 20px;
        }
    }

    @media(max-width: 940px){

        .card span{
            line-height: 130%;
        }

        .card li{
            font-weight: 600;
            font-size: 0.875rem;
            line-height: 200%;
        }
    }

    @media(max-width: 840px){
    
        .wrapper{
            gap: 10px;
        }
        .card{
            padding: 25px;
            gap: 0px;
        }

        .card h3{
            font-size: 1.15rem;
        }

        .card span{
            line-height: 115%;
        }

        .card:hover{
            transform: scale(0.9);
        }
    }

    @media(max-width: 640px){
        
        header{
            font-size: 1.8rem;
            line-height: 120%;
            text-align: center;
        }

        .cards{
            padding-bottom: 70px;
        }
        .wrapper{
            display: flex;
            align-items: center;
            flex-direction: column;
            height: 100%;
        }

        .card{
            gap: 6px;
        }
        .card span{
            line-height: 150%;
        }
        
        
    }

    @media(max-width: 480px){
        .cards{
            padding-bottom: 100px;
        }
    }
</style>
