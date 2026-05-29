const prompt = require("prompt-sync")();

// Crear un array — corchetes []
const sectoresInmobiliarios = ["Cumbayá", "La Carolina", "Ponceano"];
const preciosMiles = [120, 250, 85, 140, 65];
const fichaMixta = [101, "Suite", true, null]; // válido pero poco recomendable
const catalogoVacio = [];

// Acceso por índice — empieza en 0
console.log(sectoresInmobiliarios[0]);   // "Cumbayá"
console.log(sectoresInmobiliarios[2]);   // "Ponceano"
console.log(sectoresInmobiliarios[9]);   // undefined — no lanza error

// Índice negativo — NO funciona en JS (devuelve undefined)
console.log(sectoresInmobiliarios[-1]);  // undefined

// at() — acceso con índice negativo (ES2022)
console.log(sectoresInmobiliarios.at(-1));   // "Ponceano" ← el último elemento
console.log(sectoresInmobiliarios.at(-2));   // "La Carolina"

// Longitud
console.log(sectoresInmobiliarios.length);   // 3

// Modificar un elemento
sectoresInmobiliarios[1] = "Tumbaco";
console.log(sectoresInmobiliarios);   // ["Cumbayá", "Tumbaco", "Ponceano"]


//

const codigosPropiedades = ["P-01", "P-02", "P-03"];

// push — añade al final, devuelve la nueva longitud
codigosPropiedades.push("P-04");
codigosPropiedades.push("P-05", "P-06"); // se pueden añadir varios a la vez
console.log(codigosPropiedades);          // ["P-01", "P-02", "P-03", "P-04", "P-05", "P-06"]

// pop — elimina el último, devuelve el elemento eliminado
const ultimoCodigo = codigosPropiedades.pop();
console.log(ultimoCodigo);       // "P-06"
console.log(codigosPropiedades);          // ["P-01", "P-02", "P-03", "P-04", "P-05"]

// unshift — añade al inicio (más lento que push)
codigosPropiedades.unshift("P-00");
console.log(codigosPropiedades);          // ["P-00", "P-01", "P-02", "P-03", "P-04", "P-05"]

// shift — elimina el primero, devuelve el elemento eliminado
const primerCodigo = codigosPropiedades.shift();
console.log(primerCodigo);      // "P-00"
console.log(codigosPropiedades);          // ["P-01", "P-02", "P-03", "P-04", "P-05"]

// splice — elimina, reemplaza o inserta en cualquier posición
// splice(inicio, cuántos_eliminar, ...elementos_a_insertar)
const listaZonas = ["Norte", "Sur", "Valles", "Costa"];
listaZonas.splice(2, 0, "Centro");          // inserta "Centro" en posición 2, elimina 0
console.log(listaZonas);                  // ["Norte", "Sur", "Centro", "Valles", "Costa"]

const zonasEliminadas = listaZonas.splice(1, 2);  // elimina 2 desde posición 1
console.log(zonasEliminadas);             // ["Sur", "Centro"]
console.log(listaZonas);                  // ["Norte", "Valles", "Costa"]



const historialVisitasMes = [10, 20, 30, 20, 40];

// indexOf — primera posición del valor, -1 si no existe
console.log(historialVisitasMes.indexOf(20));    // 1
console.log(historialVisitasMes.indexOf(99));    // -1

// lastIndexOf — última posición del valor
console.log(historialVisitasMes.lastIndexOf(20));  // 3

// includes — ¿existe el valor? devuelve boolean
console.log(historialVisitasMes.includes(30));   // true
console.log(historialVisitasMes.includes(99));   // false



const sectoresEach = ["Cumbayá", "La Carolina", "Ponceano"];

// forEach no devuelve nada (undefined)
sectoresEach.forEach((sector, indice) => {
  console.log(`${indice}: ${sector}`);
});
// 0: Cumbayá
// 1: La Carolina
// 2: Ponceano

// Equivalente con for...of (más legible en casos simples)
for (const sector of sectoresEach) {
  console.log(sector);
}




const cuotasBase = [1, 2, 3, 4, 5];

// Reajustar cada cuota con intereses
const cuotasConInteres = cuotasBase.map(c => c * 2);
console.log(cuotasConInteres);    // [2, 4, 6, 8, 10]
console.log(cuotasBase);   // [1, 2, 3, 4, 5] — original intacto

// Extraer una propiedad de cada objeto
const agentes = [
  { nombre: "Ana",   edad: 28 },
  { nombre: "Luis",  edad: 31 },
  { nombre: "Marta", edad: 25 }
];

const nombresAgentes = agentes.map(a => a.nombre);
console.log(nombresAgentes);   // ["Ana", "Luis", "Marta"]

// Transformar la estructura de cada objeto
const resumenAgentes = agentes.map(a => ({
  nombre: a.nombre,
  mayorDeEdad: a.edad >= 18
}));
console.log(resumenAgentes);
// [
//   { nombre: 'Ana',   mayorDeEdad: true },
//   { nombre: 'Luis',  mayorDeEdad: true },
//   { nombre: 'Marta', mayorDeEdad: true }
// ]


const avaluosInmuebles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Solo los valores que cumplen un criterio par (ej: ID de manzana par)
const manzanasPares = avaluosInmuebles.filter(n => n % 2 === 0);
console.log(manzanasPares);   // [2, 4, 6, 8, 10]

// Solo las propiedades con metraje mayor a 50m² (representado por 5)
const propiedadesGrandes = avaluosInmuebles.filter(n => n > 5);
console.log(propiedadesGrandes); // [6, 7, 8, 9, 10]

// Filtrar objetos
const carteraClientes = [
  { nombre: "Ana",   edad: 28, activo: true  },
  { nombre: "Luis",  edad: 16, activo: true  },
  { nombre: "Marta", edad: 31, activo: false },
  { nombre: "Pedro", edad: 22, activo: true  }
];

const compradoresAptos = carteraClientes.filter(c => c.edad >= 18 && c.activo);
console.log(compradoresAptos.map(c => c.nombre));   // ["Ana", "Pedro"]



// reduce(callback, valorInicial)
// callback recibe: (acumulador, elementoActual, indice, array)

const comisionesRecaudadas = [1, 2, 3, 4, 5];

// Suma total
const sumaComisiones = comisionesRecaudadas.reduce((acum, n) => acum + n, 0);
console.log(sumaComisiones);   // 15

// Producto proyectado de plusvalía acumulada
const productoPlusvalia = comisionesRecaudadas.reduce((acum, n) => acum * n, 1);
console.log(productoPlusvalia);   // 120

// Máximo valor sin Math.max
const avaluoMaximo = comisionesRecaudadas.reduce((max, n) => n > max ? n : max, -Infinity);
console.log(avaluoMaximo);   // 5

// Contar ocurrencias — acumulador es un objeto
const tipologiaPropiedades = ["casa", "suite", "casa", "terreno", "suite", "casa"];
const conteoTipologias = tipologiaPropiedades.reduce((acum, tipo) => {
  acum[tipo] = (acum[tipo] ?? 0) + 1;
  return acum;
}, {});
console.log(conteoTipologias);
// { casa: 3, suite: 2, terreno: 1 }

// Aplanar un array de arrays de códigos de parqueaderos
const parqueaderosAnidados = [[1, 2], [3, 4], [5, 6]];
const parqueaderosPlanos   = parqueaderosAnidados.reduce((acum, arr) => [...acum, ...arr], []);
console.log(parqueaderosPlanos);   // [1, 2, 3, 4, 5, 6]
// alternativa moderna: parqueaderosAnidados.flat()



//Ejercicio

const celsius = [0, 15, -5, 22, 37, 100, -10, 28];

const resultado = celsius.filter(temp => temp >= 0 && temp <= 30) 
console.log(resultado.map(temp => (temp * 9/5) + 32));