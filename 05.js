/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function pluck(array, propiedad) {
  // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar map.

  // Esta función obtenerValores() toma un objeto y una propiedad como entrada. Verifica si el objeto tiene esa propiedad utilizando hasOwnProperty(). Si la tiene, utiliza map() para crear un nuevo array con los valores de esa propiedad y lo devuelve. Si el objeto no tiene la propiedad, devuelve un array vacío.

  // Tu código acá:
  var res = array.map(item => item[propiedad]);
  return res
}


// No modifiques nada debajo de esta linea //

module.exports = pluck