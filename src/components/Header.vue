<template>
<header class="header">
   <router-link to="/"><img src="@/assets/img/uoc-logo.png" class="logo"/></router-link>
   <!-- <router-link to="RecipeForm"><h1 class="app-name"> Recipe book</h1></router-link> -->
   <h1 class="app-name"> Recipe book</h1>
   <!-- <router-link to="NotFound" class="routerLink"><h1 class="app-name"> NotFound</h1></router-link> -->
</header>
</template>

<script>
    export default {
        name: 'Header_1',
    }
</script>

<style scoped>
.routerLink{
    text-decoration: none;
    color:#2c3e50;
}
.header {
width: 100%;
padding: 15px;
display: flex;
align-items: center;
border-bottom: 1px solid #4caf50;
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