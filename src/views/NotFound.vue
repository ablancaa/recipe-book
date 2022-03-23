<template>
<SearchBar/>
<h1>Not Found</h1>
    <router-link to="/">Home</router-link>
    <br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/>
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

<style>
.espacio{
    width: 100%;
    background-color: aquamarine;
}
</style>