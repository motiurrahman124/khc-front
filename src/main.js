import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faClinicMedical, faUserDoctor, faEarListen, faMicroscope, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faClinicMedical, faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin, faUserDoctor,faEarListen, faMicroscope, faPhone,faEnvelope)

import './assets/site/lib/owlcarousel/assets/owl.carousel.min.css'
import './assets/site/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'
import './assets/site/css/bootstrap.min.css'
import './assets/site/css/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router,axios)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
