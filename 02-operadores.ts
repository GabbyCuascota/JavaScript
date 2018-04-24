//MI REPOSITORIO

let arregloNumeros = [1, 2, 3, 4, 5];
//funcion de flecha gorda se cambia la palabra function por =>
/*let sumarDosNumeros = (numeroUno : number, numeroDos : number) => {
    return numeroUno + numeroDos;
};*/
let facultadesDos = (a : number, b : number) => ['Facultad1', 'Facultad2']; //primera forma


/*let facultadesUno = function(){       //segunda forma
    return  ['Facultad1', 'Facultad2'];
}*/

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
return totalAcumulado + valorArreglo;
},
    0
);
