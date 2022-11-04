import { createApp } from 'vue'
import App from './App.vue'
import AppearTransition from '@/components/AppearTransition'
import './styles/app.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faLinkedinIn, faVuejs, faGithubSquare, faGit, faUnity, faPython, faInstagramSquare, faRProject } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faAngleDown, faSquareFull, faFile, faBars, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faCopyright, faHeart, faFilePdf } from '@fortawesome/free-regular-svg-icons'
import CSharpIcon from 'vue-material-design-icons/LanguageCsharp.vue'
import BlenderIcon from 'vue-material-design-icons/BlenderSoftware.vue'
import FirebaseIcon from 'vue-material-design-icons/Firebase.vue'
import VSCodeIcon from 'vue-material-design-icons/MicrosoftVisualStudioCode.vue'
import TailwindIcon from 'vue-material-design-icons/Tailwind.vue'
import router from './router'
import Vue3Marquee from 'vue3-marquee' // obsolete
import 'vue3-marquee/dist/style.css' // obsolete
import MarqueeText from 'vue-marquee-text-component'

library.add(faEnvelope, faRProject, faLinkedin, faLinkedinIn, faVuejs, faCopyright, faHeart, faGithubSquare, faGit, faUnity, faPython, faInstagramSquare, faAngleDown, faSquareFull, faFile, faFilePdf, faBars, faFileArrowDown)

createApp(App).use(router)
  .use(Vue3Marquee) // obsolete
  .component('AppearTransition', AppearTransition)
  .component('marquee-text', MarqueeText)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('csharp-icon', CSharpIcon)
  .component('blender-icon', BlenderIcon)
  .component('firebase-icon', FirebaseIcon)
  .component('vscode-icon', VSCodeIcon)
  .component('tailwind-icon', TailwindIcon)
  .mount('#app')
