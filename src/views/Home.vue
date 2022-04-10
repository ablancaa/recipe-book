<template>
    <SearchBar/>
    <RecipeList :recipes="recipes" />
</template>

<script>
import RecipeJson from "@/json/Recipes.json";
import SearchBar from '@/components/SearchBar.vue'
import RecipeList from '@/components/RecipeList.vue'
//import RecipeForm from '@/components/RecipeForm.vue'
//import { defineComponent } from "vue";

export default {
  name: 'Home-1',
  components: {
    SearchBar,
    RecipeList,
    //RecipeForm,
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

</style>
