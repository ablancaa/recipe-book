<template>
    <SearchBar/>
    <RecipeList :recipes="recipes" />
</template>

<script>
import RecipeJson from "@/json/Recipes.json";
import SearchBar from '@/components/SearchBar.vue'
import RecipeList from '@/components/RecipeList.vue'

export default {
  name: 'Home-1',
  components: {
    SearchBar,
    RecipeList,
  },
  data(){
    return{
      recipes: RecipeJson.data,
      showModal: false,
    }
    
  },
  methods(){

  },
}
</script>

<style>

</style>
