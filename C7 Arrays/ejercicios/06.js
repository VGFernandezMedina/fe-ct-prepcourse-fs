function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  var invertido = [];
  for (var i = 0; i < array.length; i++) {
    invertido.unshift(array[i]);
  }
  // console.log(invertido)
  return invertido;
}

// var array = [1, 2, 3]
// invertirArray(array)

module.exports = invertirArray;
