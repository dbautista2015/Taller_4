//Punto 1
let peticion1=parseInt(prompt(`Quiere el huevo frito? \n 1. Si \n 2. No`));
switch (peticion1) {
    case 1:
        console.warn(`Frito el huevo con mantequilla`);
        break;
    case 2:
        console.warn(`Lo hago hervido, es más saludable :D`);
        break;
    default:
        break;
}
let peticion2=parseInt(prompt(`Quiere sal en el huevo? \n 1. Si \n 2. No`));
switch (peticion2) {
    case 1:
        console.warn(`Le echo sal al huevo y lo sirvo en el plato ... FIN`);
        break;
    case 2:
        console.warn(`Y lo sirvo en el plato... FIN`);
        break;
    default:
        break;
}

