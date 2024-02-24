function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  if (Number.isInteger(n)) {
    let suma = 0;
    let inicio = n < 0 ? n : 1;
    let fin = n < 0 ? 1 : n;

    for (let i = inicio; i <= fin; i++) {
      suma += i;
      if (suma > 100) break;
    }
    return suma;
  }
}

module.exports = sumarHastaNConBreak;
 