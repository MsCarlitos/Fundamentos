import {
    addTwoNumbers,
    divideTwoNumbers,
    substractTwoNumbers,
    timesTwoNumbers 
} from "../helpers/math-helpers";

function greet( name: string = 'Mundo' ){
    console.log('Hola', name);
}

let firstName: string = 'Carlos';
greet(firstName);

let num1: number = 10;
let num2: number = 20;
let totalAdd: number        = addTwoNumbers(num1, num2);
let totalSubstract: number  = substractTwoNumbers(num1, num2);
let totalTimes: number      = timesTwoNumbers(num1, num2);
let totalDivide: number     = divideTwoNumbers(num1, num2);

console.log('Total de la suma: ', totalAdd);
console.log('Total de la resta: ', totalSubstract);
console.log('Total de la multiplicacion: ', totalTimes);
console.log('Total de la division: ', totalDivide);
