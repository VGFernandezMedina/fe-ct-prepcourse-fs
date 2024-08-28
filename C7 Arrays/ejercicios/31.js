function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  var invertido = texto.split("").reverse().join("");
  console.log(invertido);
  return invertido;
}

//invertirTexto("Hola");

module.exports = invertirTexto;
