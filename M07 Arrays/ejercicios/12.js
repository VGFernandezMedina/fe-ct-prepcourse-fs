function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  let suma = 0;

  for (let i = 0; i < arrayOfNums.length; i++) {
    suma += arrayOfNums[i];
  }
  //console.log(suma);
  return suma;
}

module.exports = agregarNumeros;

//agregarNumeros([10, 10, 16]);
