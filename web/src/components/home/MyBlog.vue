<template>
    <section class="teste-container">
        <div class="container teste">
            <article>
                <h2>CONHEÇA O NOSSO BLOG!</h2>
                <p>Criamos conteúdos com insights valiosos que podem ajudar você e sua empresa. Confira algumas das nossas publicações abaixo:</p>
            </article>
            <div class="wrapper">
                <div class="principal">
                    <div id="test">

                    </div>
                    <div class="text">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#">Leia mais</a>
                    </div>
                </div>
                <div class="post-column">
                    <div class="post">
                        <div class="placeholder">

                        </div>
                        <div class="content">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a href="#">Leia mais</a>
                        </div>
                    </div>
                    <div class="post">
                        <div class="placeholder">
                            
                        </div>
                        <div class="content">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a href="#">Leia mais</a>
                        </div>
                    </div>
                    <div class="post">
                        <div class="placeholder">
                            
                        </div>
                        <div class="content">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a href="#">Leia mais</a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" id="last">Veja todos os posts do nosso blog</a>
        </div>
    </section>
</template>
<script>
    export default{
        
    }
</script>

<style scoped>
.teste-container{
    background-color: #F7F9FC;
    font-family: 'Inter',sans-serif;
}
.teste{
    padding: 60px 87px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

article{
    color: #023F5C;
}

article h2{
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 140%;
}

article p{
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 140%;
}

.wrapper{
    display: flex;
    gap: 22px;
}

.principal{
    max-width: 750px;
    height: 560px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
    background-color: #F7F9FC;
}

#test{
    width: 600px;
    height: 280px;
    background-color: #1A688A;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}   

.text{
    display: flex;
    flex-direction: column;
    width: 540px;
    height: 230px;
    padding: 30px 30px;
    line-height: 140%;
    gap: 15px;
}

.text h3{
    color: #22749A;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 140%;
}

.text p{
    color: #4A5468;
    font-size: 1.25rem;
    line-height: 140%;
    font-weight: 400;
}

.text a{
    color: #1A688A;
    font-size: 1.25rem;
}

.post-column{
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 596px;
    height: 560px;
}

.post{
    display: flex;
    align-items: center;
    padding: 15px 16px;
    gap: 32px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.placeholder{
    width: 450px;
    height: 150px;
    background-color: #1A688A;
    border-radius: 10px;
}

.content{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.content h3{
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 140%;
    color: #22749A;
}

.content p{
    font-size: 0.875rem;
    line-height: 140%;
    color: #4A5468;
}

.content a{
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 140%;
    color: #1A688A;
}

#last{
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 140%;
    color: #1A688A;
}
</style>
