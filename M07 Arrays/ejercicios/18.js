function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  
  let contador = -6;
  let total = [];

  while (contador < 60) {
    total.push((contador += 6));
  }
  console.log(total);
  return total;
}

module.exports = tablaDelSeis;

tablaDelSeis();
