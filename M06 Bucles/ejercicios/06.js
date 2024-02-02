function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var longitud = num.toString();

  if (longitud.length === 3) return true;
  else return false;
}

module.exports = tieneTresDigitos;
