//MI REPOSITORIO
//var nombre = "Gabby";
//let segundoNombre: String ; //buena practica
//let segundoNombre: string = 'Estefanía'; //mala practica por redundancia
//let segundoNombre: any = 'Estefanía'; //variables antiguas para cualquier cosa
var segundoNombre = 'Estefanía';
var cedula = '1720437670';
segundoNombre = 'Gabriela';
//cedula = '1231231233'//da error de read-only
var URL_POLI = 'http://www.epn.ed.ec';
//segundoNombre = 123; //Duck Typing
//TIPOS DE DATOS
var nombre;
var edad = 26;
var fecha = new Date();
var casado = false;
//let mascotas: object = {};
//CREAR NUEVO TIPO DE DATO
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        //Template Strings TILDE INVERTIDA
        console.log("El usuario se llama " + this.mNombre + ", \n        la cedula del usuario es: " + this.mCedula + ", \n        la edad del usuario es: " + this.mEdad);
    };
    return Usuario;
}());
var usuario = new Usuario('Gabriela', 26, '1720437670');
var usuarioOtro = {
    mNombre: 'Gabriela',
    mEdad: 26,
    mCedula: '1720437670'
};
console.log(usuario.imprimirEnConsola());
console.log(usuarioOtro);
function noHagoNada() {
}
console.log('No hago nada: ', noHagoNada());
var usuarioTres;
/*let usuarioCuatro: UsuarioDos;
usuarioCuatro = {
    mNombre
}*/ 
