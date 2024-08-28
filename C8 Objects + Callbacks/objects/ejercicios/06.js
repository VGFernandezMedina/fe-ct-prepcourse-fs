const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  var acum = 0;
  for (var key in objeto) {
    acum++;
  }
  return acum;
};

module.exports = contarPropiedades;
