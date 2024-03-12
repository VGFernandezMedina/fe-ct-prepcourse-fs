function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:

  let resultado = [];
  let suma = num;
  let mensaje = ""; // Inicializar la variable de mensaje

  for (let i = 0; i < 10; i++) {
    suma += 2;
    resultado.push(suma);

    if (suma === i) {
      mensaje = "Se interrumpió la ejecución"; // Asignar el mensaje si se cumple la condición
      break; // Salir del bucle si se cumple la condición
    }
  }

  return mensaje || resultado; // Retornar el mensaje si está definido, de lo contrario, retornar el resultado
}

module.exports = breakStatement;

breakStatement(-4);
