<template>
    <div class="opciones-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('seleccionPokemon',{ident: pokemon.id, nomb: pokemon.nombre, test:'esto es una preuba'})">{{pokemon.nombre}}</li>
        </ul>
    </div>
</template>

<script>
export default{
    props:{
        pokemons:{
            type: Array,
            required:true,
        },
    }
};

</script>

<style scoped>

ul{
    list-style-type: none;
    
}
li{
    border: 2px solid black;
    border-radius: 5px;
    margin: 10px;
    width: 500px;
    height: 15px;
    background-color: white;
    cursor: pointer;
    
}

li:hover{
    background-color: rgb(126, 130, 130);
}

.opciones-container{
    justify-content: center;
    align-items: center;
    display: flex;


}
</style>