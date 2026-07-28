const horaCierre = 18; // hora en formato 24h

if (horaCierre < 12) {
  console.log("Mañana: Atención en oficina.");
} else {
  console.log("Tarde: Visitas a propiedades en campo.");
}

const precioVenta = 95000;
const comisionAgente = 2850;
const COMISION_MINIMA = 3000;
const ES_PROPIEDAD_VIP = false;

if (comisionAgente >= COMISION_MINIMA || ES_PROPIEDAD_VIP) {
  console.log("Contrato de corretaje aceptado.");
} else {
  console.log("Contrato rechazado: Comisión por debajo del umbral mínimo.");
  console.log(`Diferencia requerida: $${COMISION_MINIMA - comisionAgente}`);
}

const codigoPuertaIngresado = "5544";
const codigoPuertaCorrecto = "5544";
let alertasSeguridad = 0;
const LIMITE_ALERTAS = 2;

if (codigoPuertaIngresado === codigoPuertaCorrecto) {
  console.log("Cerradura inteligente desbloqueada. Puede ingresar.");
} else {
  alertasSeguridad++;
  const intentosParaBloqueo = LIMITE_ALERTAS - alertasSeguridad;
  console.log(`Código erróneo. Bloqueo de seguridad en: ${intentosParaBloqueo} intentos.`);
}