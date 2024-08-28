function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  var nuevoArray = arrayOfNums.reduce(function (acum, num) {
    return acum + num;
  }, 0);
  return nuevoArray;
}

module.exports = agregarNumeros;
