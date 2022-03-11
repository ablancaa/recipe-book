<template>
<div>
  <img src="./assets/logo.png">
  <button @click="showModal = true">Abrir ventana Modal</button>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  data(){
    return{
      showModal: false
    }
  },
  methods:{
    myFunction(){}
  },
  verObjeto(){
    function Person(firstName, lastName) { 
      this.firstName = firstName; 
      this.lastName = lastName; 
    } 
    const member = new Person('Lydia', 'Hallie'); 
      member.getFullName = function() { 
      return `${this.firstName} ${this.lastName}`;
    }; 

    console.log(member.getFullName());
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
