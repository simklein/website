import { createApp } from 'vue'
import App from './App.vue'
import AppearTransition from '@/components/AppearTransition'
import './styles/app.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faVuejs, faGithubSquare, faGit, faUnity, faPython, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faCopyright, faHeart } from '@fortawesome/free-regular-svg-icons'
import CSharpIcon from 'vue-material-design-icons/LanguageCsharp.vue'
import BlenderIcon from 'vue-material-design-icons/BlenderSoftware.vue'
import FirebaseIcon from 'vue-material-design-icons/Firebase.vue'
import VSCodeIcon from 'vue-material-design-icons/MicrosoftVisualStudioCode.vue'
import TailwindIcon from 'vue-material-design-icons/Tailwind.vue'
import router from './router'
import Vue3Marquee from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

library.add(faPhone, faLinkedin, faVuejs, faCopyright, faHeart, faGithubSquare, faGit, faUnity, faPython, faInstagramSquare, faAngleDown)

createApp(App).use(router)
  .use(Vue3Marquee)
  .component('AppearTransition', AppearTransition)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('csharp-icon', CSharpIcon)
  .component('blender-icon', BlenderIcon)
  .component('firebase-icon', FirebaseIcon)
  .component('vscode-icon', VSCodeIcon)
  .component('tailwind-icon', TailwindIcon)
  .mount('#app')
