var nombre = "26"
var edad = 26
var fecha = new Date();
var casado = false; //true
var casa = undefined;
var arreglo = []
console.log(casa ? "Verdadero" : "Falso");
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

var usuario = {
    "nombre" : "Gabriela",
    apellido : "Cuascota",
    cedula : '1720437678',
    //imprimirEnConsola
};
console.log("Usuario: ", usuario);

function sumarDosNumeros(numeroUno, numeroDos){
    return numeroUno + numeroDos;
}
    console.log(sumarDosNumeros(1,2));

