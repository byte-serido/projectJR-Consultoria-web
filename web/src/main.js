import App from './App.vue'
import router from './router'
import controller from "./controller/controller";

new Vue({
    //Registrando gerenciador de estado.
    controller,
    //Registrando as rotas no Vue
    router:router,
    render: h => h(App),
  }).$mount('#app')
