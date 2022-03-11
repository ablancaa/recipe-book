<template>
  <Recipe/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Recipe from './components/Recipe.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Recipe
  },
  methods(){

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
margin: 0;
}
/* #app {
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
}*/
.header {
width: 100%;
padding: 15px;
display: flex;
align-items: center;
border-bottom: 1px solid #ccc;
}
.header .logo {
max-height: 50px;
}
.header .app-name {
margin-left: 25px;
font-weight: bold;
font-size: 20px;
}

</style>
