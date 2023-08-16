function elegirPokemon() {
    numeroPokeElegido = Math.floor(Math.random() * 151 + 1 )
    const eleccion = listaPokemon.find((el) =>  el.id === numeroPokeElegido)
    console.log(eleccion);
    return eleccion;
}

function eleccionUsuario() {
    const eleccion = elegirPokemon();
    const pokemonInfo = document.createElement('div');
    pokemonInfo.id = 'pokemonInfo';
    document.body.appendChild(pokemonInfo);
    
    let juegoCompletado = false;
    

    while (!juegoCompletado) {
        let respuestaUsuario = prompt('Ingrese un pokemon: ');
        respuestaUsuario = listaPokemon.find((el) => el.nombre === respuestaUsuario);
        mostrarPokemon(respuestaUsuario);
        
        
        if(respuestaUsuario.id === eleccion.id){
            alert('Adivinaste el pokemon, felicitaciones!');
            pokemonInfo.style.backgroundColor = 'green';
            juegoCompletado = true;
        }
        else {
            
            pokemonInfo.style.backgroundColor = 'red';
            alert('Incorrecto! Intenta otra vez:')
      }

    }
}

function mostrarPokemon(respuestaUsuario) {
    const pokemonInfo = document.getElementById('pokemonInfo');
    pokemonInfo.innerHTML = `
      <h3>Información del Pokémon</h3>
      <p>Nombre: ${respuestaUsuario.nombre}</p>
      <p>1er tipo: ${respuestaUsuario.tipo1}</p>
      <p>2do tipo: ${respuestaUsuario.tipo2}</p>
    `;
}
// eleccionUsuario();