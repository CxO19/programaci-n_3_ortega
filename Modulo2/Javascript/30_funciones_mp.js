const prompt = require("prompt-sync")();

//Funcion declarada
function saludoSistema(){
    console.log("Sistema de Gestion Inmobiliaria Activo");
}
saludoSistema();

//Funcion expresada
const mostrarPrecioBase = function(){
    console.log("El costo base de la comision es del 3%");
};
mostrarPrecioBase();

//Funcion Flecha
const verificarDisponibilidad = () => {
    console.log("Verificando estado de la propiedad en la base de datos...");
};
verificarDisponibilidad();

//Funcion anonima
setTimeout(function(){
    console.log("Actualizando tasas de interes de mercado...");
}, 1000);

//Funcion con parametros
function registrarPropietario(nombre){
    console.log("Propietario registrado: " + nombre);
}
registrarPropietario("Pedro")

function sumarAreas(a, b){
    return a + b;
}
resultado = sumarAreas(45, 5);
console.log(`Metraje total: ${resultado}m2`);

//Sintaxis: Funcion nombre(parametros) {cuerpo}
function mostrarUbicacion(sector){
    return `Inmueble localizado en el sector de: ${sector}!`;
}

console.log(mostrarUbicacion("Ana")); // Conservando el argumento original por consistencia


//1

const elecompra = prompt("cuanto compró: ");
const compra = parseInt(elecompra);
const esMiembro1 = true;

if (compra > 50){

    if (esMiembro1 === true) {
        console.log("Descuento Especial")
    } else {
        console.log("Descuento Normal")
    }
} else {
    console.log("No aplica descuento")

}