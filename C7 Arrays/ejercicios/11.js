function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  var nuevoArray = [];

  for (var i = 0; i < array.length; i++) {
    nuevoArray = array.map(function (item) {
      return item * 2;
    });
  }
  return nuevoArray;
}

module.exports = duplicarElementos;
