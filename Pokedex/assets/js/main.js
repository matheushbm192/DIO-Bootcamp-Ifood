//molde do html

function convertPokemonToLi(pokemon) {
    return ` <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span> 
        <span class="name">${pokemon.name}</span>
    
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
            </ol>

            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
   
    </li>`
}

//Pega o elemento pai, que vai receber a lista, atraves do ID
const pokemonList = document.getElementById('pokemonList');

/*
pega o resultado da API já em Json, percorre o array retornando cada elemento.
Converte no elemento HTML atraves da funçao 'convertPokemonToLi' e retorna em forma de string atraves do Join
depois incrementa ao HTML
*/
pokeApi.getPokemons().then((pokemons = []) => {
        pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')
    })
    .catch((error) => console.error(error));
