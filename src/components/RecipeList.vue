<template>
<div class="recipe-list">
    <div v-for="recipe in recipes" :key="recipe.id">
        <Recipe :recipe="recipe"/>
    </div>
</div>
</template>

<script>
import Recipe from '@/components/Recipe.vue'
    export default {
        name: 'RecipeList-1',
        components: { Recipe },
        props: { recipes: Array },
    data(){
        return{
        }
},
    }
</script>

<style>
.recipe-list {
display: grid;
width: 100%;
grid-template-columns: 1fr 1fr 1fr;
}

</style>