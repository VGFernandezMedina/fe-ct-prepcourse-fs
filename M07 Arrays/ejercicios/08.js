function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  let pares = [];
  let impares = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      pares.push(array[i]);
      //console.log(pares);
    } 
  }
  //console.log(pares);
  return pares;
}

module.exports = filtrarNumerosPares;

//filtrarNumerosPares([1, 2, 3, 4, 5, 6]);

