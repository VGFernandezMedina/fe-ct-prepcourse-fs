function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:

  var indiceAleatorio = Math.floor(Math.random() * array.length);
  var elementoAleatorio = array[indiceAleatorio];
  return elementoAleatorio;
}

module.exports = obtenerElementoAleatorio;
