function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var nuevoArray = array.filter(function (par) {
    if (par % 2 == 0) return par;
  });
  return nuevoArray;
}

module.exports = filtrarNumerosPares;
