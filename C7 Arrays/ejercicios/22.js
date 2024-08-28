function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var num = [];

  for (let i = 0; i <= 10; i++) {
    num.push(i * 6);
  }
  return num;
}

module.exports = tablaDelSeis;
