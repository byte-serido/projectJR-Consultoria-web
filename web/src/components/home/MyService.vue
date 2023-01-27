<template lang="pt-br">
    <section class="service-container">
        <div class="container service">
            <article>
                <h2>SERVIÇOS</h2>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</P>
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
        padding: 60px;
    }

    .service article{
        display: flex;
        align-items: center;
        flex-direction: column ;
    }

    h2{
        color: #0A4B69;
        margin-top: 60px;
        margin-bottom: 20px;


        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 120%;

        text-align: center;
        letter-spacing: 0.01em;

        flex: none;
        order: 0;
        flex-grow: 0;
    }

    h3{
        padding: 20px 40px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;

        color: #EDF0F7;
    }

    p{
        color: #1A202C;

        

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;

        text-align: center;
        letter-spacing: -0.01em;
    }


    .box-container{
        flex-wrap: wrap;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 50px 92px 60px;
        gap: 36px;

    }

    .box{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        background: #115A7B;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;


    }

    .p-box{
        max-width: 200px;
        padding-inline: 40px;

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
        padding: 20px 40px 40px;
        
    }

    img{
        margin-top: 40px;
        margin-left: 40px;
        background-color: #EDF0F7;
        padding: 15px;
        border-radius: 20%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
    }
</style>    