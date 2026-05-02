const prompt = require("prompt-sync")();

const estadoInmueble = "en_venta";

switch (estadoInmueble) {
  case "disponible":
    console.log("Propiedad lista para visitas. Documentacion en regla.");
    break;
  case "reservado":
    console.log("Deposito de reserva recibido. Tramites legales en curso.");
    break;
  case "en_venta":
    console.log("Anuncio publicado. Gestionando ofertas de interesados.");
    break;
  case "vendido":
    console.log("Transaccion finalizada. Propiedad fuera del inventario.");
    break;
  case "mantenimiento":
    console.log("Propiedad en remodelacion. No disponible para mostrar.");
    break;
  default:
    console.log(`Estado no registrado: "${estadoInmueble}". Verificar con sistemas.`);
}

const pisoEdificio = 5;

switch (pisoEdificio) {
  case 0:
    console.log("Planta Baja: Recepcion y locales comerciales.");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Pisos inferiores: Oficinas administrativas.");
    break;
  case 5:
  case 6:
  case 7:
    console.log("Pisos altos: Departamentos residenciales.");
    break;
  case 8:
    console.log("Penthouse: Acceso restringido.");
    break;
  default:
    console.log("El edificio solo tiene 8 niveles.");
}

const tipoZona = "residencial";
let factorPlusvalia;
let descripcionZona;

switch (tipoZona) {
  case "residencial":
  case "exclusiva":
    factorPlusvalia = 0.08;
    descripcionZona = "Alta plusvalia (Residencial)";
    break;
  case "comercial":
  case "mixta":
    factorPlusvalia = 0.05;
    descripcionZona = "Plusvalia moderada (Comercial)";
    break;
  case "industrial":
  case "rural":
    factorPlusvalia = 0.02;
    descripcionZona = "Plusvalia estable (Baja densidad)";
    break;
  default:
    factorPlusvalia = 0.03;
    descripcionZona = "Ajuste estandar de mercado";
}

const valorInicial = 100000;
const incremento = valorInicial * factorPlusvalia;
console.log(`Ubicacion: ${tipoZona}`);
console.log(`${descripcionZona}: $${incremento.toFixed(2)}`);
console.log(`Valor proyectado (1 año): $${(valorInicial + incremento).toFixed(2)}`);