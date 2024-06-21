const obtenerVectorNumerico = (longitud) => {
    const vector = [];
    for (let i = 0; i < longitud; i++) {
        vector[i] = obtenerAleatorio(1, 625);
    }
    return vector;
}

function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const obtenerPokemons = async (longitud) => {
    const vectorFinal = [];
    const vector = obtenerVectorNumerico(longitud);
    for (let index = 0; index < vector.length; index++) {
        vectorFinal[index] = await construirPokemon(vector[index]);
    }

    return vectorFinal;
}

async function construirPokemon(idPoke) {
    const data = await consumirAPI(idPoke);
    const obj = {
        nombre: data.name,
        id: data.id
    };
    return obj;
}

const consumirAPI = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        throw error;
    }
}

const obtenerPokemonsFachada = async (longitud) => {
    return await obtenerPokemons(longitud);
}

export default obtenerPokemonsFachada;
