<template>
<header>
  <h3>Alberto Blanca Alcaide</h3>
</header>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Presione el botón para mostrar los valores y su tipo.</p>  
    <button @click="myFunction()">Muestra</button>  
      <p v-show="this.btn_activo==true" id="demo1"></p>  
      <p id="demo2"></p>  
      <p id="demo3"></p>  
      <p id="demo4"></p>  
      <p id="demo5"></p>  
      <p id="demo6"></p>  
    <p>
      Este texto viene del componente HelloWorld,<br>
      Documentación de Vue.js:
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Plugins CLI Instalados</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <!-- <h3>Essential Links</h3> -->
    <!-- <ul> -->
      <!-- <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li> -->
      <!-- <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li> -->
      <!-- <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li> -->
      <!-- <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li> -->
      <!-- <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li> -->
    <!-- </ul> -->
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      btn_activo: false
    }
  },
  methods:{
    myFunction(){  
      var num = 15;  
      var n = num.toString();  
      var m=parseInt(n);  
      var x=m/2;  
      var y=x.toString();  
      var z=parseFloat(y);  
      document.getElementById("demo1").innerHTML = num+ " "+typeof num;  
      document.getElementById("demo2").innerHTML = n+ " "+typeof n;  
      document.getElementById("demo3").innerHTML = m+ " "+typeof m;  
      document.getElementById("demo4").innerHTML = x+ " "+typeof x;  
      document.getElementById("demo5").innerHTML = y+ " "+typeof y;  
      document.getElementById("demo6").innerHTML = z+ " "+typeof z; 
      this.btn_activo = false;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
