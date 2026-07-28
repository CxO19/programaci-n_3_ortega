// calculoInmobiliario.js
const prompt = require("prompt-sync")();

// Funciones puras para cada cálculo financiero inmobiliario
const calcularPrecioTotal   = (precioM2, area) => precioM2 * area;
const calcularDiferencia    = (presupuesto, costo) => presupuesto - costo;
const calcularComisionAgente = (valorPropiedad, tasa) => valorPropiedad * tasa;
const calcularFinanciamiento = (monto, meses) => {
  if (meses === 0) return "Error: El plazo en meses no puede ser cero";
  return monto / meses;
};

// Función de orden superior que agrupa todas las operaciones financieras
function procesarCalculo(a, b, tipoCalculo) {
  const operaciones = { 
    "m2": calcularPrecioTotal, 
    "-": calcularDiferencia, 
    "*": calcularComisionAgente, 
    "/": calcularFinanciamiento 
  };
  
  const fn = operaciones[tipoCalculo];
  if (!fn) return `Operacion "${tipoCalculo}" no reconocida en el sistema`;
  return fn(a, b);
}

// Función para leer un valor numérico válido del usuario
function leerMetrica(mensaje) {
  while (true) {
    const entrada = prompt(mensaje);
    const numero  = parseFloat(entrada);
    if (!isNaN(numero)) return numero;
    console.log("Monto o cantidad no valida, ingresa un numero.");
  }
}

// Programa principal - Simulador de Gestión Inmobiliaria
console.log("=== Sistema de Calculos Inmobiliarios ===");

const a = leerMetrica("Primer valor (Ej: Precio por m², Presupuesto o Valor Propiedad): ");
const b = leerMetrica("Segundo valor (Ej: Area m², Costo Inmueble, Tasa comision o Meses plazo): ");

console.log("\nOpciones de calculo:");
console.log("  m2 : Multiplicar Precio por Metro Cuadrado");
console.log("  -  : Restar montos (Calcular saldo o diferencia)");
console.log("  * : Calcular porcentaje de comision o impuesto");
console.log("  /  : Dividir para cuotas mensuales fijas");

const operacion = prompt("Selecciona una opcion (m2, -, *, /): ");
const resultado = procesarCalculo(a, b, operacion);

console.log("\n=== Resultado del Analisis ===");
console.log(`Metricas ingresadas: [${a}] y [${operacion}] y [${b}] = ${typeof resultado === "number" ? "$" + resultado.toFixed(2) : resultado}`);