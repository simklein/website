<template>
  <div class="app bg-light  min-h-screen relative ">
    <NavHeader/>
    <!--router-view/-->
    <div class="content px-28 py-20 max-w-screen-xl m-auto">
        <section class="hero relative h-screen">
          <div class="hero-text container h-full flex flex-col justify-center text-dark text-6xl">
            <h1 class="font-bold mb-6">
              Hi, I'm
              <span class="font-extrabold text-red-700"> Simon</span>!
            </h1>
            <h2>
              I &#9829; audio, data and learning new things.
            </h2>
          </div>
        </section>
        <section class="about items-center text-dark">
          <h2>About me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat excepturi consequuntur odit sed laborum ipsam est veniam ex asperiores, esse unde quae commodi ut dolor. Eum eaque vero maiores quam.</p>
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
