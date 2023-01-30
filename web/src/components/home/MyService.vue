<template lang="pt-br">
    <section class="service-container">
        <div class="container service">
            <article>
                <h2>SERVIÇOS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
            </article>
            <div class="box-container">
                <div class="box">
                    <img src="../../assets/serv/stack.svg">
                    <h3>Organização</h3>
                    <p class="p-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <a class="a-box">Saiba Mais ></a>
                </div>
                <div class="box">
                    <img src="../../assets/serv/seta.svg">
                    <h3>Estratégia</h3>
                    <p class="p-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <a class="a-box">Saiba Mais ></a>
                </div>
                <div class="box">
                    <img src="../../assets/serv/doc.svg">
                    <h3>Finanças</h3>
                    <p class="p-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <a class="a-box">Saiba Mais ></a>
                </div>
                <div class="box">
                    <img src="../../assets/serv/doc.svg">
                    <h3>Lorem ipsum</h3>
                    <p class="p-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <a class="a-box">Saiba Mais ></a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            listService: [
                {
                    title: "ORGANIZAÇÃO",
                }
            ]
        }
    }
}

</script>
<style scoped>
    .service-container{
        background-color: white;
        font-family: 'Inter', sans-serif;
    }

    .service{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px 92px;
        gap: 50px;
        justify-content: space-between;
    }

    .service article{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    h2{
        color: #0A4B69;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 3rem;
        line-height: 120%;
        text-align: center;
        letter-spacing: 0.01em;
    }

    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 140%;
        color: #EDF0F7;
    }

    p{
        color: #1A202C;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 150%;
        text-align: center;
        letter-spacing: -0.01em;
    }


    .box-container{
        flex-wrap: wrap;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 36px;
    }

    .box{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 40px;
        gap: 20px;
        background: #115A7B;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }

    .p-box{
        max-width: 200px;
        font-family: 'Asap';
        font-style: normal;
        text-align: left;
        font-weight: 600;
        font-size: 1rem;
        line-height: 150%;
        letter-spacing: -0.01em;
        color: #EDF0F7;
    }

    .a-box{
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    img{
        background-color: #EDF0F7;
        padding: 0.938rem;
        border-radius: 20%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
    }

    @media (max-width:1080px){
        .box-container{
            
        }
    }

    @media(max-width:880px){
        .service{
            padding: 70px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }
        
            h2{
            color: #0A4B69;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 2.5rem;
            line-height: 120%;
            text-align: center;
            letter-spacing: 0.01em;
        }

            p{
            color: #1A202C;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 1.1rem;
            line-height: 150%;
            text-align: center;
            letter-spacing: -0.01em;
        }

        .box-container{
            
        }
    }

    @media(max-width:680px){
        .service{
            padding: 54px 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .box-container{
            justify-content: center;
        }
        
    }

    @media(max-width:480px){
        .service{
            padding: 38px 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>    