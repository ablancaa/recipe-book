<template>
  <!-- <header class="header"> -->
     <!-- <img src="@/assets/img/uoc-logo.png" class="logo"/> -->
     <!-- <h1 class="app-name"> Recipe book</h1> -->
  <!-- </header> -->
    <!-- <div class="content"> -->
    <SearchBar/>
    <RecipeList :recipes="recipes" />
    <!-- </div> -->
</template>

<script>
import RecipeJson from "/Recipes.json";
import SearchBar from '@/components/SearchBar.vue'
import RecipeList from '@/components/RecipeList.vue'

export default {
  name: 'Home-1',
  components: {
    //HelloWorld,
    SearchBar,
    RecipeList,
  },
  data(){
    return{
      recipes: RecipeJson.data,
    }
  },
  methods(){

  },
}
</script>

<style>
body {
margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
