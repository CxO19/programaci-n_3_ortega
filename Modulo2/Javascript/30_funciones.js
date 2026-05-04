const prompt = require("prompt-sync")();

//Funcion declarada
function saludo(){
    console.log("Hello world")
}
saludo()

//Funcion expresada
const saludarHola = function(){
    console.log("Hola con funcion expresada");
}
saludarHola();

//Funcion Flecha
const saludosFlecha=()=>{
    console.log("Hello con funcion flecha");
}
saludosFlecha();

//Funcion anonima
setTimeout(function(){
    console.log("Ejecutando...")
},1000)

//Funcion con parametros
function saludarConParametros(nombre){
    console.log("Hola"+nombre)
}
saludarConParametros("Pedro")

function sumar(a,b){
    return a+b;
}
resultado=suma(45,5);
console.log(resultado);

//Sintaxis: Funcrion nombre(parametros) {cuerpo}
function saludar(nombre){
    return 'Hola, $(nombre)!';
}

console.log(saludar("Ana")); //"Hola,Ana!"