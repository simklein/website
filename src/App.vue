<template>
  <!--nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav-->
  <div class="home bg-light min-h-screen relative">
    <NavHeader/>
    <router-view/>
    <SimpleFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
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

<!--style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style-->
