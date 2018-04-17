var nombre = "26"
var edad = 26
var fecha = new Date();
var casado = false; //true
var casa = undefined;
var arreglo = []
/*console.log(casa ? "Verdadero" : "Falso");
if(casa){
    console.log("Verdadero");
}else{
    console.log("Falso");
}

var carro = null;

if (nombre !== edad){
    console.log("Verdadero")
}else{
    console.log("Falso")
}
*/
/*var usuario = {
    "nombre" : "Gabriela",
    apellido : "Cuascota",
    cedula : '1720437678',
    imprimirEnConsola: function ()
    {
        console.log(this.nombre + '' + this.apellido + '' + this.cedula)
    }
};
//console.log("Usuario: ", usuario);
console.log( usuario.cedula);
console.log( usuario.nombre);
console.log( usuario.apellido);
console.log( usuario.imprimirEnConsola());
*/

function sumarDosNumeros(numeroUno, numeroDos){
    return numeroUno + numeroDos;
}
    console.log(sumarDosNumeros(1,2));

/*var sumarDosNumerosVersionDos =

    function (numeroUno, numeroDos){
        return numeroUno + numeroDos;
    };

var usuario = {
    "nombre" : "Gabriela",
    apellido : "Cuascota",
    cedula : '1720437678',
    imprimirEnConsola: sumarDosNumerosVersionDos
};

console.log( usuario.cedula);
console.log( usuario.nombre);
console.log( usuario.apellido);
console.log( usuario.imprimirEnConsola(1, 2));
*/

//console.log(sumarDosNumerosVersionDos(1,2));


/*var sumarDosNumerosVersionDos = function (amigo){
    return numeroUno + numeroDos;
};
console.log(sumarDosNumerosVersionDos(1,2));*/

var arregloDeNumeros = ['2', false, sumarDosNumeros(1, 2)]
console.log('arregloDeNumeros', arregloDeNumeros);

for (var aux = 0; aux <10; aux++){
    console.log( 'Aux: ', aux);
}