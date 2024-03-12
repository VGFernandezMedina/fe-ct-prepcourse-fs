function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  // Encontrar el número mínimo y máximo en el arreglo
  let minimo = Math.min(...numeros);
  let maximo = Math.max(...numeros);

  // Generar una secuencia completa de números consecutivos dentro del rango
  let secuenciaCompleta = [];
  for (let i = minimo; i <= maximo; i++) {
    secuenciaCompleta.push(i);
    //console.log(secuenciaCompleta);
  }
  // Encontrar los números faltantes comparando la secuencia completa con el arreglo original
  let numerosFaltantes = secuenciaCompleta.filter(
    (numero) => !numeros.includes(numero)
  );
  let entero = 0;
  //console.log(entero);
  //console.log(numerosFaltantes);
  if (numerosFaltantes.length !== 0) return numerosFaltantes[0];
  else return null;
}

module.exports = encontrarNumeroFaltante;

//encontrarNumeroFaltante([1, 2, 3, 4, 5, 6, 7, 8, 9]);
