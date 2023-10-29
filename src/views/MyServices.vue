<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <MyServiceHero
      :service="services[service].nome"
      :description="services[service].descricao"
    />

    <section class="whats-supplied">
      <div class="container">
        <h2>O que fornecemos?</h2>
        <ol>
          <li>Anote tudo o que você precisa fazer.</li>
          <li>Estabeleça um lugar para estudar ou trabalhar.</li>
          <li>Se programe considerando quanto tempo você gasta nas tarefas.</li>
          <li>Tente deixar o seu quarto sempre organizado</li>
          <li>Também faça pequenas pausas</li>
          <li>Aprenda com seus erros</li>
        </ol>
      </div>
    </section>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/MyFooter.vue';
import MyServiceHero from '@/components/services/MyServiceHero.vue';
import { services } from '@/data';

export default {
  components: { NavBar, Footer, MyServiceHero },
  data() {
    return {
      services,
    };
  },
  props: {
    service: {
      type: String,
    },
  },
};
</script>

<style scoped>
h2,
p {
  margin: 0;
  padding: 0;
}

.whats-supplied {
  background-color: #fff;
  padding: 46px 44px;
}

.whats-supplied .container {
  display: flex;
  flex-direction: column;
  gap: 46px;
}

.whats-supplied h2 {
  color: #023f5c;
  font-size: 3rem;
  font-weight: 700;
  font-family: 'Assistant';
}

.whats-supplied ol {
  color: #2d3648;
  font-family: 'Asap';
  font-size: 1.125rem;
  list-style: decimal;
  padding-left: 1.125rem;
}

@media screen and (min-width: 640px) {
  .whats-supplied {
    padding: 70px 66px;
  }

  .whats-supplied h2 {
    font-size: 3.5rem;
  }
}
</style>
