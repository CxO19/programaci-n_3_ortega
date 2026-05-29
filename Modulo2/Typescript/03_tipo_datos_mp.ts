// tipos-string.ts
const sectorInmueble: string = "La Carolina";
const descripcion:    string = `Inmueble en, ${sectorInmueble}`;
const codigoVacio:    string = "";
const tipoPropiedad:  string = 'Departamento con balcon';

console.log(sectorInmueble);
console.log(descripcion);
console.log(`La cadena vacia tiene longitud: ${codigoVacio.length}`);

// Métodos de string funcionan igual que en JS
console.log(sectorInmueble.toUpperCase());      // LA CAROLINA
console.log(sectorInmueble.toLowerCase());      // la carolina
console.log(sectorInmueble.includes("Carolina")); // true
console.log(sectorInmueble.split(" "));         // ["La", "Carolina"]


// tipos-number.ts
// NUMERICO
const parqueaderos:  number = 2;
const alicuotaM2:    number = 1.50;
const saldoNegativo: number = -500;
const valorTotal:    number = 1_250_000;  // el _ es solo visual, no cambia el valor
const tasaMensual:   number = 10 / 3;

console.log(parqueaderos);
console.log(alicuotaM2);
console.log(valorTotal);
console.log(tasaMensual);                 // 3.3333...
console.log(tasaMensual.toFixed(2));        // "3.33"

// Operaciones
console.log(10 + 3);   // 13
console.log(10 - 3);   // 7
console.log(10 * 3);   // 30
console.log(10 / 3);   // 3.333...
console.log(10 % 3);   // 1  (resto de la división)
console.log(2 ** 10);  // 1024  (potencia)


// Boolean

// tipos-boolean.ts
const entregaInmediata: boolean = true;
const tieneHipoteca:    boolean = false;

console.log(entregaInmediata);
console.log(!entregaInmediata);              // false  (negación)
console.log(entregaInmediata && tieneHipoteca); // false  (ambos deben ser true)
console.log(entregaInmediata || tieneHipoteca); // true   (al menos uno es true)

// Los booleanos suelen venir de comparaciones
const areaMetros = 20;
const esPremium: boolean = areaMetros >= 18;
console.log(`¿Es premium? ${esPremium}`); // ¿Es premium? true


// Any

// tipo-any.ts

let registroIncierto: any = "Edificio Plaza";
registroIncierto