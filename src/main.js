import { createApp } from 'vue'
import App from './App.vue'
import './styles/app.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faVuejs, faGithubSquare, faGit, faUnity, faPython } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCopyright, faHeart } from '@fortawesome/free-regular-svg-icons'

library.add(faPhone, faLinkedin, faVuejs, faCopyright, faHeart, faGithubSquare, faGit, faUnity, faPython)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
