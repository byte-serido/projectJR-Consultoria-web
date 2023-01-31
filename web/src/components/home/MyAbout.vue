<template lang="pt-br">
  <section class="about-container">
    <div class="container about">

      <div class="about-content">

        <section class="content">
          <h2 class="headline">CONHEÇA A <div class="project">PROJECT JR.</div></h2>
          <p class="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
          <button class="button">Conheça nossa História</button>
        </section>

        <section class="wrapper">
          <div class="wrapper-content"><div class="number">+00</div><div class="text">Exemplo</div></div>
          <div class="wrapper-content"><div class="number">+00</div><div class="text">Exemplo</div></div>
          <div class="wrapper-content"><div class="number">+00</div><div class="text">Exemplo</div></div>
          <div class="wrapper-content"><div class="number">+00</div><div class="text">Exemplo</div></div>
        </section>

      </div>      

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
  .about-content{
    /* flex-wrap: wrap; */
    display: flex;
    padding: 80px 120px;
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
    font-size: 56px;
    line-height: 67px;
    letter-spacing: 0.01em;
    color: #41A8D3;
  }

  .text{
    font-family: 'Asap';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.01em;
    color: #FFFFFF;
  }

  .headline{
    color: #F7F9FC;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: 0.01em;
  }

  .body{
    color: #EDF0F7;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
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

  .project{
    color: #41A8D3; 
  }

  /* Responsividade */
  @media (max-width:1098px) {
    .about-content{
      flex-wrap: wrap;
      justify-content: center;
      padding: 20px;
    }
    
    .content{
      border-right: none;
      border-bottom: solid #A0ABC0 1px;
      padding-bottom: 80px;
      padding: 20px;
    }
  }

  @media (max-width:940px) {
    
  }

  @media (max-width:848px) {
    
  }

  @media (max-width:780px) {
    .about-content{
      flex-wrap: wrap;
      padding: 20px;
      justify-content: center;

    }

    .content{
    border-right: none;
    border-bottom: solid #A0ABC0 1px;
    padding-bottom: 80px;
    }

    .headline{
      font-size: 36px;
    }

    .wrapper-content{
      padding: 40px;
    }
  }
</style>