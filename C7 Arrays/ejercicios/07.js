function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  var nuevoArray = array.sort();
  console.log(nuevoArray);
  return nuevoArray;
}

ordenarArray([3, 2, 1]);

module.exports = ordenarArray;
