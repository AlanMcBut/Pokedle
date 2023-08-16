// Aqui se encuentra la logica del programa



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
        respuestaUsuario = listaPokemon.find((el) => el.nombre === respuestaUsuario.toLowerCase());
        mostrarPokemon(respuestaUsuario);
        
        
        if(respuestaUsuario.id === eleccion.id){
            alert(`Adivinaste el pokemon, felicitaciones!`);
            juegoCompletado = true;
        }
        else {
            localStorage.getItem('intentos') ? localStorage.setItem('intentos',parseInt(localStorage.getItem('intentos'))+1): localStorage.setItem('intentos',1);
            alert('Incorrecto! Intenta otra vez:');
       }
      

    }
}

function mostrarPokemon(respuestaUsuario) {
    const pokemonInfo = document.getElementById('pokemonInfo');
    pokemonInfo.innerHTML = `
      <h3>Información del Pokémon</h3>
      <p>Nombre: ${primerMayuscula(respuestaUsuario.nombre)}</p>
      <p>1er tipo: ${primerMayuscula(respuestaUsuario.tipo1)}</p>
      <p>2do tipo: ${primerMayuscula(respuestaUsuario.tipo2)}</p>
    `;
}
// eleccionUsuario();

function primerMayuscula(el) {
    return el.charAt(0).toUpperCase() + el.slice(1);
  }