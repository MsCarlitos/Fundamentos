// 4- Dado el siguiente arreglo:
// let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
// Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?

let numbers: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
let maxNumber: number = -999;
for (let i = 0; i < numbers.length; i++) {
    if( numbers[i] >= maxNumber ) {
        maxNumber = numbers[i]
    }
}

console.log( 'El numero mayor es: ' + maxNumber );