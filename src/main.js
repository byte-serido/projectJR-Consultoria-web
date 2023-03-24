import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import controller from './controller'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import {faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faEye,faEyeSlash)

// Vuetify
import { createVuetify } from 'vuetify'
// Vuetify
import * as components from 'vuetify/components'
// Vuetify
import * as directives from 'vuetify/directives'



const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(vuetify)
    .use(controller)
    .use(router)
    .mount('#app');
