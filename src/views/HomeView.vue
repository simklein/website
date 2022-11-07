<template>
  <div class="content px-16 md:px-28 py-20 max-w-screen-xl m-auto">
    <section v-show="!mobile" class="hero relative h-screen flex flex-col">
      <div class="flex flex-grow flex-row">
        <div class="hero-text container h-full flex flex-col justify-center text-left text-dark selection:bg-myyellow">
          <AppearTransition :translation="['-100px',0]" :duration="2000">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-title mb-6">
              Hi, I am Simon!
            </h1>
          </AppearTransition>
          <AppearTransition :duration="2000" :delay="1500">
            <h2 class="font-text text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl">
              I like audio, data and learning new things.
            </h2>
          </AppearTransition>
        </div>
        <div class="hero-pic container h-full flex flex-col justify-center w-1/3 selection:bg-myyellow">
          <AppearTransition :duration="2000" :delay="2500">
            <div class="container" @mouseenter="debug" @mouseleave="debug">
              <img class="rounded-full border-4 border-dark transition-transform transform hover:scale-105" src="@/assets/portrait.png" alt="me">
            </div>
          </AppearTransition>
        </div>
      </div>
      <AppearTransition :duration="2000" :delay="3500">
        <div class="bottom-0 flex justify-center pb-24">
          <font-awesome-icon class="bg-light text-red animate-bounce h-10 w-10" :icon="['fas', 'angle-down']"/>
        </div>
      </AppearTransition>
    </section>
    <section v-show="mobile" class="hero-mobile relative h-screen flex flex-col">
      <div class="flex flex-grow flex-col">
        <div class="hero-pic container w-full flex flex-row justify-center h-1/2 selection:bg-myyellow">
          <div class="flex w-4/6 flex-col place-content-end">
            <div class="w-full aspect-square flex">
              <AppearTransition :duration="2000">
                  <img class="mb-6 rounded-full relative border-2 border-dark transition-transform transform hover:scale-105" src="@/assets/portrait.png" alt="me">
              </AppearTransition>
            </div>
          </div>
        </div>
        <div class="hero-text container w-full flex flex-col justify-center text-center text-dark selection:bg-myyellow">
          <AppearTransition :translation="[0, '100px']" :duration="2000" :delay="1500">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-title mb-6">
              Hi, I am Simon!
            </h1>
          </AppearTransition>
          <AppearTransition :duration="2000" :delay="2500">
            <h2 class="font-text text-center text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl">
              I like audio, data and<br/>learning new things.
            </h2>
          </AppearTransition>
        </div>
      </div>
      <AppearTransition :duration="2000" :delay="3500">
        <div class="bottom-0 flex justify-center pb-24">
          <font-awesome-icon class="bg-light text-red animate-bounce h-10 w-10" :icon="['fas', 'angle-down']"/>
        </div>
      </AppearTransition>
    </section>
    <section class="about text-dark font-text text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-justify selection:bg-myyellow pb-20">
      <p>I currently work as a System Engineer in the development of hearing aids at the
        <a class="font-semibold underline decoration-[0.2rem] hover:decoration-[0.3rem] focus:decoration-[0.3rem] decoration-myyellow"
        href="https://www.kind.com/de-de/unternehmen/" target="_blank" title="KIND">KIND Group</a>, where I evaluate signal processing algorithms in the context of medical devices.
      </p>
      <br>
      <p>Last year I also completed my master’s in Electrical Engineering, Information Technology, and Computer Engineering at RWTH Aachen University, where I spent much of my time conducting
        <a class="font-semibold underline decoration-[0.2rem] hover:decoration-[0.3rem] focus:decoration-[0.3rem] decoration-myyellow"
        href="https://www.akustik.rwth-aachen.de/" target="_blank" title="Institut für Hörtechnik und Akustik">research in acoustics</a>.
      </p>
      <br>
      <p>
        During my studies I also worked in the field of
        <a class="font-semibold underline decoration-[0.2rem] hover:decoration-[0.3rem] focus:decoration-[0.3rem] decoration-myyellow"
        href="https://www.muellerbbm.de/" target="_blank" title="Müller-BBM">industrial noise control</a>
        and got a taste of that startup energy when I joined
        <a class="font-semibold underline decoration-[0.2rem] hover:decoration-[0.3rem] focus:decoration-[0.3rem] decoration-myyellow"
        href="https://cityscaper.de/" target="_blank" title="cityscaper">cityscaper</a> on their mission to improve urban planning with AR.
      </p>
      <br>
      <!--p>Recently I find myself interested in ... <span class="italic">(Wo will ich hin?)</span></p>
      <br-->
      <p>In my spare hours, I enjoy various kinds of sportive activities, travelling, dabbling in music production and photography, and constantly finding new things to get excited about!
      </p>
      <br>
    </section>
    <section class="skills text-dark pb-40 selection:bg-myyellow">
      <div class="text-center text-xl sm:text-2xl md:text-3xl font-title font-semibold m-auto">
        <p>Here are some tools I have enjoyed using along the way:</p>
        <div class="my-6 md:m-6 bg-light border-y-4 border-light-2">
          <MarqueeText
            :duration="60"
            :paused="isMarqueePaused"
            @mouseenter="isMarqueePaused=!isMarqueePaused"
            @mouseleave="isMarqueePaused=false"
          >
            <div class="flex flex-row py-0 px-0 m-auto">
              <ul class="flex items-center flex-1">
                <li class="tools-link p-5 md:p-10">
                  <a href="https://python.org" class="hover:text-red" target="_blank" title="Python">
                      <font-awesome-icon class="bg-light rounded-md h-5 w-5 md:h-10 md:w-10 transform hover:scale-125 transition-transform" :icon="['fab', 'python']"/>
                  </a>
                </li>
                <li class="tools-link p-5 md:p-10">
                  <a href="https://de.mathworks.com/products/matlab.html/" class="hover:text-red" target="_blank" title="Matlab">
                    <i class="icon icon-mathworks bg-light rounded-md h-5 w-5 md:h-10 md:w-10 transform hover:scale-125 transition-transform"></i>
                  </a>
                </li>
                <li class="tools-link p-5 md:p-10">
                    <a href="https://code.visualstudio.com/" class="hover:text-red" target="_blank" title="Visual Studio Code">
                        <vscode-icon class="transform hover:scale-125 transition-transform" :size="this.size"/>
                    </a>
                </li>
                <li class="tools-link p-5 md:p-10">
                    <a href="https://git-scm.com/" class="hover:text-red" target="_blank" title="Git">
                        <font-awesome-icon class="bg-light rounded-md h-5 w-5 md:h-10 md:w-10 transform hover:scale-125 transition-transform" :icon="['fab', 'git']"/>
                    </a>
                </li>
                <li class="tools-link p-5 md:p-10">
                  <a href="https://vuejs.org" class="hover:text-red" target="_blank" title="Vue.js">
                      <font-awesome-icon class="bg-light rounded-md h-5 w-5 md:h-10 md:w-10 transform hover:scale-125 transition-transform" :icon="['fab', 'vuejs']"/>
                  </a>
                </li>
                <li class="tools-link p-5 md:p-10">
                    <a href="https://tailwindcss.com/" class="hover:text-red" target="_blank" title="Tailwind CSS">
                        <tailwind-icon class="transform hover:scale-125 transition-transform" :size="this.size"/>
                    </a>
                </li>
                <li class="tools-link p-5 md:p-10">
                    <a href="https://unity.com/" class="hover:text-red" target="_blank" title="Unity">
                        <font-awesome-icon class="bg-light rounded-md h-5 w-5 md:h-10 md:w-10 transform hover:scale-125 transition-transform" :icon="['fab', 'unity']"/>
                    </a>
                </li>
                <li class="tools-link p-5 md:p-10">
                    <a href="https://docs.microsoft.com/de-de/dotnet/csharp/" class="hover:text-red" target="_blank" title="C#">
                      <csharp-icon class="transform hover:scale-125 transition-transform" :size="this.size"/>
                    </a>
                </li>
                <!--li class="tools-link p-10">
                    <a href="https://www.blender.org/" class="hover:text-red" target="_blank" title="Blender">
                        <blender-icon class="transform hover:scale-125 transition-transform" :size="40"/>
                    </a>
                </li-->
                <!--li class="tools-link p-10">
                    <a href="https://firebase.google.com/" class="hover:text-red" target="_blank" title="Firebase">
                        <firebase-icon class="transform hover:scale-125 transition-transform" :size="40"/>
                    </a>
                </li-->
                <li class="tools-link p-5 md:p-10">
                  <a href="https://www.notion.so/product" class="hover:text-red" target="_blank" title="Notion">
                    <i class="icon icon-notion bg-light rounded-md h-5 w-5 md:h-10 md:w-10 transform hover:scale-125 transition-transform"></i>
                  </a>
                </li>
                <li class="tools-link p-5 md:p-10">
                  <a href="https://www.latex-project.org/" class="hover:text-red" target="_blank" title="LaTeX">
                    <i class="icon icon-latex bg-light rounded-md h-5 w-5 md:h-10 md:w-10 transform hover:scale-125 transition-transform"></i>
                  </a>
                </li>
                <li class="tools-link p-5 md:p-10">
                    <a href="https://www.r-project.org/" class="hover:text-red" target="_blank" title="R">
                        <font-awesome-icon class="bg-light rounded-md h-5 w-5 md:h-10 md:w-10 transform hover:scale-125 transition-transform" :icon="['fab', 'r-project']"/>
                    </a>
                </li>
                <li class="tools-link p-5 md:p-10">
                  <a href="https://www.tableau.com/" class="hover:text-red" target="_blank" title="Tableau">
                    <i class="icon icon-tableau bg-light rounded-md h-5 w-5 md:h-10 md:w-10 transform hover:scale-125 transition-transform"></i>
                  </a>
                </li>
                <!--li class="tools-link p-10">
                    SketchUp Logo!!!
                    <a href="https://code.visualstudio.com/" class="hover:text-red" target="_blank" title="Visual Studio Code">
                        <vscode-icon class="transform hover:scale-125 transition-transform" :size="40"/>
                    </a>
                </li-->
              </ul>
            </div>
          </MarqueeText>
        </div>
      </div>
    </section>
    <section class="contact text-dark pb-20 selection:bg-myyellow">
      <p class="text-center text-xl sm:text-2xl md:text-3xl font-title">Feel free to get in touch:</p>
      <div class="my-6 flex flex-row w-full justify-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
        <div class="flex flex-col">
          <div class="flex flex-row justify-start pb-4">
            <a class="flex hover:text-red place-items-center"
              href="https://www.linkedin.com/in/simklein/" target="_blank" title="LinkedIn">
              <font-awesome-icon class="text-red bg-light rounded-md h-6 w-6 pr-4" :icon="['fab', 'linkedin-in']"/>
              <div class="h-full font-semibold">LinkedIn</div>
            </a>
          </div>
          <div class="flex flex-row justify-start pb-4">
            <span class="flex place-items-center">
              <font-awesome-icon class="text-red bg-light rounded-md h-6 w-6 pr-4" :icon="['fas', 'envelope']"/>
              <div class="h-full font-semibold">hello@simonklein.me</div>
            </span>
          </div>
          <!--div class="flex flex-row justify-start">
            <a class="flex hover:text-red place-items-center"
              href="/dsp_logo.png" target="_blank" title="Download CV">
              <font-awesome-icon class="text-red bg-light rounded-md h-6 w-6 pr-4" :icon="['far', 'file-pdf']"/>
              <div class="h-full font-semibold">Download my CV</div>
          </a>
          </div-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppearTransition from '@/components/AppearTransition.vue'
import MarqueeText from 'vue-marquee-text-component'
import { ref } from '@vue/reactivity'

// @ is an alias to /src
export default {
  name: 'HomeView',
  setup () {
    let isMarqueePaused = ref(false)
    return {
      isMarqueePaused
    }
  },
  data () {
    return {
      show: false,
      mobile: false,
      windowWidth: null
    }
  },
  created () {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  computed: {
    size () {
      switch (this.mobile) {
        case true: return 20
        case false: return 40
      }
      return 40
    }
  },
  mounted () {
    // this.$nextTick(this.show = true) // might need this.$nextTick
    this.show = true
  },
  methods: {
    debug (event) {
      console.log(event.type)
    },
    checkScreen () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
        return
      }
      this.mobile = false
    }
  },
  components: { AppearTransition, MarqueeText }
}
</script>
