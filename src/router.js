import controller from '@/controller/index';
import { createRouter, createWebHistory } from 'vue-router';

//Configuração pra renderização tardia, pois os imports só viram quando for realmente necessario.
const Home = () => import('./views/MyHome.vue');
const About = () => import('./views/MyAbout.vue');
const Services = () => import('./views/MyServices.vue');
const Blog = () => import('./views/MyBlog.vue');
const Login = () => import('./views/MyLogin.vue');
const Dashboard = () => import('./views/MyDashboard.vue');
const Contact = () => import('./views/MyContact.vue');
const DashBoardMember = () => import('@/components/dashboard/MyMembros.vue');
const DashBoardAdms = () => import('@/components/dashboard/MyAdms.vue');
const DashBoardUser = () => import('@/components/dashboard/MyUsuarios.vue');
const DetailMember = () =>
  import('@/components/dashboard/components/member/DetailMember.vue');
const DetailUser = () =>
  import('@/components/dashboard/components/user/DetailUser.vue');
const CreateMember = () =>
  import('@/components/dashboard/components/member/CreateMember.vue');
const CreateUser = () =>
  import('@/components/dashboard/components/user/CreateUser.vue');
const DashBoardPosts = () => import('./components/dashboard/MyPostes.vue');
const CreatePost = () => import('./components/dashboard/components/posts/CreatePost.vue');
const DetailPost = () => import('./components/dashboard/components/posts/DetailPost.vue')
const Post = () => import('./views/MyPost.vue');
const ForgotPassword = () => import('./views/MyForgotPassword.vue');
const ResetPassword = () => import('./views/MyResetPassword.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    //Permitindo que todos os parametros da rota sejam passados como atributos
    props: true,
    meta: { transition: 'slide-left' },
  },

  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    //Permitindo que todos os parametros da rota sejam passados como atributos
    props: true,
    meta: { transition: 'slide-left' },
  },

  {
    path: '/about',
    name: 'about',
    component: About,
    //Permitindo que todos os parametros da rota sejam passados como atributos
    props: true,
    meta: { transition: 'slide-left' },
  },

  {
    path: '/services',
    name: 'services',
    component: Services,
    //Permitindo que todos os parametros da rota sejam passados como atributos
    props: true,
    meta: { transition: 'slide-left' },
  },

  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    //Permitindo que todos os parametros da rota sejam passados como atributos
    props: true,
    meta: { transition: 'slide-left' },
  },

  {
    path: '/blog/:id',
    name: 'post',
    component: Post,
    //Permitindo que todos os parametros da rota sejam passados como atributos
    props: true,
    meta: { transition: 'slide-left' },
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
    //Permitindo que todos os parametros da rota sejam passados como atributos
    props: true,
    meta: { requiresGuest: true, transition: 'slide-left' },
  },

  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
    //Permitindo que todos os parametros da rota sejam passados como atributos
    props: true,
    meta: { requiresGuest: true, transition: 'slide-left' },
  },

  {
    path: '/reset-password/:token',
    name: 'reset-password',
    component: ResetPassword,
    //Permitindo que todos os parametros da rota sejam passados como atributos
    props: true,
    meta: { requiresGuest: true, transition: 'slide-left' },
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    //Permitindo que todos os parametros da rota sejam passados como atributos
    props: true,
    meta: { requiresAuth: true, transition: 'slide-left' },
    children: [
      {
        path: '/membros',
        name: 'membros',
        component: DashBoardMember,
        //Permitindo que todos os parametros da rota sejam passados como atributos
        props: true,
        meta: { requiresAuth: true },
      },
      {
        path: '/create-member',
        name: 'create-member',
        component: CreateMember,
        //Permitindo que todos os parametros da rota sejam passados como atributos
        props: true,
        meta: { requiresAuth: true },
      },
      {
        path: '/detail/:user',
        name: 'detail',
        component: DetailMember,
        props: true,
        //Permitindo que todos os parametros da rota sejam passados como atributos
        meta: { requiresAuth: true },
      },
      {
        path: '/adms',
        name: 'adms',
        component: DashBoardAdms,
        //Permitindo que todos os parametros da rota sejam passados como atributos
        props: true,
        meta: { requiresAuth: true, transition: 'slide-left' },
      },
      {
        path: '/usuarios',
        name: 'usuarios',
        component: DashBoardUser,
        //Permitindo que todos os parametros da rota sejam passados como atributos
        props: true,
        meta: { requiresAuth: true },
      },
      {
        path: '/create-user',
        name: 'create-user',
        component: CreateUser,
        //Permitindo que todos os parametros da rota sejam passados como atributos
        props: true,
        meta: { requiresAuth: true },
      },
      {
        path: '/users/:user',
        name: 'detail-user',
        component: DetailUser,
        props: true,
        //Permitindo que todos os parametros da rota sejam passados como atributos
        meta: { requiresAuth: true },
      },
      {
        path: '/posts',
        name: 'Posts',
        component: DashBoardPosts,
        //Permitindo que todos os parametros da rota sejam passados como atributos
        props: true,
        meta: { requiresAuth: true },
      },
      {
        path: '/create-post',
        name: 'create-post',
        component: CreatePost,
        //Permitindo que todos os parametros da rota sejam passados como atributos
        props: true,
        meta: { requiresAuth: true },
      },
      {
        path: '/detail-post/:post',
        name: 'detail-post',
        component: DetailPost,
        //Permitindo que todos os parametros da rota sejam passados como atributos
        props: true,
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Antes das rotas serem realmente redirecionadas é feito a verificação do token
router.beforeEach(async (to, from, next) => {
  await controller.dispatch('checkAuth');
  const isAuthenticated = controller.getters.isAuthenticated;
  //Se não estar autenticado volta paro o login
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
    // Se estar autenticado redireciona para o dashboard
  } else if (to.meta.requiresGuest && isAuthenticated) {
    next('/dashboard');
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length;
  const fromDepth = from.path.split('/').length;
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left';
});

export default router;
