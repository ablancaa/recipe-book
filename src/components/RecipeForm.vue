<template>
    <div class="modal-container">
        <form class="recipe-form">
            <div class="recipe-form-header">
                <div class="close">
                    <button @click="closeForm"><img src="@/assets/img/close-button.svg"/></button>
                </div><!-- close -->
                <h2>Add a new recipe</h2>
                <div id="error">
                    <p v-for="item in mensajeError" :key="item.id">{{ item }}</p>
                </div>
            </div><!-- recipe-form-header -->
            <div class="recipe-form-item">
                <label>Title</label>
                <input 
                    v-model="title" 
                    type="text"
                    />
                <label>Image URL</label><input type="text"/>
                <label>Servings</label><input type="text"/>
                <label>Time</label><input type="text"/>
                <label>Difficulty</label>
                    <select>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                <label>Ingredients</label>
                <input 
                    v-model="ingredients"
                    type="textarea"/>
                <label>Directions</label>
                <input 
                    v-model="directions"
                    type="textarea"/>
                <label>Featured</label><input type="checkbox"/>
                <div class="btn">
                <button @click="createRecipe">Add Recipe</button></div>
            </div><!-- recipe-form-item -->
            </form><!-- recipe-form -->
       <!--<RecipeList/>-->
    </div><!-- modal-container -->
</template>

<script>
import { uuid } from 'vue-uuid'; 

    export default {
        name: 'RecipeForm',
        components: {
        },
      props: { },
        data() {
            return{
                id: uuid,
                destacada: '',
                title: '',
                imageUrl: '',
                servings: '',
                time: '',
                difficulty: ['Easy', 'Medium' , 'Hard'],
                ingredients: '',
                directions: '',
                submit: '',
                mensajeError: '',
                recipe:[],
            }
        },
        mounted(){},
        methods: {
            /*  Aquest mètode ha d'executar-se quan es faci el submit del formulari, és a
            dir, l'usuari faci click al botó Add Recipe, i s'encarregarà de:
            ○ Comprovar que els camps title, ingredients i directions no estan buits. Si són buits
                haureu de mostrar el missatge d'error prèviament descrit i no emetre la recepta.
            ○ Separar el contingut dels camps ingredients i directions pel caràcter . (punt) i
                afegir-los a un array.
            ○ Crear un objecte (recipe) amb la informació guardada al formulari i els arrays
                d'ingredients i directions..
            ○ Emetre un esdeveniment add-recipe amb l'objecte creat.
            ○ Esborrar els camps del formulari.*/
            createRecipe(){
                if(this.title == '' || this.ingredients == '' || this.directions == '') {
                    console.log("Titulo vacio!!");
                    console.log("Ingredientes Vacio!!");
                    console.log("Indicaciones Vacio!!");
                    //Pinta en pantalla
                    var error = document.getElementById("error");
                    error.innerHTML += 'El título está vacío <br/>';
                    error.innerHTML += 'Los ingredientes está vacío <br/>';
                    error.innerHTML += 'Las indicaciones está vacío <br/>';
                } else {
                    this.recipe.push({
                        id: this.id, 
                        title: this.title, 
                        image: this.image, 
                        servings: this.servings,
                        time: this.time,
                        difficulty: this.difficulty,
                        ingredients: this.ingredients,
                        directions: this.directions,
                        featured: this.featured,
                    });

                    /*
                    const data = JSON.stringify(this.recipe)
                    window.localStorage.setItem('recipe', data);
                    console.log("Muestra: "+JSON.parse(window.localStorage.getItem('recipe')))
                    console.log("Titulo: "+this.title);
                    */
                }//Fin else
            },
            /*Aquest mètode s'ha d'executar quan es faci clic al botó que conté el svg amb
            el símbol X. S'encarregarà de:
                ○ Emetre un esdeveniment close-modal */
            closeForm(){
                this.$emit('close');
            }
        },
    };
</script>

<style scoped>
#error {
    color: red;
}
.modal-container {
    position:fixed;
    top:0;left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    z-index:10;
    }
.recipe-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 80%; 
    max-width: 500px;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    }
.recipe-form-header {
    padding: auto;
}
.recipe-form-header button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: 0;
    padding:0;
    cursor:pointer;
    }
.recipe-form-header button img {
    width: 20px;
    }
.recipe-form-item {
    margin-bottom: 20px;
    }
.recipe-form-item label {
    display: block;
    font-weight:bold;
    margin-bottom: 5px;
    }
.recipe-form-item input,.recipe-form-item select {
width:100%;
padding:10px;
border: 1px solid #ccc;
border-radius: 4px;
max-width: 300px;
}

.recipe-form-item button {
background: #4caf50;
color: #fff;
padding: 10px;
border: none;
border-radius: 4px;
cursor: pointer;
}
.btn{
    margin-top: 20px;
}
.close{
    float: right;
    margin-top: -20px;;
}

</style>