function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  //var resultado = "";

  for (var i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
      console.log(array[i]);
      var resultado = array[i];
      break;
    } 
  }
  console.log(resultado);
  return resultado;
}

//obtenerPrimerStringLargo(["hello", "world", "this", "is", "a", "test"]);

module.exports = obtenerPrimerStringLargo;
