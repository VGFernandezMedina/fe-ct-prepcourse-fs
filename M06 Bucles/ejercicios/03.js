function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

  if (x % 1 == 0 && y % 1 == 0 && x < y) return y;
  else if (x % 1 == 0 && y % 1 == 0 && x > y) return x;
  else return x || y;
}

module.exports = obtenerMayor;
