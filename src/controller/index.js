import { createStore } from 'vuex';

//Modulos
import aboutx from '@/controller/modules/about';
import authx from '@/controller/modules/auth';
import genericx from '@/controller/modules/generic';
import homex from '@/controller/modules/home';
import memberx from '@/controller/modules/membros';
import userx from '@/controller/modules/users';

export default createStore({
  modules: {
    homex,
    aboutx,
    genericx,
    authx,
    memberx,
    userx,
  },
});
