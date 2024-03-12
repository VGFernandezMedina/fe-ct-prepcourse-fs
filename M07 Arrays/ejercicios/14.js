function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  let producto = 1;
  let contador = 0;
  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
    contador = i;
  }
  if (arguments.length == 0) return 0;
  else return producto;
  //console.log(producto);
}
module.exports = multiplicarArgumentos;

multiplicarArgumentos(5, 5);
