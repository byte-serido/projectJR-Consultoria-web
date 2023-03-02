<template>
    <section class="cards-container">
        <div class="container cards">
            <header>
                <h2>MISSÃO, VISÃO E VALORES</h2>
            </header>
            <div class="wrapper">
                <div class="card 1">
                    <figure>
                        <img src="../../assets/about/icon-target.svg" alt="Alvo">
                    </figure>
                    <h3>Missão</h3>
                    <span>
                        Formar, por meio da vivência empresarial, lideranças unidas, inconformadas e comprometidas com a evolução da realidade do empreendedorismo brasileiro.
                    </span>
                </div>
                <div class="card 2">
                    <figure>
                        <img src="../../assets/about/icon-eye.svg" alt="Alvo">
                    </figure>
                    <h3>Visão</h3>
                    <span>
                        Ser uma empresa do interior em que impacta a vivência da organizações, sendo modelo de inovação e qualidade executando serviços de gestão empresarial com credibilidade e excelência.
                    </span>
                </div>
                <div class="card 3">
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

    .cards{
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 80px;
        gap: 50px;
        width: 932px;
        height: 385px;
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
        gap: 40px;
        width: 100%;
        height: 290px;
    }

    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
        gap: 15px;
        width: 284px;
        height: 220px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        transition: transform 0.3s;
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
            max-width: 880px;
            padding: 50px 20px;
        }

        .wrapper{
            gap: 20px;
        }

        .card{
            max-width: 250px;
        }
    }

    @media(max-width: 940px){

        .cards{
            max-width: 800px;
        }
        .card{
            max-width: 200px;
            gap: 8px;
        }

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
        .cards{
            max-width: 600px;
        }

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
            transform: scale(1.0);
        }
    }

    @media(max-width: 640px){
        
        header{
            font-size: 1.800rem;
            line-height: 120%;
            text-align: center;
        }

        .cards{
            height: 900px;
            max-width: 80%;
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

    @media(max-width: 560px){
        .cards{
            padding: 60px 20px;
        }
    }
</style>
