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
    馃毃馃毃  ALERTA 馃毃馃毃

    Los Callbacks son uno de los conceptos m谩s importantes de Javascript. Una vez que los entiendes, puedes aprovechar el m谩ximo el potencial de este lenguaje.

    馃憖 馃憖 PON MUCHA ATENCI脫N EN LA SIGUIENTE INFORMACI脫N 馃憖 馃憖

    Cuando hacemos programaci贸n que tiene relacionada por ejemplo arreglos hay ciertos patrones que se repiten
    Veamos unos ejemplos

    findUserByName(users, name){
      //  -- c贸digo com煤n: recorrer el arreglo
      var newArray = []
      for(var index = 0; index < users.length; index++) {
        //  --- c贸digo com煤n: conocer el valor actual de la iteraci贸n --
        var actualUser = users[index]
        var actualIndex = index
        
        //  --- c贸digo variable: cualquier operaci贸n que incluya las variables anteriores.
        // Pseudo-c贸digo
        if (actualUser.name.indexOf(name) !== -1) {
          newArray.push(actualUser)
        }
      }
      //  -- c贸digo com煤n: devolver el nuevo arreglo
      return newArray
    }

    formatRutsInEmployees(users) {
      //  -- c贸digo com煤n: recorrer el arreglo
      var newArray = []
      for(var index = 0; index < users.length; index++) {
        //  --- c贸digo com煤n: conocer el valor actual de la iteraci贸n --
        var actualUser = users[index]
        var actualIndex = index
        
        //  --- c贸digo variable: cualquier operaci贸n que incluya las variables anteriores.
        // Pseudo-c贸digo
        actualUser.rut = actualUser.rut.replace('.', '')
        newArray.push(actualUser)
      }
      //  -- c贸digo com煤n: devolver el nuevo arreglo
      return newArray
    }

    馃憖 馃憖  Fijarse que casi todo es c贸digo com煤n.
    
    馃弮鈥嶁檧锔忦煆冣?嶁檧锔? Corre a mirar todos los ciclos que hayas escrito y fijate en esto

    馃洜锔? Los callback viene a ayudarnos a "abstraer" el c贸digo variable frente a operaciones comunes 馃洜锔?
    
    demos un paso m谩s all谩 y ahora refactoricemos
    lo anterior
    
    //  CASO 1
    // 馃憞馃憞 REFACTOR AC脕 馃憞馃憞 
    checkIfUser(actualUser, name) {
      return actualUser.name.indexOf(name) !== -1
    }
    findUserByName(users, name){
      //  -- c贸digo com煤n: recorrer el arreglo
      var newArray = []
      for(var index = 0; index < users.length; index++) {
        //  --- c贸digo com煤n: conocer el valor actual de la iteraci贸n --
        var actualUser = users[index]
        var actualIndex = index
        
        //  --- c贸digo variable: cualquier operaci贸n que incluya las variables anteriores.
        
        // 馃憞馃憞 REFACTOR AC脕 馃憞馃憞 <-- EL CALLBACK NOS DICE SI EL VALOR ACTUAL APLICA O NO PARA LA OPERACI脫N
        if(checkIfUser(actualUser, name)) {
          ... m谩s operaciones etc
        }
      }
      //  -- c贸digo com煤n: devolver el nuevo arreglo
      return newArray
    }

    // CASO 2
    // 馃憞馃憞 REFACTOR AC脕 馃憞馃憞 
    replaceNoAllowedChars(text) {
      return text.replace('.', '')
    }
    formatRutsInEmployees() {
      //  -- c贸digo com煤n: recorrer el arreglo
      var newArray = []
      for(var index = 0; index < users.length; index++) {
        //  --- c贸digo com煤n: conocer el valor actual de la iteraci贸n --
        var actualUser = users[index]
        var actualIndex = index
        
        //  --- c贸digo variable: cualquier operaci贸n que incluya las variables anteriores.
        // Pseudo-c贸digo
        // 馃憞馃憞 REFACTOR AC脕 馃憞馃憞 <-- EL CALLBACK MODIFICA LOS VALORES DEL ARREGLO
        actualUser.rut = replaceNoAllowedChars(actualUser.rut)
        newArray.push(actualUser)
      }
      //  -- c贸digo com煤n: devolver el nuevo arreglo
      return newArray
    }

    馃憖 馃憖  Puedes notar que NO HICIMOS GRANDES CAMBIOS simplemente dividimos un poco la responsabilidad en distintas funciones

    Los callbacks DELEGAN la responsabilidad

    function callback <-- recibir谩 los datos y har谩 una X operaci贸n
    
    function forLoop(array, callback) <-- recorrer谩 el array y le pasar谩 al callback los datos para que haga lo que necesita
*/


/* 
  La ventaja de los callback es que la responsabilidad que delegan es "abtracta", esto quiere decir que nosotros podemos hacer cualquier operaci贸n siempre y cuando le pasemos los argumentos necesarios a esa funci贸n.
  Cuando usas un callback DEBES saber si o si que argumentos dispondr谩s para poder operar.
  Con los a帽os y la experiencia aprender谩s a entender mejor las documentaciones e incluso crear tus propios m茅todos que usen callbacks para aprovechar el poder de Javascript
*/

// forEach ... sirve para iterar un array pero no hacer modificaciones en 茅l
function forEach(array, callback) {
  
  for(var index = 0; index < array.length; index++) {
    // algo falta ac谩. la idea de delegar esta operaci贸n es que la funci贸n tenga disponible los argumentos necesarios para llevar a cabo su responsabilidad.
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
