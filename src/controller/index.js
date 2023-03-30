import { createStore } from 'vuex'

//Modulos
import homex from "@/controller/modules/home"
import aboutx from "@/controller/modules/about"
import genericx from "@/controller/modules/generic"
import authx from "@/controller/modules/auth"
export default createStore({
  modules: {
    homex,
    aboutx,
    genericx,
    authx
  }
})
