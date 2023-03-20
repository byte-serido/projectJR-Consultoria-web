import { createStore } from 'vuex'

//Modulos
import homex from "@/controller/modules/home"
import aboutx from "@/controller/modules/about"
import genericx from "@/controller/modules/generic"
export default createStore({
  modules: {
    homex,
    aboutx,
    genericx
  }
})
