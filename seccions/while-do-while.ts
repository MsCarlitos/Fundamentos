
export let gasTank = 50;

while( gasTank > 0 ){
    console.log('Gasolina restante: ', gasTank) 
    gasTank --;
}
console.log('Ya no hay gasolina.');

do{
    console.log('Gasolina restante: ', gasTank) 
    gasTank --;
} while( gasTank > 0 )

console.log('Ya no hay gasolina.');