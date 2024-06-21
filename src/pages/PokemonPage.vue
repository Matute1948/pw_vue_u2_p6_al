<template>
    <PokemonImagen :idPokemon="50" :mostrarPokemon="false"/>
    <PokemonOpciones :pokemons="arreglo"/>
</template>

<script>
import PokemonImagen from '../components/PokemonImagen.vue';
import PokemonOpciones from '../components/PokemonOpciones.vue';
import obtenerPokemonsFachada from "../clientes/ClientePokemonApi.js"

export default{
    components:{
        PokemonImagen,
        PokemonOpciones,
    },
    methods:{
        async cargaInicial(){
            const vectorInicial = await obtenerPokemonsFachada(4);
            this.arreglo = vectorInicial;
        }
    },
    data() {
        return {
            arreglo:[],
        }
    },
    mounted(){
        this.cargaInicial();
    }
    
};
</script>

<style lang="scss" scoped>

</style>