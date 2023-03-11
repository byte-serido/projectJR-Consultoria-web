import { createRouter, createWebHistory } from 'vue-router';

//Configuração pra renderização tardia, pois os imports só viram quando for realmente necessario.
const Home = () => import('./views/MyHome.vue');
const About = () => import('./views/MyAbout.vue');
const Services = () => import('./views/MyServices.vue');
const Blog = () => import('./views/MyBlog.vue');
const Contact = () => import('./views/MyContact.vue');

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
      //Permitindo que todos os parametros da rota sejam passados como atributos
      props:true,
    },

    {
      path: '/about',
      name: 'about',
      component: About,
      //Permitindo que todos os parametros da rota sejam passados como atributos
      props:true,
    },

    {
      path: '/services',
      name: 'services',
      component: Services,
      //Permitindo que todos os parametros da rota sejam passados como atributos
      props:true,
    },

    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      //Permitindo que todos os parametros da rota sejam passados como atributos
      props:true,
    },

    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      //Permitindo que todos os parametros da rota sejam passados como atributos
      props:true,
    }

  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router