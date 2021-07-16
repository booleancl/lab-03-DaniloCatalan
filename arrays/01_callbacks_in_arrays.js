/*
  1 - EJERCICIO CON SOLUCIÓN PARA ANALIZAR CON LA CLASE
  Crea una función que delegue la responsabilidad de saber si debemos o no filtrar en un arreglo un valor

  var targetValueId = 'SOME_ID'
  function filterValue(value, index) {
    return value.id === targetValueId
  }
  // filter debe devolver solo los elementos que al utilizar la función "filterValue" devuelva true
  filter(employees, filterValue)
*/

function filter(array, callback){
  const arrayLength = array.length;
	const newArray = [];

//  SOLUCIÓN
// 	for (let index = 0; index < arrayLength; index++) {
//    // ACÁ UTILIZAMOS EL CALLBACK
// 		const isIncluded = callback(array[index], index, array);     // ACÁ UTILIZAMOS EL RESULTADO DEL CALLBACK PARA REALIZAR EL FILTRO 
//    if (isIncluded) {
// 			newArray.push(array[index]);
// 		}
//   }
  return newArray;
}

/*
  2 - DESAFÍO PARA LOS ESTUDIANTES
  Crea una función que delegue la responsabilidad de modificar todos los elementos de un arreglo

  function modifyValue(value, index) {
    return value * 2
  }
  // map debe devolver un arreglo con los valores modificados
  map(pointsList, modifyValue)
*/
function map(array, callback){
  const arrayLength = array.length;
	const newArray = [];

	for (let index = 0; index < arrayLength; index++) {
    // ACÁ UTILIZAMOS EL CALLBACK
  }
  return newArray;
}

module.exports = {
  filter: filter,
  map: map
}
