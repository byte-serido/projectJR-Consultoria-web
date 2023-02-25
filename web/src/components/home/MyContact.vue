<template lang="pt-br">
    <section class="contact-container">
        <div class="container contact">
            <div class="contatos">
                <article class="super">
                    <h2 class="msg">Fale Conosco</h2>
                    <p>Tem alguma dúvida sobre nossos serviços ou deseja marcar um diagnóstico gratuito? Deixe uma mensagem através do formulário ao lado ou entre em contato conosco através dos seguintes canais:</p>
                </article>
                <div class="mid">
                    <h3>Contatos</h3>
                    <div class="tel">
                        <article >
                            <h4>Telefone</h4>
                            <p class="cont">(84) 9 9999-9999</p>
                        </article>
                        <article>
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
                        <input class="white" type="text" v-model="msg" placeholder="Escreva uma Mensagem.">
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

    .contatos{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 50px 0px;

        max-width: 587px;
        height: 613px;

    }

    .Msg{
        background-color: #FFFFFF;
        border: 1px solid #000000;
        border-radius: 10px;
        padding: 50px 60px;
    }

    .msg{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        color: #4CB8E7;
        font-size: 2.25rem;
        padding-bottom: 30px;
    }

    .super{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1.125rem;
        padding-bottom: 50px;
        color: #F7F9FC;
    }

    .mid{
        padding-bottom: 50px;
        
    }

    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        color: #4CB8E7;
        padding-bottom: 20px;
    }

    .tel{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
    }

    h4{
        padding-bottom: 5px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
    }

    .cont{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1.375rem;
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
    }

    h5{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 0.275re;
        color: #2D3648;
        padding-bottom: 8px;
    }

    input{
        width: 401px;
        height: 46px;

        padding-left: 10px;
        border: 2px solid #CBD2E0;
        border-radius: 6px;
    }


    .white{
        width: 401px;
        height: 130px;
        
        padding-left: 10px;
        border: 2px solid #cbd2e0;
        border-radius: 6px;
    }

    .white::placeholder{
        font-family: 'Inter';
        font-style: normal;
        font-size: 1rem;
        color: #2D3648;
        
    }


    .form{
        padding-bottom: 19px;
    }

    .buttom{
        cursor: pointer;
        width: 417px;
        height: 40px;
        padding: 0;
        border: none;

        background: #41A8D3;
        border-radius: 6px;
        color: #FFFFFF;
    }

    .Msg1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 2.25rem;
        color: #115A7B;
        padding-bottom: 20px;
    }

    @media(max-width:1300px){
        
        .contact{
            flex-wrap: wrap;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 100px 80px;
            gap: 60px;
            background-color: #023F5C;
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
            height: 54px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            color: #000000;
            padding-bottom: 40px;
        }

        .Msg{
            background-color: #FFFFFF;
            border: 1px solid #000000;
            border-radius: 10px;
            padding: 30px 40px;

        }
    }

    @media(max-width:510px){

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
            padding-bottom: 40px;
        }

        h5{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 0.275re;
            color: #2D3648;
            padding-bottom: 8px;
        }


        .label{
            width: 380px;
            height: 46px;

            padding: 0;
            border: 2px solid #CBD2E0;
            border-radius: 6px;
        }

        .white{
            width: 380px;
            height: 130px;

            padding: 0;
            border: 2px solid #cbd2e0;
            border-radius: 6px;
        }

        .buttom{
            width: 380px;
            height: 40px;
            padding: 0;
            border: none;

            background: #41A8D3;
            border-radius: 6px;
            color: #FFFFFF;
        }
    }

        


    
</style>