import { createRouter, createWebHistory } from 'vue-router';
import controller from '@/controller/index'
//Configuração pra renderização tardia, pois os imports só viram quando for realmente necessario.
const Home = () => import('./views/MyHome.vue');
const About = () => import('./views/MyAbout.vue');
const Services = () => import('./views/MyServices.vue');
const Blog = () => import('./views/MyBlog.vue');
const Login = () => import('./views/MyLogin.vue');
const Dashboard = () => import('./views/MyDashboard.vue');
const Contact = () => import('./components/home/MyContact.vue');

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
      //Permitindo que todos os parametros da rota sejam passados como atributos
      props:true,
      meta: { transition: 'slide-left' },
    },

    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      //Permitindo que todos os parametros da rota sejam passados como atributos
      props:true,
    },

    {
      path: '/about',
      name: 'about',
      component: About,
      //Permitindo que todos os parametros da rota sejam passados como atributos
      props:true,
      meta: { transition: 'slide-left' },
    },

    {
      path: '/services',
      name: 'services',
      component: Services,
      //Permitindo que todos os parametros da rota sejam passados como atributos
      props:true,
      meta: { transition: 'slide-left' },
    },

    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      //Permitindo que todos os parametros da rota sejam passados como atributos
      props:true,
      meta: { transition: 'slide-left' },
    },

    {
      path: '/login',
      name: 'login',
      component:Login,
      //Permitindo que todos os parametros da rota sejam passados como atributos
      props:true,
      meta: { requiresGuest: true, transition: 'slide-left' },
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component:Dashboard,
      //Permitindo que todos os parametros da rota sejam passados como atributos
      props:true,
      meta: { requiresAuth: true, transition: 'slide-left' }
    },

  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  // Antes das rotas serem realmente redirecionadas é feito a verificação do token
  router.beforeEach(async (to, from, next) => {
    await controller.dispatch('checkAuth')
    const isAuthenticated = controller.getters.isAuthenticated
    //Se não estar autenticado volta paro o login
    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/login')
    // Se estar autenticado redireciona para o dashboard
    } else if (to.meta.requiresGuest && isAuthenticated) {
      next('/dashboard')
    } else {
      next()
    }
  })

  router.afterEach((to, from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  })
  
  export default router
