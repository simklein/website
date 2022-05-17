<template>
  <div class="app bg-light  min-h-screen relative ">
    <NavHeader/>
    <!--router-view/-->
    <div class="content px-28 py-20 max-w-screen-xl m-auto">
        <section class="hero relative h-screen">
          <div class="hero-text container h-full flex flex-col justify-center text-dark text-6xl">
            <h1 class="font-bold mb-6">
              Hi, I'm
              <span class="font-extrabold"> Simon</span>!
            </h1>
            <h2>
              I <font-awesome-icon class="text-5xl" :icon="['far', 'heart']"/> audio, data and learning new things.
            </h2>
          </div>
        </section>
        <section class="about items-center text-dark text-3xl text-justify">
          <p>I currently work in the development of hearing aids at
            <a class="font-semibold underline decoration-[0.2rem] motion-safe:transition-all motion-safe:duration-100 hover:decoration-[0.4rem] focus:decoration-[0.4rem] decoration-myyellow"
            href="https://www.kind.com/de-de/hoeren/" target="_blank" title="KIND">KIND</a>.
          </p>
          <br>
          <p>I also recently completed both my bachelor’s and master’s in Electrical Engineering, Information Technology, and Computer Engineering at RWTH Aachen where I spent much of my time conducting
            <a class="font-semibold underline decoration-[0.2rem] motion-safe:transition-all motion-safe:duration-100 hover:decoration-[0.4rem] focus:decoration-[0.4rem] decoration-myyellow"
            href="https://www.akustik.rwth-aachen.de/" target="_blank" title="Institut für Hörtechnik und Akustik">research in acoustics</a>.
          </p>
          <br>
          <p>
            During my studies I also worked in the field of
            <a class="font-semibold underline decoration-[0.2rem] motion-safe:transition-all motion-safe:duration-100 hover:decoration-[0.4rem] focus:decoration-[0.4rem] decoration-myyellow"
            href="https://www.muellerbbm.de/" target="_blank" title="Müller-BBM">industrial noise control</a>
            and got a taste of that startup energy when I joined
            <a class="font-semibold underline decoration-[0.2rem] motion-safe:transition-all motion-safe:duration-100 hover:decoration-[0.4rem] focus:decoration-[0.4rem] decoration-myyellow"
            href="https://cityscaper.de/" target="_blank" title="cityscaper">cityscaper</a> on their mission to improve urban planning with AR.
          </p>
          <br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat excepturi consequuntur odit sed laborum ipsam est veniam ex asperiores, esse unde quae commodi ut dolor. Eum eaque vero maiores quam.</p>
          <br>
          <div class="text-center bor">
            <p>Here are some tools I enjoy using:</p>
            <ul class="flex items-center flex-1 justify-center">
              <li class="tools-link p-10">
                <a href="https://python.org" target="_blank" title="Python">
                    <font-awesome-icon :icon="['fab', 'python']"/>
                </a>
              </li>
              <li class="tools-link p-10">
                  <a href="https://git-scm.com/" target="_blank" title="Git">
                      <font-awesome-icon class="bg-light rounded-md h-10 w-10" :icon="['fab', 'git']"/>
                  </a>
              </li>
              <li class="tools-link p-10">
                <a href="https://vuejs.org" target="_blank" title="Vue.js">
                    <font-awesome-icon :icon="['fab', 'vuejs']"/>
                </a>
              </li>
              <li class="tools-link p-10">
                  <a href="https://unity.com/" target="_blank" title="Unity">
                      <font-awesome-icon class="bg-light rounded-md h-10 w-10" :icon="['fab', 'unity']"/>
                  </a>
              </li>
            </ul>
          </div>
          <br>
          <p>In my spare hours, I enjoy various kinds of sportive activities, dabbling in music production and photography, and constantly finding new things to learn!
          </p>
        </section>
      </div>
    <SimpleFooter/>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
import SimpleFooter from './components/SimpleFooter.vue'

export default {
  name: 'App',
  components: {
    NavHeader,
    SimpleFooter
  }
}

</script>

<style lang="scss">

</style>
