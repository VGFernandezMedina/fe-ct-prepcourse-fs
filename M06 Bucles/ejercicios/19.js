function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  if (Number.isInteger(n)) {
    let suma = 0;
    let inicio = n < 0 ? n : 1;
    let fin = n < 0 ? 1 : n;

    for (let i = inicio; i <= fin; i++) {
      suma += i;
    }

    return suma;
  }
}

module.exports = sumarHastaN;
