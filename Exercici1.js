'use strict'

//Funciiones invocables inmediatamente - autoinvocables, ejecutables inmediatamente

/* SINTAXIS:

(funtcion(){
    //codigo aqui
})();

*/
let name = prompt('Introduce tu nombre');
let surname = prompt('Introduce tu apellido');

(()=>{
    var fullName = name + " " + surname;
    console.log(fullName);
})();