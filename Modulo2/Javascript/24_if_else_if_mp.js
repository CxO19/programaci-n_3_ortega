const superficie = 120; // metros cuadrados

if (superficie >= 500) {
    console.log("🏰 Mansión / Quinta. Requiere mantenimiento especializado.");
} else if (superficie >= 200) {
    console.log("🏡 Casa amplia. Ideal para familias numerosas.");
} else if (superficie >= 90) {
    console.log("🏢 Departamento familiar. Tamaño estándar urbano.");
} else if (superficie >= 40) {
    console.log("🏠 Suite / Estudio. Espacio optimizado para solteros.");
} else {
    console.log("📦 Minisuite. Espacio muy reducido.");
}

const tiempoConstruccionAños = 12;
const PORCENTAJE_NUEVO = 0.02;
const PORCENTAJE_USADO = 0.05;
const PORCENTAJE_ANTIGUO = 0.10;
const PORCENTAJE_HISTORICO = 0.15;

let alicuotaMantenimiento;
let estadoInmueble;

if (tiempoConstruccionAños <= 2) {
    alicuotaMantenimiento = PORCENTAJE_NUEVO;
    estadoInmueble = "Nuevo";
} else if (tiempoConstruccionAños <= 10) {
    alicuotaMantenimiento = PORCENTAJE_USADO;
    estadoInmueble = "Usado (buen estado)";
} else if (tiempoConstruccionAños <= 30) {
    alicuotaMantenimiento = PORCENTAJE_ANTIGUO;
    estadoInmueble = "Antiguo — requiere remodelación";
} else {
    alicuotaMantenimiento = PORCENTAJE_HISTORICO;
    estadoInmueble = "Patrimonial / Histórico";
}

console.log(`Antigüedad: ${tiempoConstruccionAños} años`);
console.log(`Estado: ${estadoInmueble}`);
console.log(`Costo mantenimiento: ${(alicuotaMantenimiento * 100).toFixed(0)}% del valor anual`);


//1

const consumoEne = 500;

if (consumoEne <= 100) {
  console.log("Consumo bajo")
} else if (consumoEne <= 300){
  console.log("Consumo Medio")
} else {
  console.log("Consumo Alto")
}


const sueldoA = prompt("Tu sueldo es: ");
const sueldo = parseInt(sueldoA);

if (sueldo < 500) {
  console.log ("Sueldo basico")
} else if (sueldo >= 500 && sueldo <= 1000){
  console.log("Sueldo medio")
} else {
  console.log("sueldo basico")
}