function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (Number.isInteger(a) && Number.isInteger(b)) {
    let producto = 1;
    let inicio = a <= b ? a : b;
    let fin = a <= b ? b : a;

    for (let i = inicio; i <= fin; i++) {
      producto *= i;
    }
    if (producto === -0) return 0;
    return producto;
  }
}

module.exports = productoEntreNúmeros;
