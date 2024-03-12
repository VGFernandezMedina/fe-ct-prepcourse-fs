function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  let NuevoNumeros = numeros.sort();
  console.log(NuevoNumeros);

  for (let i = 0; i < NuevoNumeros.length; i++) {
    console.log(NuevoNumeros[i]);
    console.log(NuevoNumeros[i + 1]);
    if ((NuevoNumeros[i] == NuevoNumeros[i + 1])) return NuevoNumeros[i];

  }
}

module.exports = encontrarElementoRepetido;

encontrarElementoRepetido([1, 2, 3, 3, 4, 5]);
