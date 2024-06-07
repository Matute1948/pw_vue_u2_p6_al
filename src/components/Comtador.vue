<template>
  <h2>{{presentar}}</h2>
  <p>{{numero}}<sup>2</sup>={{calcular}}</p>
  <div>
    <button v-on:click="incrementar">+1</button>
    <button v-on:click="disminuir">-1</button>
  </div>
</template>

<script>
export default {
  props:['titulo','num'],
  data(){
    return{
      numero:5
    }
  },
  methods:{
    calcularCuadrado(){
      console.log('ingreso al metodo');
      return this.numero*this.numero;
    },
    calcularCuadrado2(num1,num2){
      console.log("Ingreso al metodo2");
      return num1*num2;
    },
    incrementar(){
      this.numero++;
    },
    disminuir(){
      this.numero--;
    }
  },
  computed:{
    calcular(){
      console.log('ingreso a la propiedad computada');
      return this.numero*this.numero;
    },
    presentar(){
      if(this.titulo !== undefined){
        return this.titulo
      }else{
        return "Texto que quiero"
      }
    }
  },
}
</script>

<style>
button{
  background-color: aqua;
  border-radius: 5px;
  border: white;
  margin: 10px 10px;
  padding: auto;
  cursor: pointer;
}
button:hover{
  background-color: rgb(25, 101, 101);
}
</style>