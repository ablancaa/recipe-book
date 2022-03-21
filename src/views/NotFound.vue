<template>
<div class="content"><SearchBar/></div>
    <div id="app">
        <div class="content">
        <h1>Not Found</h1>
        <router-link to="/">Home</router-link>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'

    export default {
        name: 'NotFound',
         components: {

   SearchBar,
  
 },
    }
</script>

<style scoped>
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

.content {
    margin-bottom: 125px;
}
</style>