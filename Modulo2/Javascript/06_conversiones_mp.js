// Conversión explícita — recomendada
const valorTexto = "125000";
const precioNumerico = Number(valorTexto);          // 125000
const habitaciones = parseInt("3.5", 10);           // 3   (segundo argumento: base 10)
const alicuotaDecimal = parseFloat("45.50");        // 45.5
const idPropiedad = String(789);                    // "789"
const esHabitable = Boolean(1);                     // true

console.log(precioNumerico);   // 125000
console.log(habitaciones);     // 3
console.log(alicuotaDecimal);  // 45.5
console.log(idPropiedad);      // "789"
console.log(esHabitable);      // true

// Conversión implícita (coerción) — la que hay que conocer para evitar sorpresas
console.log("Precio: " + 1500); // "Precio: 1500" ← + con string concatena
console.log("1000" - 200);      // 800     ← - convierte a número
console.log("50" * "2");        // 100     ← * convierte a número
console.log(true + 4);          // 5       ← true es 1
console.log(false + 1);         // 1       // false es 0

// Valores "falsy" — se comportan como false en condiciones
// false, 0, "", null, undefined, NaN

// Number() con valores no numéricos
console.log(Number("Quito"));   // NaN (Not a Number)
console.log(Number(""));        // 0
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN

// isNaN — verificar si un valor no es número
console.log(isNaN(Number("Sector"))); // true
console.log(isNaN(85));               // false