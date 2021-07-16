var users = [
  { id: 1,  name: 'Bulma Perez', age: 22, email: '' },
  { id: 2,  name: 'Goku Gonzalez', age: 33, email: '' },
  { id: 3,  name: 'Gohan Valdevenito', age: 12, email: ''},
]
/*
  1 - EJERCICIO CON SOLUCIÓN PARA ANALIZAR CON LA CLASE
  Crea una función que filtre la lista dada y encuentre a las personas mayores o igual a 18 años
*/
function filterByAdults() {

  // con ciclos normales
  // var adults = []
  // for (let index = 0; index < users.length; index++) {
  //   var user = users[index]
  //   if (user.age >= 18) {
  //       adults.push(user)
  //   }
  // }
  // return adults

  /*
    con callbacks de los Array

    No vamos a repasar los métodos comúnes. Nos vamos a centrar en los callbacks

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods
  */
  // filter abstrae todo lo escrito anteriormente excepto lo definido en al algoritmo anterior en el if (user.age >= 18)
  var adults = users.filter(function(user) {
    return user.age >= 18
  })

  return adults
}

/*
  2 - DESAFÍO PARA LOS ESTUDIANTES
  Crea una función que crea una nueva propiedad en todos los elementos del arreglo llamada "freeBeverage" y le asigne el valor 'Alcohol' o 'Juice' según la si es adulto o no
  luego la función debe devolver 2 listas separadas. Una de adultos y otra de menores de 18 años.
  UTILIZA SOLO LAS FUNCIONES .map y .filter
*/
function getListsByAge() {
  // function utilitaria
  var isAdult = function(age) {
    return age >=18
  }
  var listWithBeverages = users.map(function(user) {
    //aprovecha la función isAdult
    //puedes MUTAR EL VALOR para agregar la nueva propiedad y luego retornar el valor ya modificado
    
    return { 
      // id : user.id,
      // name : user.name,
      // age: user.age,
      // email : user.email,
      ...user,
      freeBeverage: isAdult(user.age) ? 'Alcohol' : 'Juice'
    }
  })

  //console.log(users,listWithBeverages)
  return {
    //¿Qué argumentos recibirá la función filter y que DEBE devolver?
    // 👀 👀  --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    adultsPeople: listWithBeverages.filter(function(user) {
      return  isAdult(user.age) //aprovecha la función isAdult
    }),
    underagePeople: listWithBeverages.filter(function(user) {
      return !isAdult(user.age)//aprovecha la función isAdult y el operador !
    }),
  }
}

module.exports = {
  filterByAdults: filterByAdults,
  getListsByAge: getListsByAge
}
