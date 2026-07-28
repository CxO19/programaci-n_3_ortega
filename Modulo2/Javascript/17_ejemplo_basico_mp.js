// index.js
const prompt = require("prompt-sync")();

console.log("=== Calculadora Inmobiliaria: Costo por Metro Cuadrado ===");

const precioTexto = prompt("Precio total del inmueble: ");
const areaTexto = prompt("Metros cuadrados (m²): ");

const precioTotal = parseFloat(precioTexto) || 0;
const areaTotal = parseFloat(areaTexto) || 0;

const costoPorMetro = areaTotal !== 0 ? precioTotal / areaTotal : 0;
const impuestoEstimado = precioTotal * 0.05;
const precioFinal = precioTotal + impuestoEstimado;

console.log(`
Resumen de inversión para la propiedad:
  Precio Base:         $${precioTotal}
  Área Total:          ${areaTotal} m²
  Costo por m²:        $${costoPorMetro.toFixed(2)}
  Impuesto (5%):       $${impuestoEstimado}
  Inversión Total:     $${precioFinal}
`);