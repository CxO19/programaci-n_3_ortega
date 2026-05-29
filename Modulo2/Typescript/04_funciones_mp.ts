// problema-sin-tipos.ts

// JavaScript — acepta cualquier cosa sin avisar
function calcularPrecioFinal1(precioM2, area) {
  return precioM2 + area;
}

console.log(calcularPrecioFinal1(5, 3));       // 8   ✅
console.log(calcularPrecioFinal1("5", 3));     // "53" 😕 concatenó en lugar de sumar
console.log(calcularPrecioFinal1(5));          // NaN  😕 area es undefined



// solucion-con-tipos.ts

// TypeScript — avisa antes de ejecutar
function calcularPrecioFinal(precioM2: number, area: number): number {
  return precioM2 + area;
}

console.log(calcularPrecioFinal(5, 3));     // 8   ✅
// calcularPrecioFinal("5", 3)  → ❌ Error: 'string' no es 'number'
// calcularPrecioFinal(5)       → ❌ Error: falta el argumento 'area'



// funciones-basicas.ts

// Recibe dos números, devuelve número
function calcularComision(valorPropiedad: number, tasa: number): number {
  return valorPropiedad * tasa;
}

// Recibe un string, devuelve string
function registrarSector(nombreSector: string): string {
  return `Sector asignado: ${nombreSector}!`;
}

// Recibe un número, devuelve boolean
function esPisoPar(numeroPiso: number): boolean {
  return numeroPiso % 2 === 0;
}

// No devuelve nada — tipo void
function mostrarAlerta(mensaje: string): void {
  console.log(`[INFO] ${mensaje}`);
}

console.log(calcularComision(4, 7));    // 28
console.log(registrarSector("Cumbayá")); // Sector asignado: Cumbayá!
console.log(esPisoPar(10));            // true
console.log(esPisoPar(7));             // false
mostrarAlerta("Todo listo");           // [INFO] Todo listo



// parametros-opcionales.ts

// ? hace el parámetro opcional — dentro puede ser undefined
// Necesitas el if para manejarlo de forma segura
function generarFicha(tipo: string, habitaciones?: number, sector?: string): string {
  let resultado = `Inmueble: ${tipo}`;

  if (habitaciones !== undefined) {
    resultado += ` de ${habitaciones} habitaciones`;
  }

  if (sector !== undefined) {
    resultado += `, ubicado en ${sector}`;
  }

  resultado += ".";
  return resultado;
}

console.log(generarFicha("Suite"));
console.log(generarFicha("Departamento", 3));
console.log(generarFicha("Departamento", 3, "La Carolina"));
// Inmueble: Suite.
// Inmueble: Departamento de 3 habitaciones.
// Inmueble: Departamento de 3 habitaciones, ubicado en La Carolina.

// Función de búsqueda — retorna null si no encuentra
function buscarInmueble(
  propiedades: string[],
  busqueda: string,
  exacto?: boolean
): string | null {
  for (const propiedad of propiedades) {
    if (exacto) {
      // Búsqueda exacta
      if (propiedad === busqueda) return propiedad;
    } else {
      // Búsqueda parcial (contiene el texto)
      if (propiedad.toLowerCase().includes(busqueda.toLowerCase())) {
        return propiedad;
      }
    }
  }
  return null;  // no encontró nada
}

const catalogo = ["Suite Cumbayá", "Oficina Centro", "Departamento La Carolina", "Casa Tumbaco"];

console.log(buscarInmueble(catalogo, "suite"));         // Suite Cumbayá
console.log(buscarInmueble(catalogo, "suite", true));   // null (exacto, no coincide)
console.log(buscarInmueble(catalogo, "Oficina Centro", true)); // Oficina Centro
console.log(buscarInmueble(catalogo, "terreno"));        // null




// parametros-por-defecto.ts

// Si no se pasa el argumento, usa el valor por defecto
// El tipo ya está garantizado — no necesitas verificar undefined
function calcularCostoReserva(
  montoBase: number,
  porcentajeImpuesto: number = 10,
  incluirGastosLegales: boolean = true
): number {
  let costoFinal = montoBase * (1 - porcentajeImpuesto / 100);

  if (incluirGastosLegales) {
    costoFinal *= 1.21;
  }

  return costoFinal;
}

const monto = 100;
console.log(calcularCostoReserva(monto));               // 108.9  (10% desc + gastos)
console.log(calcularCostoReserva(monto, 20));           // 96.8   (20% desc + gastos)
console.log(calcularCostoReserva(monto, 20, false));    // 80     (20% desc, sin gastos)

// Función con bucle y valor por defecto
function emitirAlertasPublicacion(codigo: string, veces: number = 3): void {
  for (let i = 1; i <= veces; i++) {
    console.log(`[${i}/${veces}] Recordatorio Propiedad ${codigo}`);
  }
}

emitirAlertasPublicacion("P-101");           // lo repite 3 veces
emitirAlertasPublicacion("P-502", 5);     // lo repite 5 veces




// rest-con-flujo.ts

// ...precios captura todos los argumentos en un array
function analizarValores(...precios: number[]): {
  min:   number;
  max:   number;
  suma:  number;
  media: number;
} {
  if (precios.length === 0) {
    return { min: 0, max: 0, suma: 0, media: 0 };
  }

  let min  = precios[0];
  let max  = precios[0];
  let suma = 0;

  for (const n of precios) {
    if (n < min) min = n;
    if (n > max) max = n;
    suma += n;
  }

  return {
    min,
    max,
    suma,
    media: suma / precios.length
  };
}

const analisis = analizarValores(8, 3, 15, 6, 12, 1, 9);
console.log(`Mínimo: ${analisis.min}`);
console.log(`Máximo: ${analisis.max}`);
console.log(`Suma:   ${analisis.suma}`);
console.log(`Media:  ${analisis.media.toFixed(2)}`);

// Función que filtra con rest y condición
function filtrarPreciosValidos(...precios: number[]): number[] {
  const resultado: number[] = [];
  for (const n of precios) {
    if (n > 0) resultado.push(n);
  }
  return resultado;
}

console.log(filtrarPreciosValidos(3, -1, 5, -2, 0, 8, -4));  // [3, 5, 8]