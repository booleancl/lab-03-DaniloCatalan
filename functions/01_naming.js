  /*
    Las funciones en Javascript son en realidad instancias de un objeto llamado 'Function'.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
  */

function namedFunctions() {
  
  // ¿Que raro? No falla al ejecutar la función antes de declararla ¿Por qué?
  
  normalFunction()

  //console.log(normalFunction.name)
  
  // Función declarada de la forma "clásica"
  function normalFunction() {
    // ... acá va la lógica
    console.log('testing')
  }
  
  // No podemos hacer esto debido a que la propiedad name es de solo lectura, pero intentarlo no provocará error

  normalFunction.name = "hackedName";

 /*
  Function declarada de forma anónima debe ser
  asignada a una variable, o ser usada como expresión.
  
  Se le dice "Anónima" no por la ausencia del valor name, sino que por la ausencia del nombre JUNTO AL KEYWORD "function". Esto es la principal diferencia con ostros lenguajes como Java.
*/

//  Sin asignar provoca error de sintaxis. Prueba descomentando la siguiente línea

// var algo = function () {}

//  Escrita como "expresión" no provoca error
//  Analizaremos luego que son las expresiones

  (function () {})

  // La función "anónima" en la propiedad 'name' asignará el nombre de la variable.
  
  //  ¿Qué pasa si la ejecutamos antes de declarar?
  
  //  anonymous()
  
  //var anonymousFunction = function () {}

  return {
    normalFunction: normalFunction,
    //anonymousFunction: anonymousFunction,
    // lo anterior es igual a esto por eso pasa la prueba
     anonymousFunction: function () {}
  }
}

function expressionFunctions() {
  /*
    Se considera expresion a lo escrito
      - al lado derecho del return
      - al lado derecho del signo =
      - entre () asignado o no a un valor

   Más información
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#expressions
  */
  // las expresiones siempre se evalúan
  //(nonExistsVariable)
  // pero no los valores de retorno
  //(function() { return nonExistsVarible })

  // para que falle este código podriamos por ejemplo ...
  // var wrongFunction = (function() { return nonExistsVarible })
  // wrongFunction()

  // o podríamos INMEDIATAMENTE ejecurarla luego de EXPRESADA
  //OJO con el () al final de la expresión
  // (function() {
  //   return nonExistsVarible
  // })()
  
  // no definido como expresión provoca error de sintáxis
  //function named() { return nonExistsVarible }()

  /*
    A las funciones definidas como expresiones y que son inmediatamente ejecutadas se les denomina IIFE por las siglas en ingles

    (I)nmediatly
    (I)nvoked
    (F)unction
    (E)xpression

    En el módulo 7 veremos como el uso esta técnica fue VITAL en permitir que el ecosistema Javascript en los navagadores Web pudiera crecer ya que esta técnica permite que los nombre de variables y métodos de las librerías
    no choquen con otras definidad eventualmente en librerías instaladas en simultaneo por alguna aplicación

    Más información
    https://developer.mozilla.org/en-US/docs/Glossary/IIFE#the_module_pattern
  */

  // return function(){}
  return function (){}
}

module.exports = {
  // Ejemplo declaracion de funciones
  namedFunctions: namedFunctions,
  expressionFunctions: expressionFunctions,
}
