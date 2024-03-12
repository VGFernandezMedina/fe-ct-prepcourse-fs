function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    resultado.push(array[i] * i);
  }
  //console.log(resultado);
  return resultado;
}

module.exports = multiplicarElementosPorIndice;

//multiplicarElementosPorIndice([0, 4, 12, 24, 40]);
