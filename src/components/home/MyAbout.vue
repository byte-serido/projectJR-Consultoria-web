<template lang="pt-br">
  <section class="about-container">
    <div class="container about">

      <section class="content">
        <h2 class="headline">CONHEÇA A <strong>PROJECT JR.</strong></h2>
        <p class="body">A Project Junior é uma empresa júnior formada por estudantes do curso de Engenharia de Produção da Universidade Federal Rural do Semi-Árido (UFERSA). Como uma empresa júnior, seu objetivo é fornecer soluções de consultoria e projetos para empresas e organizações em diversas áreas, incluindo gestão da qualidade, gestão de processos, planejamento estratégico, gestão de pessoas, entre outras...</p>
        <router-link to="/about" tag="a"  active-class="active">
          <button class="button">Conheça nossa História</button>
        </router-link>
      </section>

      <section class="wrapper">
        <div class="wrapper-content"><div class="number">+00</div><div class="text">Exemplo</div></div>
        <div class="wrapper-content"><div class="number">+00</div><div class="text">Exemplo</div></div>
        <div class="wrapper-content"><div class="number">+00</div><div class="text">Exemplo</div></div>
        <div class="wrapper-content"><div class="number">+00</div><div class="text">Exemplo</div></div>
      </section>

    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .about-container{
    background-color:#023F5C;
  }

  .about{
    display: flex;
    padding: 80px 80px;
    gap: 40px;
  }
  
  .content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    max-width: 50%;
    border-right: solid #A0ABC0 1px;
    padding-right: 80px;
  }

  .wrapper{
    /* flex-wrap: wrap; */
    display: grid;
    grid-template-columns: 200px 200px;
    padding: 20px;
    gap: 40px;
    max-width: 50%;
  }

  .number{
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 700;
    font-size: 3.5rem;
    line-height: 67px;
    letter-spacing: 0.01em;
    color: #41A8D3;
  }

  .text{
    font-family: 'Asap';
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 27px;
    letter-spacing: -0.01em;
    color: #FFFFFF;
  }

  .headline{
    color: #F7F9FC;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 58px;
    max-width: 405px;
    letter-spacing: 0.01em;
  }

  .body{
    color: #EDF0F7;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 27px;
    letter-spacing: -0.01em;
  }

  .button{
    font-family: 'Assistant', sans-serif;
    color: #FFFFFF;
    background-color: #41A8D3;
    border:1px solid #41A8D3;
    padding: 12px 20px; 
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: -0.01rem;
    border-radius: 6px;
    position: relative;
    transition: all 400ms ease;
    cursor: pointer;  
  }

  .button:hover{
    border:1px solid white;
    background-color: transparent;
  }

  strong{
    color: #41A8D3; 
  }

  /* Responsividade */
  @media (max-width:1098px) {

    .about{
      /* flex-wrap: wrap; */
      display: flex;
      padding: 80px 80px;
      gap: 40px;
    }

    .headline{
      max-width: none;
    }
    
    .content{
      border-right: none;
      border-bottom: none;
      padding-bottom: none;
      padding: none;
      max-width: 100%;
      padding-right: 0px;
    }

    .body{
      color: #EDF0F7;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 27px;
      letter-spacing: -0.01em;
    }

    .wrapper{
      display: none;
    }
    
  }

  @media (max-width:848px) {
    .about{
      padding: 60px 20px;
    }

    .content{
      border-right: none;
      border-bottom: none;
      padding-bottom: none;
      padding: none;
      max-width: 100%;
      padding-right: 0px;
    }

    .headline{
      font-size: 2.25rem;
      color: #F7F9FC;
      line-height: 38px;
    }

    .wrapper-content{
      padding: 40px;
    }
  }
</style>