function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let mulitplo = undefined;
  let division = 0;
  for (let i = 0; i < secuencia.length; i++) {
    division = secuencia[i] / n;
    if (Number.isInteger(division) === true) {
      console.log(secuencia[i]);
      mulitplo = secuencia[i];
      break;
    } 
  }
  console.log(mulitplo);
  return mulitplo;
}

module.exports = encontrarPrimerMultiploDeN;

//encontrarPrimerMultiploDeN(7, [1, 2, 3, 4, 5, 6, 11, 8, 9]);
