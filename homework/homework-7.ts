// 7- Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar
// max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de
// trabajar así:
// let maxValue = max( 5, 2, 6);
// console.log( maxValue ); // 6

export function max(num1: number, num2:number, num3:number) {
    if( num1 > num2 ){
        return ( num1 > num3 ) ? num1 : num3;
    }

    if( num2 > num3 ){
        return num2;
    }

    return ( num1 > num3 ) ? num1 : num3;
}

let maxValue = max( 5, 2, 6);

console.log( maxValue );