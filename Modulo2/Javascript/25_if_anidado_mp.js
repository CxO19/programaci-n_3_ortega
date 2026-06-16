const prompt = require("prompt-sync")();

const agenteAutenticado = true;
const rangoAgente = "vendedor";
const operacion = "eliminar_propiedad";

if (agenteAutenticado) {
  console.log(`Sesion iniciada. Agente: ${rangoAgente}`);

  if (rangoAgente === "gerente") {
    console.log("Acceso administrativo total.");

    if (operacion === "eliminar_propiedad") {
      console.log("Propiedad eliminada de la base de datos.");
    }
  } else if (rangoAgente === "vendedor") {
    console.log("Acceso comercial limitado.");

    if (operacion === "eliminar_propiedad") {
      console.log("Error: Solo los gerentes pueden eliminar registros.");
    } else {
      console.log(`Ejecutando operacion: ${operacion}`);
    }
  } else {
    console.log("Perfil no reconocido.");
  }

} else {
  console.log("Acceso denegado. Por favor ingrese sus credenciales.");
}

const propietario = "Mateo";
const telefono = "0999999999";
const codigoPropiedad = "ID12";
const MIN_ID = 5;

if (propietario.trim().length === 0) {
  console.log("Error: El nombre del propietario es obligatorio.");
} else {
  console.log(`Propietario registrado: ${propietario}`);

  if (telefono.length < 10) {
    console.log("Error: El telefono debe tener 10 digitos.");
  } else {
    console.log(`Telefono verificado: ${telefono}`);

    if (codigoPropiedad.length < MIN_ID) {
      console.log(`Error: El codigo de propiedad debe tener al menos ${MIN_ID} caracteres.`);
      console.log(`Longitud actual: ${codigoPropiedad.length}`);
    } else {
      console.log("Codigo valido. Registro de inmueble completado.");
    }
  }
}

const tipoPropiedad = "oficina"; // "casa", "oficina", "terreno"
const esPreventa = true;
const valorBase = 85000;

let valorFinal = valorBase;
let detalleCobro = "";

if (tipoPropiedad === "oficina") {
  const alicuota = valorBase * 0.12;
  valorFinal = valorBase + alicuota;
  detalleCobro = "IVA 12% por inmueble comercial";

  if (esPreventa) {
    const descuento = valorFinal * 0.10;
    valorFinal -= descuento;
    detalleCobro += " + 10% descuento preventa";
  }

} else if (tipoPropiedad === "casa") {
  if (esPreventa) {
    valorFinal = valorBase * 0.95; 
    detalleCobro = "5% descuento por reserva anticipada";
  } else {
    valorFinal = valorBase;
    detalleCobro = "Precio de mercado actual";
  }

} else if (tipoPropiedad === "terreno") {
  valorFinal = valorBase;
  detalleCobro = "Terreno exonerado de impuestos municipales";
}

console.log(`Tipo: ${tipoPropiedad}`);
console.log(`Valor base: $${valorBase.toFixed(2)}`);
console.log(`Detalle: ${detalleCobro}`);
console.log(`Valor final: $${valorFinal.toFixed(2)}`);

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