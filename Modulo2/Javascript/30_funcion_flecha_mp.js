const prompt = require("prompt-sync")();

// Sintaxis completa
const calcularComision = (valorVenta, porcentaje) => {
  return valorVenta * porcentaje;
};

// Retorno implícito — cuando el cuerpo es una sola expresión
// se omiten las llaves y la palabra return
const calcularComisionCorto = (valorVenta, porcentaje) => valorVenta * porcentaje;

// Un solo parámetro — se pueden omitir los paréntesis
const calcularAlicuota = area => area * 1.5;

// Sin parámetros — los paréntesis son obligatorios
const mensajeBienvenida = () => "Sistema de Gestion Inmobiliaria Activo";

console.log(calcularComision(200000, 0.03));       // 6000
console.log(calcularComisionCorto(200000, 0.03));  // 6000
console.log(calcularAlicuota(120));                 // 180
console.log(mensajeBienvenida());                   // "Sistema de Gestion Inmobiliaria Activo"


const par = n => n % 2 ==0;
console.log(par(4));

function generarContrato(propietario = "Cliente Final", tipoContrato = "Arriendo") {
  return `Contrato de ${tipoContrato} para: ${propietario}!`;
}

console.log(generarContrato());                                     // "Contrato de Arriendo para: Cliente Final!"
console.log(generarContrato("Ana"));                                // "Contrato de Arriendo para: Ana!"
console.log(generarContrato("Ana", "Venta Exclusiva"));             // "Contrato de Venta Exclusiva para: Ana!"

// También funciona con arrow functions
const calcularInteresHipotecario = (capital, tasaAnual = 0.08) => capital * tasaAnual;

console.log(calcularInteresHipotecario(100000));     // 8000 (100000 * 0.08)
console.log(calcularInteresHipotecario(100000, 0.10)); // 10000 (100000 * 0.10)


//Area del triangulo

const triangulo1 = (base, altura) => (base * altura) / 2;
console.log(triangulo1(8, 7));



// ...valores captura todos los argumentos en un array
function consolidarAvaluoInmuebles(...valores) {
  let total = 0;
  for (const v of valores) {
    total += v;
  }
  return total;
}

console.log(consolidarAvaluoInmuebles(120000, 85000, 65000));          // 270000
console.log(consolidarAvaluoInmuebles(150000, 210000));                // 360000
console.log(consolidarAvaluoInmuebles());                              // 0

// Se puede combinar con parámetros normales
// el rest SIEMPRE debe ser el último parámetro
function registrarHistorial(idPropiedad, ...eventos) {
  for (const e of eventos) {
    console.log(`[Propiedad ${idPropiedad}] ${e}`);
  }
}

registrarHistorial("P-404", "Publicada", "Visita agendada", "Vendida");
// [Propiedad P-404] Publicada
// [Propiedad P-404] Visita agendada
// [Propiedad P-404] Vendida

//datos de una persona


function datos(info, ...informacion) {
    for (const msg of informacion) {
        console.log(`[${info}] ${msg}`);
    }
}

datos ("Datos", "Mateo", "Ortega", "19")



const preciosPropiedades = [120000, 450000, 85000, 230000, 150000];

// Sin spread — Math.max no acepta un array directamente
console.log(Math.max(preciosPropiedades));       // NaN

// Con spread — expande el array en argumentos
console.log(Math.max(...preciosPropiedades));    // 450000
console.log(Math.min(...preciosPropiedades));    // 85000

// Combinar arrays
const casasNorte = ["Casa Cumbayá", "Suite Tumbaco"];
const casasSur = ["Departamento Centro", "Local Sur"];
const catalogoCompleto = [...casasNorte, ...casasSur];
console.log(catalogoCompleto);   // ["Casa Cumbayá", "Suite Tumbaco", "Departamento Centro", "Local Sur"]

// Copiar un array (copia superficial)
const inventarioOriginal = ["ID-101", "ID-102", "ID-103"];
const copiaInventario = [...inventarioOriginal];
copiaInventario.push("ID-104");
console.log(inventarioOriginal);   // ["ID-101", "ID-102", "ID-103"] — no se modifica
console.log(copiaInventario);      // ["ID-101", "ID-102", "ID-103", "ID-104"]

// Spread con objetos
const caracteristicasBase = { sector: "La Carolina", parqueadero: true };
const departamentoCompleto = { ...caracteristicasBase, habitaciones: 3 };
console.log(departamentoCompleto);   // { sector: 'La Carolina', parqueadero: true, habitaciones: 3 }





// Una función sin return devuelve undefined implícitamente
function procesarDocumentos() {
  const estadoIntercambio = "Firmado";
  // no hay return
}
console.log(procesarDocumentos());   // undefined

// return detiene la ejecución de la función
function esRentable(precio, canonMensual) {
  if ((canonMensual * 12) / precio >= 0.05) {
    return true;    // sale aquí si el rendimiento es mayor o igual al 5%
  }
  return false;     // solo llega aquí si es menor al 5%
}

// Forma más concisa — devolver la expresión directamente
const esRentableCorto = (precio, canonMensual) => ((canonMensual * 12) / precio) >= 0.05;

console.log(esRentable(100000, 500));         // true
console.log(esRentableCorto(200000, 400));    // false



// procesarTransaccion recibe dos valores y una función (callback)
function procesarTransaccion(monto, tasa, operacionFinanciera) {
  return operacionFinanciera(monto, tasa);
}

const calcularCredito = (m, t) => m + (m * t);
const calcularImpuestoMuni = (m, t) => m * t;
const calcularDescuentoContado = (m, t) => m - (m * t);

console.log(procesarTransaccion(150000, 0.08, calcularCredito));        // 162000
console.log(procesarTransaccion(150000, 0.02, calcularImpuestoMuni));   // 3000
console.log(procesarTransaccion(150000, 0.05, calcularDescuentoContado)); // 142500

// Callback anónimo (arrow function inline)
console.log(procesarTransaccion(100000, 1.12, (m, t) => m * t));  // 112000



const sucursalInmobiliaria = "Norte - Quito";   // accesible en todo el archivo

function verificarScope() {
  const agenteAsignado = "Carlos Proaño";   // solo accesible dentro de esta función
  console.log(sucursalInmobiliaria);         // accesible la variable global
  console.log(agenteAsignado);               // accesible
}

verificarScope();
// console.log(agenteAsignado);         // ReferenceError — agenteAsignado no existe aquí

// Block scope — const y let respetan los bloques { }
{
  const codigoSeguridadCaja = "KEY-9988";
  console.log(codigoSeguridadCaja);   // accesible
}
// console.log(codigoSeguridadCaja);  // ReferenceError

// var NO respeta el block scope — otra razón para no usarlo
{
  var codigoGlobalizado = "ACCESO-LIBRE";
}
console.log(codigoGlobalizado);   // "ACCESO-LIBRE" — comportamiento inesperado