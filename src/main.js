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


createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(controller)
    .use(router)
    .mount('#app');
