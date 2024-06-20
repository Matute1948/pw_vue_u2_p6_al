<template>
    <div class="pokemon-container">
        <img v-show="mostrar" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg" alt="No cargo la imagen">
        <img v-show="!mostrar" class="pokeNegro" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg" alt="No cargo la imagen">
    </div>
    
    
    
</template>

<script>

export default{
    data() {
        return {
            mostrar: false,
        }
    },
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