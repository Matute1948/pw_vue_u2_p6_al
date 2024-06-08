<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Comtador titulo="Estudiante" num="3"/>
  <Comtador titulo="Profesor" />
  <Comtador :num="calcularValor()"/>
</template>

<script>
import Comtador from './components/Comtador.vue'
export default {
  name: 'App',
  components: {
    Comtador,
  },
  methods:{
    calcularValor(){
      return 10+2;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
