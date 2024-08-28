function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  var acumulador = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      acumulador += 1;
    } else {
      continue;
    }
  }
  return acumulador;
}

module.exports = contarParesConContinue;
