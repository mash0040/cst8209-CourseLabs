function pokemonTypes() {
  let types = []
  for(let i = 0; i < pokedex.length; i++){
    for(let j = 0; j < pokedex[i].type.length; j++){
      if (!types.includes(pokedex[i].type[j])) {
        types.push(pokedex[i].type[j])
      }
    }
  }
  return sortByName(types)
}

function sortByName(array) {
  return array.slice().sort((a, b) => {
    const nameA = a.toUpperCase()
    const nameB = b.toUpperCase()
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
  })
}



function sortByNamePokedex(array) {
  return array.sort((a, b) => {
    const nameA = a.name
    const nameB = b.name
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
  })
}

function totalNumberOfStats(array, stats) {
  return array.reduce((a, b) => a + b.base[stats], 0)
}


types = pokemonTypes()
let selectedType = types[0]

const typesInsert = document.createElement('div')
typesInsert.className = 'types'

for (const type of types) {
  const typesLink = document.createElement('a')
  typesLink.innerHTML = `${type}`
  typesLink.href ='#'
  typesLink.className = 'type-link'
  typesLink.dataset.type = type
  typesInsert.appendChild(typesLink) 
} 
const pokemon = document.querySelector('.pokemon')

const pokemonCount = document.createElement('div')
pokemonCount.className = 'pokemon-count'
document.body.insertBefore(pokemonCount, pokemon)

typesInsert.addEventListener('click', (e) => {
  selectedType = e.target.dataset.type
  displayPokemon(selectedType)
})

document.body.insertBefore(typesInsert, pokemonCount)
displayPokemon(selectedType)


function displayPokemon(type) {
  pokemon.innerHTML = '' 
  const sortedPokedex = sortByNamePokedex(pokedex)
  
  
  let displayedPokemons = sortedPokedex.filter(poke => type === poke.type[0] || type === poke.type[1])

  let totalHP = totalNumberOfStats(displayedPokemons, 'HP')
  let totalAttack = totalNumberOfStats(displayedPokemons, 'Attack')
  pokemonCount.innerHTML = `<h2 class="number-pokemons">Type: ${type} (${displayedPokemons.length})</h2>`
  pokemonCount.innerHTML += `<h3 class="total-stats">Total HP: ${totalHP} | Total Attack: ${totalAttack} </h3>`

  
  displayedPokemons.forEach(pokemonObj => {
    
    const pokemonLink = document.createElement('a')
    pokemonLink.className = 'pokemon-card'
    pokemonLink.href = pokemonObj.url
    pokemonLink.target = '_blank'

    pokemonLink.innerHTML = `<h2 class="name">${pokemonObj.name}</h2>`
    pokemonLink.innerHTML += `<img src="${pokemonObj.sprite}" alt="${pokemonObj.name}">`

    let baseStats = '<ul>'
    for (const key in pokemonObj.base) {
      baseStats += `<li class="stats"><span>${key}</span>: ${pokemonObj.base[key]}</li>`
    }
    baseStats += '</ul>' 
    pokemonLink.innerHTML += baseStats
    pokemon.appendChild(pokemonLink)
  })
}
