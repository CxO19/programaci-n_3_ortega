const prompt = require("prompt-sync")();

const sector = prompt("Ingrese el sector del inmueble: ");
console.log(`Buscando propiedades en ${sector}...`);

const precioTexto = prompt("Ingrese el precio base: ");
const precio = parseInt(precioTexto, 10);

if (isNaN(precio)) {
  console.log("El precio ingresado no es un número válido.");
} else {
  console.log(`El presupuesto registrado es de $${precio}.`);
}