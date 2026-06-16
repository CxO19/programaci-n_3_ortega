// === Igualdad estricta (recomendada SIEMPRE)
// Compara valor Y tipo — no hace conversión implícita
console.log(1500 === 1500);       // true  — mismo valor, mismo tipo
console.log(125000 === "125000"); // false — mismo valor, DISTINTO tipo
console.log(1 === true);          // false — distinto tipo
console.log(null === undefined);  // false — distintos tipos

// == Igualdad débil (con coerción de tipos — EVITAR)
// Convierte ambos valores al mismo tipo antes de comparar
console.log(125000 == "125000");  // true  ← peligroso: convierte el string a número
console.log(1 == true);           // true  ← peligroso: true se convierte a 1
console.log(null == undefined);   // true  ← excepción especial del lenguaje
console.log("" == 0);             // true  ← ambos se convierten a 0

// !== Desigualdad estricta (recomendada)
console.log(85 !== "85");         // true  — diferente tipo
console.log(10 !== 10);           // false

// != Desigualdad débil (EVITAR por las mismas razones que ==)
console.log(45 != "45");          // false ← peligroso