function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  var nuevoArray = array.map(function (strings) {
    return strings.toUpperCase();
  });
  return nuevoArray;
}

module.exports = convertirStringAMayusculas;
