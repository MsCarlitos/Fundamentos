
export let weekDay: number = 1;

if (weekDay <= 0 ) {
    throw new Error('Dia de la semana no permitido');
}

switch (weekDay) {
    case 1:
        console.log('Es Lunes');
        break;
    case 2:
        console.log('Es Martes');
        break;
    case 3:
        console.log('Es Miercoles');
        break;
    default:
        console.log('No es Lunes, Ni Martes, Ni Miercoles');
        break;
}