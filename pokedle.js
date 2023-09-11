// Aqui se encuentra la logica del programa


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
        respuestaUsuario = listaPokemon.find((el) => el.nombre === respuestaUsuario.toLowerCase());
        mostrarPokemon(respuestaUsuario);       
        if(respuestaUsuario.id === eleccion.id){
            alert(`Adivinaste el pokemon, felicitaciones!`);
            juegoCompletado = true;
        }
        else {
            alert('Incorrecto! Intenta otra vez:');
       }     

    }
}

function mostrarPokemon(respuestaUsuario) { // Muestra el Pokemon adivinado y su informacion.
    Swal.fire({
        title: `${primerMayuscula(respuestaUsuario.nombre)}`,
        text: `${primerMayuscula(respuestaUsuario.tipo1)} ${primerMayuscula(respuestaUsuario.tipo2)}`,
        imageUrl: `${respuestaUsuario.imagen}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',

})
}

function primerMayuscula(el) { // Para que empiecen con mayusculas los nombres
    return el.charAt(0).toUpperCase() + el.slice(1);
  }