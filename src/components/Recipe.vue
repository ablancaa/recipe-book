<template>
        <div class="recipe" :class="{ featured: recipe.featured }">
            <div class="estrella-recipe" v-show="recipe.featured"><img src="@/assets/ico/estrella.png" /></div>
            <button class="delete-recipe"><img src="@/assets/img/delete-button.svg" alt="Eliminar" title="Eliminar"/></button>
            
            <h2 class=".recipe-title">{{ recipe.title }}</h2>
            <!-- <p>{{ recipe.featured }}</p> -->
            <div class="recipe-image"><img :src="recipe.image"/></div>
            <div class="recipe-info">
                <div class="recipe-info-item">
                    <span class="recipe-info-label"> Servings:</span>
                    <span class="recipe-info-value"> {{ recipe.servings }} </span>
                </div>
                <div class="recipe-info-item">
                    <span class="recipe-info-label"> Time:</span>
                    <span class="recipe-info-value"> {{ recipe.time }}</span>
                </div>
                 <div class="recipe-info-item">
                    <span class="recipe-info-label"> Difficulty:</span>
                    <span class="recipe-info-value"> {{ recipe.difficulty }}</span>
                </div>
             </div> <!-- fin recipe info -->
            <div class="recipe-ingredients">
                <h3 class="recipe-ingredients-title">Ingredientes</h3>
                <ul class="recipe-ingredients-list">
                    <li v-for="ingredients in recipe.ingredients" :key="ingredients.ingredients">{{ ingredients }}</li>
                    <!-- <li>{{ recipe.ingredients[1] }}</li> -->
                    <!-- <li>{{ recipe.ingredients[2] }}</li> -->
                </ul>
            </div>
            <div class="recipe-directions">
                <h3 class="recipe-directions-title">Directions</h3>
                <ol class="recipe-directions-list">
                    <li v-for="directions in recipe.directions" :key="directions.directions">{{ directions }}</li>
                    <!-- <li>{{ recipe.directions[1] }}</li> -->
                    <!-- <li>{{ recipe.directions[2] }}</li> -->
                </ol>
            </div>
        </div> <!-- Fin receta -->
</template>

<script>
    export default {  
        name: 'Receta-1',
        props: {
            recipe: Object,
        },
        data() {
            return{
            }
        },
      };
</script>

<style>
.recipe {
padding: 20px;
border: 1px solid #4caf50;;
margin: 20px;
border-radius: 4px;
display: block;
position: relative;
}
.recipe.featured {
background-color: #f5f5f5;
}

.recipe-title {
font-weight: bold;
font-size: 28px;
}
.recipe-image {
margin-bottom: 20px;
max-height: 160px;
overflow: hidden;
}
.recipe-image img {
width: 100%;
}
.recipe-info {
margin-bottom: 20px;
display: flex;
justify-content: space-between;
}
.recipe-info-label {
font-weight: bold;
margin-right: 5px;
}
.recipe-ingredients,
.recipe-directions {
margin-bottom: 20px;
text-align: left;
}
.recipe-ingredients-title,
.recipe-directions-title {
font-weight: bold;
margin-bottom: 10px;
}
.recipe-ingredients-list,
.recipe-directions-list {
padding: 0;
margin: 0;
margin-left: 18px;
}
.delete-recipe {
position: absolute;
top: 10px;
right: 10px;
background: transparent;
border: 0;
padding: 0;
cursor: pointer;
}
.delete-recipe img {
width: 20px;
}

.estrella-recipe {
position: absolute;
top: -30px;
left:-30px;
background: transparent;
border: 0;
padding: 0;
cursor: pointer;
}
.estrella-recipe img {
width: 100px;
}
</style>