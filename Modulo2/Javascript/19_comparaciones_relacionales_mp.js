const precioDepartamento = 125000;
const presupuestoMaximo = 150000;

console.log(precioDepartamento > presupuestoMaximo);    // false — mayor que
console.log(precioDepartamento < presupuestoMaximo);    // true  — menor que
console.log(precioDepartamento >= 125000);              // true  — mayor o igual que
console.log(precioDepartamento <= 100000);              // false — menor o igual que

// Con strings — se compara por orden Unicode (lexicográfico)
console.log("Cumbayá" < "Quito");      // true  ← 'C' va antes que 'Q'
console.log("Quito" < "quito");        // true  ← Mayúsculas tienen código menor que minúsculas
console.log("200" > "90");             // false ← Compara como string (carácter por carácter)
console.log(200 > 90);                 // true  ← Correcto: comparando como números

// Comparación mixta (número vs string) — JS convierte a número
console.log("150" > 100);              // true  ← "150" se convierte a 150
console.log("Sector" > 1);             // false ← "Sector" se convierte a NaN