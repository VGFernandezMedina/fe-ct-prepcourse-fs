function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  var nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
    nuevoArray.push(array[i] * i);
  }

  console.log(nuevoArray);
  return nuevoArray;
}

//multiplicarElementosPorIndice([1, 2, 3, 4]);

module.exports = multiplicarElementosPorIndice;
