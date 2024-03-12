function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  let mayusculas = [];
  for (let i = 0; i < array.length; i++) {
    mayusculas = array.map(str => str.toUpperCase());
  }
  return mayusculas;
}

module.exports = convertirStringAMayusculas;

