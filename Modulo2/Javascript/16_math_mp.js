console.log(Math.round(1500.6));  // 1501  — redondeo estándar
console.log(Math.floor(1500.9));  // 1500  — redondea hacia abajo
console.log(Math.ceil(1500.1));   // 1501  — redondea hacia arriba
console.log(Math.abs(-500));      // 500   — valor absoluto
console.log(Math.max(120, 450, 90)); // 450 — el mayor
console.log(Math.min(120, 450, 90)); // 90  — el menor
console.log(Math.sqrt(64));       // 8     — raíz cuadrada
console.log(Math.pow(5, 2));      // 25    — potencia
console.log(Math.trunc(85.9));    // 85    — parte entera (sin redondear)
console.log(Math.random());       // número aleatorio entre 0 (incluido) y 1 (excluido)

// Número entero aleatorio entre min y max (ambos incluidos)
function aleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(aleatorioEntre(100, 200)); // simula ID de propiedad