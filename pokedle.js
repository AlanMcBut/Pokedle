function elegirPokemon() {
    numeroPokeElegido = Math.floor(Math.random() * 151 + 1 )
    const eleccion = listaPokemon.find((el) =>  el.id === numeroPokeElegido)
    console.log(eleccion);
    return eleccion;
}

function eleccionUsuario() {
    const eleccion = elegirPokemon();
    let juegoCompletado = false;
    
    while (!juegoCompletado) {
        let respuestaUsuario = prompt('Ingrese un pokemon: ');
        respuestaUsuario = listaPokemon.find((el) => el.nombre === respuestaUsuario);
        if(respuestaUsuario.id === eleccion.id){
            alert('Adivinaste el pokemon, felicitaciones!');
            juegoCompletado = true;
        }
        else {
            alert('Incorrecto! Intenta otra vez:')
           
        }
    }
}
eleccionUsuario();