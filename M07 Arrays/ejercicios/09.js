function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  //let mayoresA10 = [];
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      //mayoresA10.push(array[i]);
      contador++;
    }
  }
  return contador;
}

module.exports = contarElementosMayoresA10;
