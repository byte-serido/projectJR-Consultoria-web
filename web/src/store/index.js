import { createStore } from 'vuex'

//Modulos
import homex from "@/store/modules/home"
import aboutx from "@/store/modules/about"

export default createStore({
  modules: {
    homex,
    aboutx
  }
})
