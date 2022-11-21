<template>
    <header class="pt-10 w-full h-32 md:h-1/6 max-h-52 bg-light z-50 fixed">
        <div class="bg-dsp h-full">
            <nav class="flex flex-row py-0 px-0 h-full w-11/12 m-auto text-dark">
                <!--div class="logo p-3 font-extrabold font">
                    <img class="h-24 w-24" alt="DSP logo" src="@/assets/dsp_logo.svg">
                </div-->
                <!--ul v-show="!mobile" class="navigation flex items-center flex-1 justify-star text-2xl uppercase font-text font-black">
                    <li class="p-3"><router-link class="link" :to="{name: 'home'}">Home</router-link></li>
                    <li class="p-3">/</li>
                    <li class="p-3"><router-link class="link" :to="{name: '404'}">404</router-link></li>
                </ul-->
                <!--div v-show="!mobile" class="translate flex items-center flex-1 justify-start text-2xl uppercase font-text">
                    <div class="flex items-center justify-center">
                        <p class="text-dark font-extrabold">&#127466; &#127475;</p>
                        <p class="text-dark font-semibold">/</p>
                        <p class="text-dark font-semibold hover:text-red">&#127465; &#127466;</p>
                    </div>
                </div-->
                <ul v-show="!mobile" class="navigation flex items-center flex-1 justify-end font-extrabold text-dark">
                    <!--li class="uppercase p-3"><router-link class="link" :to="{name: ''}">Home</router-link></li>
                    <li class="uppercase p-3">/</li>
                    <li class="uppercase p-3"><router-link class="link" :to="{name: ''}">About</router-link></li>
                    <li class="uppercase p-3">/</li>
                    <li class="uppercase p-3"><router-link class="link" :to="{name: ''}">Portfolio</router-link></li>
                    <li class="uppercase p-3">/</li-->
                    <div class="flex py-6 sm:text-xl md:text-2xl">
                        <AppearTransition :duration="1000" :delay="3000">
                            <div class="flex pb-2 border-b-4 border-dark">
                                <AppearTransition :duration="1000" :delay="3000">
                                    <li class="flex items-center px-5">
                                        <a href="https://www.linkedin.com/in/simklein/" class="hover:text-red transform hover:scale-110 transition-transform" target="_blank" title="LinkedIn">
                                          <font-awesome-icon class="h-8 w-8" :icon="['fab', 'linkedin-in']"/>
                                        </a>
                                    </li>
                                </AppearTransition>
                                <!--AppearTransition :duration="1000" :delay="3500">
                                <li class="p-3">
                                    <a href="https://github.com/simklein" class="fa-stack fa-3x" style="--fa-inverse: #FFDEAD" target="_blank" title="Github">
                                        <font-awesome-icon class="rounded-sm transform hover:scale-110 transition-transform fa-inverse fa-stack-1x" :icon="['fas', 'square']"/>
                                        <font-awesome-icon class="rounded-sm hover:text-red transform hover:scale-110 transition-transform fa-stack-1x" :icon="['fab', 'github-square']"/>
                                    </a>
                                </li>
                                </AppearTransition-->
                                <!--AppearTransition :duration="1000" :delay="3500">
                                    <li class="flex items-center px-5">
                                        <a href="/dsp_logo.png" download class="hover:text-red transform hover:scale-110 transition-transform" target="_blank" title="Download CV">
                                            <font-awesome-icon class="h-8 w-8" :icon="['fas', 'file-arrow-down']"/>
                                        </a>
                                    </li>
                                </AppearTransition-->
                            </div>
                        </AppearTransition>
                    </div>
                    <!--li class="social-link p-3">
                        <a href="https://github.com/simklein" target="_blank" title="Instagram">
                            <font-awesome-icon class="bg-light rounded-md h-10 w-10 hover:text-red transform hover:scale-110 transition-transform" :icon="['fab', 'instagram-square']"/>
                        </a>
                    </li-->
                </ul>
                <!--div class="icon">
                    <i @click="toggleMobileNav" v-show="mobile" class="fa-2x text-dark" :class="{ 'rotate-180': mobileNav}">
                        <font-awesome-icon class="" :icon="['fas', 'bars']"/>
                    </i>
                </div-->
                <transition name="mobile-nav">
                    <ul v-show="mobile" class="dropdown-nav font-title font-semibold">
                        <li class="border-l-4 pl-2 border-dark">
                            <a href="https://www.linkedin.com/in/simklein/" class="fa-2x" target="_blank" title="LinkedIn">
                                <font-awesome-icon class="" :icon="['fab', 'linkedin-in']"/>
                            </a>
                        </li>
                        <!--li>
                            <a href="/dsp_logo.png" download class="fa-2x" target="_blank" title="Download CV">
                                <font-awesome-icon class="" :icon="['fas', 'file-arrow-down']"/>
                            </a>
                        </li-->
                    </ul>
                </transition>
            </nav>
        </div>
    </header>
</template>

<script>
import AppearTransition from './AppearTransition.vue'
// @ is an alias to /src
export default {
  name: 'NavHeader',
  data () {
    return {
      mobile: true,
      mobileNav: false,
      windowWidth: null
    }
  },
  created () {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  methods: {
    debug (event) {
      console.log(event.type)
    },
    toggleMobileNav () {
      this.mobileNav = !this.mobileNav
    },
    checkScreen () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobilenav = false
    }
  },
  components: { AppearTransition }
}
</script>

<style>
  .icon-active{
    transform: rotate(180);
  }
</style>
