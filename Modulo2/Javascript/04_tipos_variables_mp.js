// Números — un solo tipo para enteros y decimales
const metrosCuadrados = 85;
const valorAlicuota = 45.50;
const avaluoCatastral = 120_500_000;     // _ como separador visual (ES2021)
const balanceNegativo = -1500;

// String — texto entre comillas simples, dobles o backticks
const ciudad = 'Quito';
const sector = "Cumbayá";
const fichaTecnica = `Propiedad en ${ciudad}`; // template literal — permite expresiones

// Boolean
const tieneParqueadero = true;
const estaArrendada = false;

// null y undefined — dos formas de "sin valor"
const ofertaRecibida = null;              // ausencia intencional de valor
let proximaCita;                          // undefined — declarada pero sin valor

// Symbol — identificador único (avanzado)
const llaveUnicaPropiedad = Symbol("id");

// BigInt — enteros de precisión arbitraria
const idTransaccionGlobal = 9999999999999999999n;      // sufijo n

// typeof — conocer el tipo en tiempo de ejecución
console.log(typeof 85);           // "number"
console.log(typeof "Quito");       // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" ← bug histórico de JS, null no es un objeto
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"