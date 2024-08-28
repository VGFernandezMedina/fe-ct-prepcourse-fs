function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var acum = 1;

  for (let i = a; i <= b; i++) {
    acum *= i;
  }
  return Math.abs(acum);
}

module.exports = productoEntreNúmeros;
