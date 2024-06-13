<template>
  <img v-if="imag" v-bind:src="imag"  alt="Chale"/>
<div class="oscuro"></div>
  <div class="pregunta-container">
  <input v-model="pregunta" type="text" placeholder="Hazme una pregunta hijo">
  <p>Recuerda terminar la pregunta con el signo de interrogacion (?)</p>
  <div class="respuesta">
    <h2>{{pregunta}}</h2>
    <h1>{{respuesta}}</h1>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      pregunta: null,
      respuesta: null,
      imag: null,
    }
  },
  watch:{
    //observador de la propiedad reactiva pregunta
     pregunta(value, oldValue){
        console.log({ value,oldValue })
        if(value.includes('?')) return; //Salgase del observador 
        //Consumir el API para obtener la respuesta
        this.obtenerRespuesta();
      },
  },
  methods:{
    async obtenerRespuesta(){
      this.respuesta="Pensando..................................."
      const data = await fetch('https://yesno.wtf/api').then( resp => resp.json());
      console.log(data);
      const{answer,image} = data;
      console.log(image);
      this.respuesta = answer;
      this.imag = image;
      return data;
    },
    async prueba(){
      const data2= await this.obtenerRespuesta();
    }
  }
};
</script>

<style>
img, .oscuro{
  max-height: 100%;
  height: 100vh;
  max-width: 100%;
  width: 100vw;
  position: fixed;
  /*vamos a decirle desde donde empieza*/
  top:0px;
  left: 0px;
  
}
.oscuro{
  background-color: rgba(0, 0, 0, 0.7);
  /*0.0 full transparente y 1.0 es full opaco*/
}
.pregunta-container{
  /*siempre se pone primero o encima de cualquier otro elemento */
  position: relative;
  
}
input{
  width: 400px;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  margin-top: 250px;
  text-align: center;
}
input:focus{
  /*outline: none;*/
}

p,h1,h2{
  color:aliceblue
}

p{
  font-size: 25px;
  margin-top: 10px;
}
.respuesta{
  margin-top: 100px;
}
</style>