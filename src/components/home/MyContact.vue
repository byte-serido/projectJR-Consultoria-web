
<template lang="pt-br">
    <section class="contact-container">
        <div class="container contact">
            <div class="contatos">
                <article class="super">
                    <h2 class="msg">Fale Conosco</h2>
                    <p class="text">Tem alguma dúvida sobre nossos serviços ou deseja marcar um diagnóstico gratuito? Deixe uma mensagem através do formulário ao lado ou entre em contato conosco através dos seguintes canais:</p>
                </article>
                <div class="mid">
                    <h3>Contatos</h3>
                    <div class="tel">
                        <article class="num">
                            <h4>Telefone</h4>
                            <p class="cont">(84) 9 9999-9999</p>
                        </article>
                        <article class="num">
                            <h4>E-mail</h4>
                            <p class="cont">contato@projectjr.com</p>
                        </article>
                    </div>
                </div>
                <div>
                    <h2 class="msg">Redes Sociais</h2>
                    <div class="img">
                        
                        <a href="https://m.facebook.com/100063631264547/" target="_blank">
                            <img src="../../assets/cont/face.svg" alt="Facebook">
                        </a>

                        <a href="https://instagram.com/projectjrconsultoria?igshid=YmMyMTA2M2Y=" target="_blank">
                            <img src="../../assets/cont/insta.svg" alt="Instagram">
                        </a>

                        <a href="https://www.linkedin.com/company/projectjr/" target="_blank">
                            <img src="../../assets/cont/link.svg" alt="LinkedIn">
                        </a>
                    </div>
                </div>
            </div>
            <div class="Msg">
                <article>
                    <h2 class="Msg1">Deixe uma mensagem</h2>
                    <p class="ent">E entraremos em contato para encontrar a melhor solução para você e seu negócio.</p>
                </article>
                <div>
                    <div class="form">
                        <h5>Nome Completo</h5>
                        <input class="label" type="text" v-model="nome">
                    </div>
                    <div class="form">
                        <h5>E-mail</h5>
                        <input class="label" type="text" v-model="email">

                    </div>
                    <div class="form">
                        <h5>Telefone</h5>
                        <input class="label" type="text" v-model="tel">
                    </div>
                    <div class="form">
                        <h5>Mensagem</h5>
                        <textarea name="mensagem" class="description" rows="7" v-model="description" placeholder="Descreva seu problema e encontraremos a melhor forma para te ajudar."></textarea>
                    </div>
                </div>
                <input class="buttom" type="submit" value="Enviar" v-on:click="submitform">
            </div>
        </div>

    </section>
</template>
<script>
export default {
    data() {
        return {
            nome:'',
            email:'',
            tel:'',
            msg:'',
            description:'',
        }
    },
}
</script>
<style scoped>
    .contact-container{
        background-color: #023F5C;
        font-family: 'Inter', sans-serif;
    }

    .contact{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 100px 80px;
        gap: 60px;
        background-color: #023F5C;
    }

    .super{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1.125rem;
        padding-bottom: 50px;
        color: #F7F9FC;
        gap: 20px;
    }

    .contatos{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 50px 0px;

        max-width: 587px;
        height: 613px;

    }


    .msg{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        color: #4CB8E7;
        font-size: 2.25rem;
        padding-bottom: 30px;
    }

    .Msg{
        background-color: #FFFFFF;
        border: 1px solid #000000;
        border-radius: 10px;
        padding: 50px 60px;
    }

    .Msg1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 2.25rem;
        color: #115A7B;
        padding-bottom: 20px;
        line-height: 130%;
    }

    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        color: #4CB8E7;
        padding-bottom: 20px;
    }

    h4{
        padding-bottom: 5px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 140%;
    }

    h5{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 0.875rem;
        color: #2D3648;
        padding-bottom: 8px;
        line-height: 16px;
    }

    .text{
        line-height: 150%;
    }

    .mid{
        padding-bottom: 50px;
        
    }

    .tel{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
    }

    .num{
        gap: 5px;
        width: 200px;
        height: 74px;
    }

    .cont{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1.375rem;
        line-height: 160%;
    }
    
    .img{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;
    }
    
    .ent{
        width: 417px;
        height: 54px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1.125rem;
        color: #000000;
        padding-bottom: 40px;
        line-height: 150%;
    }

    .form{
        padding-bottom: 19px;
    }
    
    .label{
        width: 394.5px;
        height: 46px;
        padding: 0px 10px 0px 10px;
        border: 2px solid #CBD2E0;
        border-radius: 6px;
    }
    
    .label:focus{
        border: 2px solid #41A8D3;
        outline: none; 
    }

    .description{
        border-radius: 6px;
        border: 2px solid #CBD2E0;
        padding: 10px;
    }

    .description:focus{
        border: 2px solid #41A8D3;
        outline: none;
    }
    
    .buttom{
        cursor: pointer;
        width: 417px;
        height: 40px;
        padding: 0;
        border: none;
        font-size: 0.800rem;
        font-weight: 700;
        background: #41A8D3;
        border-radius: 6px;
        color: #FFFFFF;
        transition: all 400ms ease;
    }

    .buttom:hover{
        background-color: white;
        color: #0A4B69;
        border: 1px solid #0A4B69;
    }
    
    textarea{
        width: 394.5px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #2D3648;
        line-height: 150%;
    }   

    

    /* RESPONSIVIDADE */

    @media(max-width:1300px){
        
        .contact{
            flex-wrap: wrap;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 100px 80px;
            gap: 50px;
            background-color: #023F5C;
    }

        .contatos{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;

            max-width: 587px;
            height: 613px;
        }
    }

    @media(max-width:610px){
        .tel{
            flex-wrap: wrap;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 20px;
        }
    }

    @media(max-width:560px){

        .msg{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            color: #4CB8E7;
            font-size: 2.25rem;
            padding-bottom: 10px;
        }

        .Msg1{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 1.875rem;
            color: #115A7B;
            padding-bottom: 20px;
        }

        .ent{
            width: 417px;
            height: 34px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            color: #000000;
            padding-bottom: 20px;
        }

        .Msg{
            background-color: #FFFFFF;
            border: 1px solid #000000;
            border-radius: 10px;
            padding: 30px 40px;

        }
    }

    @media(max-width:510px){


        .Msg{
            background-color: #FFFFFF;
            border: 1px solid #000000;
            border-radius: 10px;
            padding: 30px 30px;

        }

        .Msg1{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 1.875rem;
            color: #115A7B;
            padding-bottom: 20px;
        }

        .ent{
            width: 380px;
            height: 54px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            color: #000000;
            padding-bottom: 20px;
        }

        .label{
            width: 380px;
            height: 22px;
            padding: 10px;
            border: 2px solid #CBD2E0;
            border-radius: 6px;
        }

        .buttom{
            width: 404px;
            height: 40px;
            padding: 0;
            border: none;
            background: #41A8D3;
            border-radius: 6px;
            color: #FFFFFF;
        }

        textarea{
            width: 380px;
            height: 100px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #2D3648;   
        }
    }


    @media(max-width:480px){
        .contatos{
            height: 620px;
        }

        .Msg1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        color: #115A7B;
        padding-bottom: 10px;
        }

        .label{
            width: 350px;
            height: 22px;
            padding: 10px;
            border: 2px solid #CBD2E0;
            border-radius: 6px;
        }

        .buttom{
            width: 374px;
            height: 40px;
            padding: 0;
            border: none;
            background: #41A8D3;
            border-radius: 6px;
            color: #FFFFFF;
        }

        textarea{
        width: 350px;
        height: 50px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #2D3648;   
        }

        .ent{
        width: 350px;
        height: 54px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        color: #000000;
        padding-bottom: 5px;
    }

    }

    @media(max-width: 450px){

        .contatos{
            height: 650px;
        }

        .msg{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        color: #4CB8E7;
        font-size: 1.75rem;
        padding-bottom: 30px;
    }

    p{
        font-size: 1rem;
    }

    h4{
        padding-bottom: 5px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
    }

    h5{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 0.800rem;
        color: #2D3648;
        padding-bottom: 8px;
        line-height: 16px;
    }

    .cont{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
    }

    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        color: #4CB8E7;
        padding-bottom: 20px;
    }

    .Msg1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.25rem;
        color: #115A7B;
        padding-bottom: 10px;
    }

    .label{
        width: 300px;
        height: 22px;
        padding: 10px;
        border: 2px solid #CBD2E0;
        border-radius: 6px;
    }

    .buttom{
        width: 324px;
        height: 40px;
        padding: 0;
        font-size: 0.800rem;
        border: none;
        background: #41A8D3;
        border-radius: 6px;
        color: #FFFFFF;
    }

    textarea{
        width: 300px;
        height: 50px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: #2D3648;   
    }

    .ent{
        width: 300px;
        height: 30px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        color: #000000;
        padding-bottom: 5px;
    }

    .form{
        padding-bottom: 10px;
    }

    img{
        width: 50px;
        height: 50px;
    }

    .img{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 5px;
    }
    }

    

</style>
