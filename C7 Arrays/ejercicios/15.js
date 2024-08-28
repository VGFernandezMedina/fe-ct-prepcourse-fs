function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  var maxIndice = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[maxIndice]) {
      maxIndice = i;
    }
  }
  return maxIndice;
}

//encontrarIndiceMayor([1, 2, 5, 4, 3]);

module.exports = encontrarIndiceMayor;
