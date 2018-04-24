//MI REPOSITORIO

let arregloNumeros = [1, 2, 3, 4, 5];
let sumarDosNumeros = (numeroUno: number, numeroDos: number) => { //funcion de flecha gorda se cambia la palabra function por =>
    return numeroUno + numeroDos;
};
let totalEdades = a => ['Facultad1', 'Facultad2']; //primera forma

/*let totalEdades = function(){       //segunda forma
    return  ['Facultad1', 'Facultad2'];
}*/


arregloNumeros.forEach(
    (valor, indice, arreglo) => {
        console.log('valor', valor);
        console.log('indice', indice);
        console.log('arreglo', arreglo);
    }
);