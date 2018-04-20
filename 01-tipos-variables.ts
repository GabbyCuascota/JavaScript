//MI REPOSITORIO
//var nombre = "Gabby";
//let segundoNombre: String ; //buena practica
//let segundoNombre: string = 'Estefanía'; //mala practica por redundancia
//let segundoNombre: any = 'Estefanía'; //variables antiguas para cualquier cosa
let segundoNombre = 'Estefanía';
const cedula = '1720437670';
segundoNombre = 'Gabriela';
//cedula = '1231231233'//da error de read-only
const URL_POLI = 'http://www.epn.ed.ec';
//segundoNombre = 123; //Duck Typing


//TIPOS DE DATOS
let nombre: String;
let edad: Number = 26;
let fecha: Date = new Date();
let casado: boolean = false;
//let mascotas: object = {};

//CREAR NUEVO TIPO DE DATO
class Usuario {

    public mNombre: String;
    private mEdad: Number;
    protected mCedula: String;

    constructor(nombre: String,
                edad: Number,
                cedula: String,
    ) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }

    public imprimirEnConsola() {
        //Template Strings TILDE INVERTIDA
        console.log(`El usuario se llama ${this.mNombre}, 
        la cedula del usuario es: ${this.mCedula}, 
        la edad del usuario es: ${this.mEdad}`);
    }
}
let usuario:Usuario = new Usuario ('Gabriela',26, '1720437670');
let usuarioOtro = {
    mNombre: 'Gabriela',
    mEdad:26,
    mCedula:'1720437670'
};
console.log(usuario.imprimirEnConsola());
console.log(usuarioOtro);

function noHagoNada(){

}
console.log('No hago nada: ', noHagoNada());

let usuarioTres:Usuario;

interface UsuarioDos{
    mNombre:String;
    mEdad:Number;
    mCedula:String;
}


class UsuarioTres {
    constructor (public mNombre: String,
                 private mEdad: Number,
                 protected mCedula: String){

    }
}