function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  for (let i = 0; i < 10; i++) {
    if (num == 10 || num == 5) return true;
    else return false;
  }
}
module.exports = esDiezOCinco;
