//Punto 2
//pedir ingreso del dinero, nombre cliente
// mostrar el helado más costoso con el dinero que tienen
let compras = [];
let precios= [['Bonais',400],['Palito de helado de agua',1000],['Palito helado de crema',2200],['Bombón helado con arequipe',1500],['Bombón helado con chispas de chocolate',2500],['Bombón helado de fresa',2800],['Medio litro de helado',2000]];
let clientes=parseInt(prompt("Ingrese el numero de clientes a facturar:"));
for(let i=0; i<clientes; i++) {
    let nombre = prompt("Ingrese nombre del cliente");
    let valor = parseInt(prompt("Ingrese dinero del cliente"));
    compras.push([nombre,valor]);
}
for(let i=0; i<compras.length; i++) {
    let posicionGanador= 0;
    let menorPrecio= (compras[i][1]- precios[0][1]);//Calculando la primera diferencia
    for(let j=1; j<precios.length; j++) {
        let precioComparar=(compras[i][1]- precios[j][1]);
       if(menorPrecio>precioComparar && precioComparar>=0){ //Ese va ganando
        menorPrecio=precioComparar;
        posicionGanador=j;
       }
    }
    let mensaje="El cliente: " + compras[i][0] + " puede comprar " + precios[posicionGanador][0] + " y le sobran $" +  (compras[i][1]- precios[posicionGanador][1]) ;
    console.log(mensaje) 
}

console.log(compras);

