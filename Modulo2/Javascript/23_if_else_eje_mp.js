const prompt = require("prompt-sync")();

const horaApertura = 9; // hora en formato 24h

if (horaApertura < 12) {
  console.log("Buenos días. Oficina inmobiliaria abierta (Turno mañana).");
} else {
  console.log("Buenas tardes. Oficina inmobiliaria abierta (Turno tarde).");
}

const avaluoPropiedad = 120000;
const reservaMinima = 5000;
const PAGO_INICIAL = 6000;
const ESTADO_PROPIEDAD = "Disponible";

const ratioReserva = PAGO_INICIAL / avaluoPropiedad;

if (PAGO_INICIAL >= reservaMinima && ESTADO_PROPIEDAD === "Disponible") {
  console.log("Reserva confirmada.");
  console.log(`Porcentaje de abono inicial: ${(ratioReserva * 100).toFixed(1)}%`);
} else {
  console.log("Reserva rechazada.");
  console.log(`Monto mínimo de reserva: $${reservaMinima}`);
  console.log(`Estado actual: ${ESTADO_PROPIEDAD}`);
}

const pinCajaFuerte = "0000";
const pinIngresado = "0000";
let bloqueosContador = 0;
const LIMITE_BLOQUEO = 3;

if (pinIngresado === pinCajaFuerte) {
  console.log("Caja fuerte abierta.");
} else {
  bloqueosContador++;
  const restantes = LIMITE_BLOQUEO - bloqueosContador;
  console.log(`PIN incorrecto. Intentos de seguridad restantes: ${restantes}`);
}

//Ejercicio 1

const prodcompra = prompt("Productos comprados: ");
const compra = parseInt(prodcompra); 

if (compra >= 10) { 
    console.log("Descuento Aplicado");
} else {
    console.log("Sin descuento");
}


//2

const contrabien = "1234"; 
const intento = prompt("Contraseña es: ");

if (intento === contrabien) {
    console.log("Acceso Permitido");
} else {
    console.log("Acceso Denegado");
}