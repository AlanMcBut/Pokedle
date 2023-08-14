function elegirPokemon() {
    numeroPokeElegido = Math.round(Math.random() * 151 + 1 )
    const eleccion = listaPokemon.find((el) =>  el.id === numeroPokeElegido)
    
    return console.log(eleccion)
}
elegirPokemon();
