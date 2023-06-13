

let employees: string[] = ['Carlos', 'Alberto', 'Jose']; 
let flowers: string[] = ['Rosa', 'Girasol', 'Lirio', 'Rosa Azul'];
let salaries: number[] = [1500, 2400, 3200];

// if( people[3] ){
//     console.log(people[1]);
// } 

for (let i = 0; i <= flowers.length-1; i++) {
    console.log(flowers[i]);
}

for (let i = 0; i <= employees.length-1 && i <= salaries.length-1; i++) {
    console.log(`${employees[i]} tiene un salario de ${salaries[i]}`);
}