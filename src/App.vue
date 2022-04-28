<template>
  <div class="app bg-indigo-400  min-h-screen relative ">
    <NavHeader/>
    <!--router-view/-->
    <div class="home">
        <section class="hero relative h-screen">
          <div class="hero-text container h-full flex flex-col justify-center px-28 py-20 max-w-screen-xl m-auto">
            <h1>Hi, I am Simon!</h1>
            <h2>
              Short description ...
            </h2>
          </div>
        </section>
        <section class="lorem items-center">
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
