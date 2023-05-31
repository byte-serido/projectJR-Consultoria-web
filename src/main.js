import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import controller from './controller'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
// Import do Quasar.
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import {faEye, faEyeSlash, faAdd, faRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faEye,faEyeSlash, faAdd, faRightFromBracket, faBars)

createApp(App)
    .use(Quasar, quasarUserOptions)
    .component('fa', FontAwesomeIcon)
    .use(controller)
    .use(router)
    .mount('#app');
