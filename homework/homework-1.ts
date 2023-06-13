// 1- Convertir de Libras a Kilogramos. ( 1 libra = 0.453592 Kilogramos )
// Ejemplo: 150 libras = 68.0388 kilogramos

export function poundsToKilograms( pound:number ) {
    let kilogram = pound * 0.453592;
    return console.log( pound + ' libras = ' + kilogram + ' kilogramos.');
}

poundsToKilograms( 150 );
