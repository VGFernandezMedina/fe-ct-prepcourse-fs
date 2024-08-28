function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:

  var indiceAleatorio = Math.floor(Math.random() * array.length);

  var frutaAleatoria = array[indiceAleatorio];

  console.log(frutaAleatoria);
  return frutaAleatoria;
}


module.exports = obtenerElementoAleatorio;
