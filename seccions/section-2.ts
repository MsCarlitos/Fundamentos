
let numberOfLine = 1
console.log('Linea #', numberOfLine)
console.log('Linea #', numberOfLine += 1)
console.log('Linea #', numberOfLine += 1)
console.log('Linea #', numberOfLine += 1)

console.log("----------")
let numberOfLine2 = 1
export function increaseLineNumber(){
    numberOfLine2 += 3;
};

increaseLineNumber()
console.log('Linea #', numberOfLine2)
increaseLineNumber()
console.log('Linea #', numberOfLine2)
increaseLineNumber()
console.log('Linea #', numberOfLine2)
increaseLineNumber()
console.log('Linea #', numberOfLine2)


console.log("----------")

let numberOfLine3 = 0
export function printLineNumber(){
    numberOfLine3 += 1;
    console.log('Linea #', numberOfLine3);
};

printLineNumber();
printLineNumber();
printLineNumber();
printLineNumber();
