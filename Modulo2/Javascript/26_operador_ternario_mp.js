const prompt = require("prompt-sync")();

// Sintaxis: condicion ? valor_si_true : valor_si_false
const disponibilidadInmueble = 1;
const estadoPublicacion = disponibilidadInmueble > 0 ? "Activa" : "Pausada";
console.log(`Estado: ${estadoPublicacion}`);   // Estado: Activa

// Dentro de template literals — muy útil
const canonArriendo = 450.00;
const mesesContrato = 12;
const totalContrato = canonArriendo * mesesContrato;

console.log(`Contrato: ${mesesContrato} meses x $${canonArriendo}`);
console.log(`Total anual: $${totalContrato.toFixed(2)}`);
console.log(`Comision incluida: ${totalContrato >= 5000 ? "Si" : "No (aplica recargo)"}`);

// Asignación de estado de pago de alicuotas
const saldoAlicuota = -50;
const estadoPago = saldoAlicuota >= 0 ? "Solvente" : "Mora";
const nivelRiesgo = saldoAlicuota >= 0 ? "bajo" : "alto";
console.log(`[RIESGO ${nivelRiesgo.toUpperCase()}] Estado: ${estadoPago}`);

// No anidar ternarios — difícil de leer y de mantener
// const zona = metros < 50 ? "pequeña" : metros < 100 ? "mediana" : "grande";

// Mejor usar if/else if para tres o más casos
const metrosCuadrados = 120;
let clasificacionEspacio;

if (metrosCuadrados >= 150) {
  clasificacionEspacio = "Premium";
} else if (metrosCuadrados >= 80) {
  clasificacionEspacio = "Estandar";
} else {
  clasificacionEspacio = "Compacto";
}

console.log(`Clasificacion: ${clasificacionEspacio}`);