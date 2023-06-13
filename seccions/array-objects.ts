interface Person {
    name: string;
    age: number,
    isActive: boolean;
}

let carlos: Person = {
    age: 27,
    isActive: true,
    name: 'Carlos',
}

let angel: Person = {
    age: 21,
    isActive: false,
    name: 'Angel',
}

let alan: Person = {
    age: 17,
    isActive: true,
    name: 'Alan',
}

let people: Person[] = [ carlos, angel, alan ];

for (let i = 0; i < people.length; i++) {
    let person = people[i]
    if( person.isActive ) console.log( person.name, + ' ' + person.age + ' ' + person.isActive );
    
}
