function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  let total = 0;
  let elemento = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
    elemento = array[0];
  }
  //console.log(total);
  if (total / array.length == elemento) return true;
  else return false;
}

module.exports = todosIguales;

//todosIguales([97, 100, 190, 9]);
