const precioInmueble = 185000;
const MINIMO_PARA_BONO = 150000;
const PORCENTAJE_BONO = 0.05;

let precioFinal = precioInmueble;

if (precioInmueble >= MINIMO_PARA_BONO) {
  const bono = precioInmueble * PORCENTAJE_BONO;
  precioFinal = precioInmueble - bono;
  console.log(`Bono de descuento aplicado: $${bono.toFixed(2)}`);
}

console.log(`Costo final del inmueble: $${precioFinal.toFixed(2)}`);


const metrosDisponibles = 45;
const UMBRAL_MINIMO_AREA = 50;

if (metrosDisponibles < UMBRAL_MINIMO_AREA) {
  console.log(`⚠️ Advertencia: El área es menor a ${UMBRAL_MINIMO_AREA}m². Espacio reducido.`);
}


const puntajeCredito = 650;
const PUNTAJE_MINIMO = 700;

if (puntajeCredito < PUNTAJE_MINIMO) {
  console.log("Crédito hipotecario denegado: El puntaje no alcanza el mínimo requerido.");
}

console.log("Evaluación de perfil finalizada.");



//Ejercicio 1
//Solicita el monto de una compra - Si el monto es mayor a 100 mensaje

const monto = 115;

if (monto > 100) {
    console.log("Aplica descuento");
}