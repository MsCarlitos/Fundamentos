// 2- Convertir de kilómetros a millas, sabiendo que: (1 kilómetro es igual a 0.62 millas )
// Ejemplo: 10 kilómetros = 6.21 millas

export function kilometresToMiles( kilometer:number ) {
    let miles = kilometer * 0.62;
    return console.log( kilometer + ' kilometros = ' + miles + ' millas.');
}

kilometresToMiles( 10 );
