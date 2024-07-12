<template>
  <PokemonPuntaje :puntajeJuego="this.puntaje" :intentoJuego="this.intentos"/>
  <h1 v-if="!pokemonCorrecto">Por favor espere.........</h1>
  <div v-else>
    <h1>
      Selecciona el Pokemon Correcto
    </h1>

    <PokemonImagen :idPokemon="pokemonCorrecto.id" :mostrarPokemon="mostrar" />

    <div v-show="!mostrarFelicitaciones">
      <PokemonOpciones
        :pokemons="arreglo"
        @seleccionPokemon="revisarRespuesta($event)"
      />
    </div>

    <h1 v-if="mostrarFelicitaciones">
      Felicitaciones, seleccionaste el Pokémon correcto! su nombre es {{nombre}}
    </h1>
    <h1 v-if="mostrarPokemonIncorrecto">
      ¡Pokemon incorrecto! Intenta de nuevo.
    </h1>
  </div>
</template>

<script>
import PokemonPuntaje from '../components/PokemonPuntaje.vue';
import PokemonImagen from '../components/PokemonImagen.vue';
import PokemonOpciones from '../components/PokemonOpciones.vue';
import obtenerPokemonsFachada from "../clientes/ClientePokemonApi.js"

export default{
    components:{
        PokemonImagen,
        PokemonOpciones,
        PokemonPuntaje
    },
    methods:{
        async cargaInicial(){
            const vectorInicial = await obtenerPokemonsFachada(7);
            this.arreglo = vectorInicial;
            const inidice = Math.floor(Math.random() * 7);
            this.pokemonCorrecto = this.arreglo[inidice];
        },
        revisarRespuesta(dato) {
            console.log("Se emitió un evento desde el hijo");
            console.log(dato);
            if (dato.ident === this.pokemonCorrecto.id) {
                this.mostrar = true;
                this.mostrarFelicitaciones = true;
                this.mostrarPokemonIncorrecto = false;
                this.nombre = dato.nomb;
                this.intentos++;
                switch (this.intentos) {
              case 1:
                this.puntaje = 10;
                break;

              case 2:
                this.puntaje = 8;
                break;
              
              case 3:
                this.puntaje = 5;
                break;
              
              case 4:
                this.puntaje = 3;
                break;

              case 5:
                this.puntaje = 2;
                break;

              case 6:
                this.puntaje = 1;
                break;
              
              case 7:
                this.puntaje = 0;
                break;
              default:

                break;
            }
                console.log("Pokemon Correcto...");
            } else {
                this.intentos++;
                this.mostrarPokemonIncorrecto = true;
                console.log("Pokemon Incorrecto...");
            }
        },    
    },
    data() {
        return {
            arreglo: [],
            pokemonCorrecto: null,
            mostrar: false,
            mostrarFelicitaciones: false,
            mostrarPokemonIncorrecto: false,
            nombre:"",
            puntaje:0,
            intentos:0,
        };
    },
    mounted(){
        this.cargaInicial();
    }
    
};
</script>

<style>
</style>