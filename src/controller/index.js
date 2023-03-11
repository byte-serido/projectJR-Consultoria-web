import { createStore } from 'vuex'

//Modulos
import homex from "@/controller/modules/home"
import aboutx from "@/controller/modules/about"

export default createStore({
  modules: {
    homex,
    aboutx
  }
})
