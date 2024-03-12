function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  let pares = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      continue;
    } else {
      pares++;
    }
  }
  //console.log(pares);
  return pares;
}

module.exports = contarParesConContinue;

//contarParesConContinue([2, 4, 6, 8]);
