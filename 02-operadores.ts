//MI REPOSITORIO

let arregloNumeros = [1, 2, 3, 4, 5];
let arregloDeudas = [78, 56, 180, 590, 64, 78];

//let arregloUsuario: Array<UsuarioArreglo> = [
let arregloUsuario: UsuarioArreglo[] = [
    {
        nombre: 'Gabriela',
        edad: 28
    },
    {
        nombre: 'Carla',
        edad: 10
    },
    {
        nombre: 'Martin',
        edad: 70
    },
    {
        nombre: 'Ivan',
        edad: 32
    },
    {
        nombre: 'Miguel',
        edad: 25}];

//funcion de flecha gorda se cambia la palabra function por =>
let sumarDosNumeros = (numeroUno: number, numeroDos: number) => {
    return numeroUno + numeroDos;
};

let totalEdades = arregloDeNumeros => {
    // codigo extra
};

let facultades = function (a) {
    return ['Facultad1', 'Facultad2'];
};

let facultadesDos = (a: number, b: number) => ['Facultad1', 'Facultad2']; //primera forma
facultadesDos(1, 2);

let facultadesUno = function(){       //segunda forma
    return  ['Facultad1', 'Facultad2'];


//ooperador
/*arregloNumeros.forEach(
    (valor, indice, arreglo) => {
        console.log('valor', valor);
        console.log('indice', indice);
        console.log('arreglo', arreglo);
    }
);*/
let sumar = 0;
let resultadoForEach= arregloNumeros.forEach(
    (valor, indice, arreglo) => {
        sumar = sumar + valor;
        console.log(sumar);
    });

let resultadoDeLaSuma = arregloNumeros.reduce((totalAcumulado, valorArreglo)=> {
return totalAcumulado - valorArreglo;
},
    20
);

    let resultadoDeLaSumaDos = arregloNumeros
        .reduce(
            (totalAcumulado, valorArreglo) => {
                return totalAcumulado - valorArreglo;
            },
            20
        );

console.log('resultadoDeLaSuma', resultadoDeLaSuma);


    let resultadoDeLasEdades = arregloUsuarios
        .reduce(
            (totalEdadAcumulado, usuarioArreglo: UsuarioArreglo) => {
                return totalEdadAcumulado + usuarioArreglo.edad;
            },
            0
        );
    console.log('resultadoDeLasEdades', resultadoDeLasEdades);


interface UsuarioArreglo{
    nombre: string;
    edad: number;
    deuda?: number;
}