<template>
    <div class="search">
        <input type="text" placeholder="Search for a recipe"/>
        <button @click="showModal = true" class="button">Add a new recipe</button>
        <modal v-if="showModal">
            <RecipeForm @close="showModal = false" />
        </modal>
    </div>
</template>

<script>
import RecipeForm from './RecipeForm'
export default {
  components: { 
      RecipeForm 
    },
    name: 'SearchBar',
        data(){
            return {
                showModal: false
            }
        } 
    }
</script>

<style>
.routerLink{
    text-decoration: none;
    color: #FFFFFF;
}
.search {
width: 98,9%;
padding: 10px;
display: flex;
align-items: center;
border-bottom: 1px solid #4caf50;
margin-bottom: 25px;
}
.search input {
width: 100%;
padding: 10px;
border: 1px solid #ccc;
border-radius: 4px;
font-size: 16px;
margin: 0 auto;
max-width: 500px;
}

.button{
    margin-right: 100px;
}
.search button {
margin-left: 10px;
padding: 10px;
border: 1px solid #ccc;
border-radius: 4px;
font-size: 16px;
cursor: pointer;
background: #4caf50;
color:#fff;
}
</style>