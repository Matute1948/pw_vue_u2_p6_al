<template>
    <div class="puntaje-container">
        <p type="Puntaje: ">{{ puntajeJuego }}</p>
        <p type="Intentos: ">{{ intentoJuego }}</p>
    </div>
</template>

<script>
export default{
    props:{
        puntajeJuego:{
            type: Number,
            required:true,
            default:0,
        },
        intentoJuego:{
            type: Number,
            required:true,
            default:0,
        },

    }
}

</script>

<style scoped>

.puntaje-container{
    display: grid;
    grid-template-columns: 700px 700px;
    grid-template-rows: 100px;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
}
p:before{
    content: attr(type);
    font-size: 5vh;
    color: black;
}

p{
    font-size: 5vh;
    color: black;
}


</style>