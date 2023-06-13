export function printMultiplicationTable(base: number, limit: number) {

    if( limit <= 0 ){
        return console.log('El limite no puede ser menor a cero');
    }

    for (let i = 1; i <= limit; i++) {
        console.log( base + ' x ' + i + ' = ' + base*i );
    }
}

// import { printMultiplicationTable } from "./helpers/print-multiplication-table";

printMultiplicationTable( 5, 15 );