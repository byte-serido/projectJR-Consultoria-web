<template lang="pt-br">
    <section class="service-container">
            <div class="container service">
            <h2>SERVIÇOS</h2>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</P>
        </div>

        <div class="box-container">

            <div class="box">
                <img src="../assets/serv/stack.svg">
                <h3>Organização</h3>
                <p class="p-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <a class="a-box">Saiba Mais ></a>
            </div>
            <div class="box">
                <img src="../assets/serv/seta.svg">
                <h3>Estratégia</h3>
                <p class="p-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <a class="a-box">Saiba Mais ></a>
            </div>
            <div class="box">
                <img src="../assets/serv/doc.svg">
                <h3>Finanças</h3>
                <p class="p-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <a class="a-box">Saiba Mais ></a>
            </div>
            <div class="box">
                <img src="../assets/serv/doc.svg">
                <h3>Lorem ipsum</h3>
                <p class="p-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <a class="a-box">Saiba Mais ></a>
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
        width: 1444px;
        height: 575px;
        margin: 0 auto;
    }

    .service{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 20px;
    }

    h2{
        color: #0A4B69;
        width: 405px;
        height: 58px;

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
        margin-top: 10px;
        margin-left: 20px;
        width: 204px;
        height: 28px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;

        color: #EDF0F7;
    }

    p{
        color: #1A202C;

        width: 948px;
        height: 27px;
        margin-top: 20px;

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
        padding: 0px;
        gap: 36px;

        width: 1428px;
        height: 300px;


    }

    .box{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 40px;
        gap: 20px;

        width: 250px;
        height: 250px;

        background: #115A7B;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;

        flex: none;
        order: 3;
        flex-grow: 0;
    }

    .p-box{
        max-width: 200px;
        margin-top: 0px;
        margin-left: 20px;

        width: 204px;
        height: 48px;

        font-family: 'Asap';
        font-style: normal;
        text-align: left;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;

        letter-spacing: -0.01em;

        color: #EDF0F7;
    }

    .a-box{
        cursor: pointer;
        margin-top: 10px;
        margin-left: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        

        width: 195px;
        height: 24px;
    }

    img{
        margin-top: 10px;
        margin-left: 20px;
        background-color: #EDF0F7;
        padding: 15px;
        border-radius: 20%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
    }
</style>    