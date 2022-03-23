<template>
  <div id="app">
    <Header/>
    <div class="content">
      <router-view />
    </div>
  </div><!-- FIN div app -->
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return{}
  },
  methods(){},
}
</script>

<style>
body{
  margin: 0;
}
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
display: flex;
flex-wrap: wrap;
height: 100%;
width: 100%;
max-width: 1280px;
margin: 0 auto;
}

.content{
  margin: 0 auto;
}
</style>
