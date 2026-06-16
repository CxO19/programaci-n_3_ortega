const prompt = require("prompt-sync")();

console.log("ciclo for")
for (let i = 0; i < 5; i++) {
    console.log(i);
}

const sectores = ["Cumbayá", "La Carolina", "Ponceano"];
for (let i = 0; i < sectores.length; i++) {
    console.log(sectores[i]);
    const sector = sectores[i];
    console.log(sector);
}

for (let sector of sectores) {
    console.log(sector);
}


// Ejemplo — reporte de inventario inmobiliario con alertas por unidades disponibles
const inventarioCasas = [
  { codigo: "C01", tipo: "Suite",       disponibles: 2  },
  { codigo: "C02", tipo: "Oficina",     disponibles: 15 },
  { codigo: "C03", tipo: "Terreno",     disponibles: 0  },
  { codigo: "C04", tipo: "Departamento",disponibles: 7  },
  { codigo: "C05", tipo: "Local",       disponibles: 1  },
];

const DISPONIBILIDAD_CRITICA = 3;

console.log("=== Reporte de unidades disponibles ===");
console.log(`${"#".padEnd(4)} ${"Código".padEnd(6)} ${"Inmueble".padEnd(12)} Stock  Estado`);
console.log("─".repeat(48));

for (let i = 0; i < inventarioCasas.length; i++) {
  const item = inventarioCasas[i];
  const numero = String(i + 1).padStart(2, "0");

  let estado;
  if (item.disponibles === 0) {
    estado = "AGOTADO";
  } else if (item.disponibles <= DISPONIBILIDAD_CRITICA) {
    estado = "CRÍTICO";
  } else {
    estado = "Normal";
  }

  console.log(
    `${numero}.  ${item.codigo.padEnd(6)} ${item.tipo.padEnd(12)} ` +
    `${String(item.disponibles).padStart(3)}u   ${estado}`
  );
}


// Ejemplo — tabla de amortización para financiamiento de un bien raíz
const valorPropiedad = 1000;
const tasaMensual = 0.02;    // 2% mensual
const numeroCuotas = 5;
const cuotaMensual = valorPropiedad / numeroCuotas;

let saldoPendiente = valorPropiedad;

console.log("=== Tabla de amortización ===");
console.log(`Valor: $${valorPropiedad} | Tasa: ${tasaMensual * 100}% mensual | Cuotas: ${numeroCuotas}`);
console.log("─".repeat(55));
console.log("Cuota  Capital     Interes    Total       Saldo");
console.log("─".repeat(55));

for (let cuota = 1; cuota <= numeroCuotas; cuota++) {
  const interesMes = saldoPendiente * tasaMensual;
  const totalCuota = cuotaMensual + interesMes;
  saldoPendiente -= cuotaMensual;

  const estado = saldoPendiente <= 0 ? " <- Cancelado" : "";

  console.log(
    `  ${String(cuota).padStart(2)}     ` +
    `$${cuotaMensual.toFixed(2).padStart(7)}  ` +
    `$${interesMes.toFixed(2).padStart(7)}  ` +
    `$${totalCuota.toFixed(2).padStart(7)}  ` +
    `$${Math.max(0, saldoPendiente).toFixed(2).padStart(7)}${estado}`
  );
}


// Ejemplo — resumen de cierres por agente inmobiliario
const reporteVentas = [
  { vendedor: "Carlos",  monto: 125000, region: "Norte" },
  { vendedor: "María",   monto: 280000, region: "Sur"   },
  { vendedor: "Luis",    monto: 95000,  region: "Norte" },
  { vendedor: "Sofía",   monto: 450000, region: "Valles" },
  { vendedor: "Roberto", monto: 85000,  region: "Este"  },
];

const META_INDIVIDUAL = 150000;
let totalGeneral = 0;
let vendedoresEnMeta = 0;

console.log("=== Resumen de ventas ===");

for (const venta of reporteVentas) {
  totalGeneral += venta.monto;

  const cumpleMeta = venta.monto >= META_INDIVIDUAL;
  if (cumpleMeta) {
    vendedoresEnMeta++;
  }

  const indicador = cumpleMeta ? "[LOGRADO]" : "[PENDIENTE]";
  console.log(
    `${indicador.padEnd(11)} ${venta.vendedor.padEnd(8)} ` +
    `[${venta.region.padEnd(6)}]  ` +
    `$${venta.monto.toLocaleString()}`
  );
}

console.log("─".repeat(38));
console.log(`Total general:    $${totalGeneral.toLocaleString()}`);
console.log(`En meta (>=$${META_INDIVIDUAL.toLocaleString()}): ${vendedoresEnMeta}/${reporteVentas.length} asesores`);


// Ejemplo — ranking de sectores más buscados
const sectoresTop = ["Cumbayá", "La Carolina", "Tumbaco", "Nayón", "Ponceano"];

console.log("=== Top 5 sectores con mayor plusvalía ===");

for (const [posicion, nombreSector] of sectoresTop.entries()) {
  const medalla =
    posicion === 0 ? "TOP 1 -" :
    posicion === 1 ? "TOP 2 -" :
    posicion === 2 ? "TOP 3 -" : `${posicion + 1}.    `;

  console.log(`${medalla} ${nombreSector}`);
}


// Ejemplo — mostrar ficha técnica de un inmueble
const fichaPropiedad = {
  ubicacion:    "Quito, EC",
  moneda:       "USD",
  areaTotal:    "120m2",
  habitaciones: 3,
  parqueadero:  true,
  bodega:       false
};

console.log("=== Ficha técnica actual del inmueble ===");

for (const clave in fichaPropiedad) {
  const valor = fichaPropiedad[clave];

  const valorMostrado = typeof valor === "boolean"
    ? (valor ? "Incluido" : "No tiene")
    : valor;

  console.log(`  ${clave.padEnd(14)}: ${valorMostrado}`);
}


// break — buscar la primera propiedad libre para asignación inmediata
const inmuebles = [
  { ref: "H001", estado: "reservado" },
  { ref: "H002", estado: "vendido" },
  { ref: "H003", estado: "libre" }, // <- primera propiedad libre
  { ref: "H004", estado: "libre" },
];

for (const inmueble of inmuebles) {
  if (inmueble.estado === "libre") {
    console.log(`Propiedad asignada para visita: ${inmueble.ref} (estado: ${inmueble.estado})`);
    break; 
  }
}


// continue — procesar solo cierres de contratos aprobados
const operaciones = [
  { id: "OP01", monto: 500,  estado: "aprobada"  },
  { id: "OP02", monto: 200,  estado: "rechazada" },
  { id: "OP03", monto: 850,  estado: "aprobada"  },
  { id: "OP04", monto: 120,  estado: "pendiente" },
  { id: "OP05", monto: 1200, estado: "aprobada"  },
];

let totalAprobado = 0;

console.log("=== Procesando operaciones inmobiliarias aprobadas ===");

for (const op of operaciones) {
  if (op.estado !== "aprobada") {
    console.log(`  Omitida: ${op.id} (${op.estado})`);
    continue; 
  }

  totalAprobado += op.monto;
  console.log(`  Validada: ${op.id}: $${op.monto}`);
}

console.log(`Total aprobado: $${totalAprobado}`);