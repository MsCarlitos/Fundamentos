// 3- Calcule el área de un triangulo rectángulo que:
// Base 10 y altura 5 

export function areaOfTriangle( base:number, height:number ) {
    let area = base * height;
    return console.log( 'El area del triangulo es: ' + area/2);
}

areaOfTriangle( 10, 5 );