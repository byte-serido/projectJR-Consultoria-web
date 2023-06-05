<template>
  <!-- Exibe essa tela quando o servidor estiver em manuntenção ou fora do ar -->
  <template v-if="loading">
    <div class="error-conect">
      <div class="error-text">
        <h1 class="error-title">ERROR 500</h1>
        <div class="error-subtext">
          <p>
            Manutenção no lado do servidor! Agradecemos sua compreensão. Tente
            novamente em algumas horas.
          </p>
        </div>
      </div>
    </div>
  </template>
  <!-- Exibe essa tela quando o servidor estiver funcionando normalmente-->
  <template v-else>
    <router-view v-slot="{ Component }">
      <div class="box">
        <component :is="Component" />
      </div>
    </router-view>
  </template>
</template>

<script>
import { Transition } from "vue";

export default {
  name: "App",
  computed: {
    // verifica se está conectado a API
    loading() {
      return this.$store.getters.getIsConnect;
    },
  },
  // altera o estado para identificar se está conectado ou não
  async mounted() {
    await this.$store.dispatch("setInConnect");
  },
  components: { Transition },
};
</script>

<style>
html,
body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #e9eef2;
}

.box {
  height: 100%;
}

.error-conect {
  font-family: "Asap" sans-serif;
  background-color: #f7f9fc;
  min-height: 100%;
}

.error-text {
  color: #023f5c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
  min-height: 100%;
}

.error-title {
  font-family: "Assistant" sans-serif;
  font-size: 4rem;
  font-weight: 700;
}

.error-subtext {
  display: flex;
  flex-direction: column;
  line-height: 1.2rem;
  font: 1.2rem;
  text-align: center;
  max-width: 500px;
  font-weight: 600;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.6s, transform 0.6s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
