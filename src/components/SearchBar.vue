<template>
    <div class="search">
        <div>
        <input type="text" placeholder="Search for a recipe"/>
        <button v-show="true">
            <inpunt  
                id="areaSearch"
                v-model="title"
                type="text"
                name="name">Clear Search
            </inpunt>
        </button>
        </div>
       <button @click="showModal = true" class="button">Add a new recipe</button>
            <modal v-if="showModal"><!-- Hace que aparezca un ventana modal encima de la vista -->
                <transition>
                <RecipeForm @close="showModal = false" />
                </transition>
       </modal>
    </div><!-- Fin search -->
</template>

<script>
import RecipeForm from './RecipeForm'
export default {
  components: { 
      RecipeForm 
    },
    props: { },
    name: 'SearchBar',
        data(){
            return {
            showModal: false,
             
            }
        },
        methods:{
            /*Aquest mètode s'encarregarà d'emetre un esdeveniment show-form. S’haurà
            d’executar quan es faci clic al botó “Add a new recipe”.*/
            showForm(){
                this.$emit('show-Modal', false)
                
            },
            /* Aquest mètode s'encarregarà de buidar l'element input del camp de cerca.
            S’haurà d’executar quan es faci clic al botó “Clear Search”.*/
            clearSearch(){
                if (this.title == true){
                    console.log("hola");
                }
               
            },
            /*Aquest mètode s'executarà cada vegada que es modifiqui l'element
            input del camp de cerca (cada vegada que es teclegi una lletra). Emetrà un esdeveniment
            'search' amb el contingut del camp de cerca*/
            search(newVal){
                 
                 console.log(newVal);
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
justify-content: space-between;
}
.search input {
width: 500px;
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
