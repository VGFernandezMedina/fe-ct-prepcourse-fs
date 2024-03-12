function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  let tresMeses = [];
  let meses = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre") {
      meses.push(array[i]);
    }
  }
  //console.log(meses);
  if (meses.length < 3) return "No se encontraron los meses pedidos";
  else return meses;
}

module.exports = mesesDelAño;

//mesesDelAño(["Marzo", "Diciembre", "Julio", "Noviembre"]);
