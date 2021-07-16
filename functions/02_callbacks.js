/*
  Las Funciones en Javascript pueden ser tratadas como cualquier tipo de dato. Por ejemplo pueden ser parte de un arreglo.
*/

function useCallbacksAsDataType() {

  var chainProcesses = function(callbacks) {
    var word = ''

    for (var index = 0; index < callbacks.length; index++) {
      var actualProcess = callbacks[index]
      word += actualProcess()
    }

    return word
  }
  var processes = [
    function(){
      return 'Callbacks ';
    },
    function(){
      return 'are'
    },
    function(){
      return ' powerful'
    }
  ]
  //console.log(processes[2]())
  return chainProcesses(processes)
}

/*
    🚨🚨  ALERTA 🚨🚨

    Los Callbacks son uno de los conceptos más importantes de Javascript. Una vez que los entiendes, puedes aprovechar el máximo el potencial de este lenguaje.

    👀 👀 PON MUCHA ATENCIÓN EN LA SIGUIENTE INFORMACIÓN 👀 👀

    Cuando hacemos programación que tiene relacionada por ejemplo arreglos hay ciertos patrones que se repiten
    Veamos unos ejemplos

    findUserByName(users, name){
      //  -- código común: recorrer el arreglo
      var newArray = []
      for(var index = 0; index < users.length; index++) {
        //  --- código común: conocer el valor actual de la iteración --
        var actualUser = users[index]
        var actualIndex = index
        
        //  --- código variable: cualquier operación que incluya las variables anteriores.
        // Pseudo-código
        if (actualUser.name.indexOf(name) !== -1) {
          newArray.push(actualUser)
        }
      }
      //  -- código común: devolver el nuevo arreglo
      return newArray
    }

    formatRutsInEmployees(users) {
      //  -- código común: recorrer el arreglo
      var newArray = []
      for(var index = 0; index < users.length; index++) {
        //  --- código común: conocer el valor actual de la iteración --
        var actualUser = users[index]
        var actualIndex = index
        
        //  --- código variable: cualquier operación que incluya las variables anteriores.
        // Pseudo-código
        actualUser.rut = actualUser.rut.replace('.', '')
        newArray.push(actualUser)
      }
      //  -- código común: devolver el nuevo arreglo
      return newArray
    }

    👀 👀  Fijarse que casi todo es código común.
    
    🏃‍♀️🏃‍♀️ Corre a mirar todos los ciclos que hayas escrito y fijate en esto

    🛠️ Los callback viene a ayudarnos a "abstraer" el código variable frente a operaciones comunes 🛠️
    
    demos un paso más allá y ahora refactoricemos
    lo anterior
    
    //  CASO 1
    // 👇👇 REFACTOR ACÁ 👇👇 
    checkIfUser(actualUser, name) {
      return actualUser.name.indexOf(name) !== -1
    }
    findUserByName(users, name){
      //  -- código común: recorrer el arreglo
      var newArray = []
      for(var index = 0; index < users.length; index++) {
        //  --- código común: conocer el valor actual de la iteración --
        var actualUser = users[index]
        var actualIndex = index
        
        //  --- código variable: cualquier operación que incluya las variables anteriores.
        
        // 👇👇 REFACTOR ACÁ 👇👇 <-- EL CALLBACK NOS DICE SI EL VALOR ACTUAL APLICA O NO PARA LA OPERACIÓN
        if(checkIfUser(actualUser, name)) {
          ... más operaciones etc
        }
      }
      //  -- código común: devolver el nuevo arreglo
      return newArray
    }

    // CASO 2
    // 👇👇 REFACTOR ACÁ 👇👇 
    replaceNoAllowedChars(text) {
      return text.replace('.', '')
    }
    formatRutsInEmployees() {
      //  -- código común: recorrer el arreglo
      var newArray = []
      for(var index = 0; index < users.length; index++) {
        //  --- código común: conocer el valor actual de la iteración --
        var actualUser = users[index]
        var actualIndex = index
        
        //  --- código variable: cualquier operación que incluya las variables anteriores.
        // Pseudo-código
        // 👇👇 REFACTOR ACÁ 👇👇 <-- EL CALLBACK MODIFICA LOS VALORES DEL ARREGLO
        actualUser.rut = replaceNoAllowedChars(actualUser.rut)
        newArray.push(actualUser)
      }
      //  -- código común: devolver el nuevo arreglo
      return newArray
    }

    👀 👀  Puedes notar que NO HICIMOS GRANDES CAMBIOS simplemente dividimos un poco la responsabilidad en distintas funciones

    Los callbacks DELEGAN la responsabilidad

    function callback <-- recibirá los datos y hará una X operación
    
    function forLoop(array, callback) <-- recorrerá el array y le pasará al callback los datos para que haga lo que necesita
*/


/* 
  La ventaja de los callback es que la responsabilidad que delegan es "abtracta", esto quiere decir que nosotros podemos hacer cualquier operación siempre y cuando le pasemos los argumentos necesarios a esa función.
  Cuando usas un callback DEBES saber si o si que argumentos dispondrás para poder operar.
  Con los años y la experiencia aprenderás a entender mejor las documentaciones e incluso crear tus propios métodos que usen callbacks para aprovechar el poder de Javascript
*/

// forEach ... sirve para iterar un array pero no hacer modificaciones en él
function forEach(array, callback) {
  
  for(var index = 0; index < array.length; index++) {
    // algo falta acá. la idea de delegar esta operación es que la función tenga disponible los argumentos necesarios para llevar a cabo su responsabilidad.
    var actualValue = array[index]
    var actualIndex = index
    callback(actualValue, actualIndex)
  }
}

// forEach([1,2,3], function(number){
//   console.log(number, index)
// })

module.exports = {
  useCallbacksAsDataType: useCallbacksAsDataType,
  forEach: forEach,
}
