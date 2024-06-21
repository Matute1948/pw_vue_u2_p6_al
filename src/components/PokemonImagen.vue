<template>
    <div class="pokemon-container">
        <img v-show="mostrarPokemon" :src="imagenFuente" alt="No cargo la imagen">
        <img v-show="!mostrarPokemon" class="pokeNegro" :src="imagenFuente" alt="No cargo la imagen">
    </div>
    
    
    
</template>

<script>

export default{
    data() {
        return {
            mostrar: false,
        }
    },
    props:{
        idPokemon:{
            type: Number,
            required: true,
        },
        mostrarPokemon:{
            type: Boolean,
            required: true,
        }
    },
    
    computed:{
        imagenFuente(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`
        } 
    }
}

</script>

<style scoped>

.pokeNegro{
    filter: brightness(0);
}
img{
    height: 300px;
    width: 300px;
    position: absolute;
    right: 40%;
}

.pokemon-container{
    height: 320px;
}


</style>