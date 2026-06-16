const prompt = require("prompt-sync")();

// Crear un objeto — llaves {}
const propiedad = {
  id: 101,                  // clave: "id",          valor: 101
  tipo: "Departamento",     // clave: "tipo",        valor: "Departamento"
  disponible: true          // clave: "disponible",  valor: true
};

// Acceso a propiedades — notación de punto (preferida)
console.log(propiedad.tipo);         // "Departamento"
console.log(propiedad.id);           // 101

// Acceso con corchetes — necesario cuando la clave es dinámica o tiene espacios
console.log(propiedad["tipo"]);         // "Departamento"
const clavePropiedad = "id";
console.log(propiedad[clavePropiedad]); // 101

// Propiedad que no existe → undefined (no lanza error)
console.log(propiedad.parqueadero);     // undefined

// Añadir propiedades después de crear el objeto
propiedad.sector = "La Carolina";
console.log(propiedad.sector);          // "La Carolina"

// Eliminar propiedades
delete propiedad.disponible;
console.log(propiedad.disponible);      // undefined
console.log(propiedad);

//Modificar
propiedad.tipo = "Suite"
console.log(propiedad)


// Métodos - Funciones dentro de un objeto

const gestorFinanciero = {
  // Forma clásica
  calcularComision(valorVenta, tasa) {
    return valorVenta * tasa;
  },

  // Shorthand de método (ES6) — forma preferida
  calcularAlicuotaMaint(area, costoM2) {
    return area * costoM2;
  },

  // Arrow function — ojo con this
  proyectarPlusvalia: (valorActual, factor) => valorActual * factor
};

console.log(gestorFinanciero.calcularComision(200000, 0.03));       // 6000
console.log(gestorFinanciero.calcularAlicuotaMaint(120, 1.5));      // 180
console.log(gestorFinanciero.proyectarPlusvalia(150000, 1.05));     // 157500



// This - Dentro de Métodos

const agenteInmobiliario = {
  nombre: "Carlos Proaño",
  ventasCerradas: 5,

  // function o shorthand — this apunta al objeto
  obtenerPerfil() {
    return `Asesor: ${this.nombre} ha concretado ${this.ventasCerradas} cierres este mes.`;
  },

  registrarNuevoCierre() {
    this.ventasCerradas++;   // modifica la propiedad del objeto
    return `Felicidades ${this.nombre}, registraste una nueva venta. Total: ${this.ventasCerradas}.`;
  },

  // Arrow function — this NO apunta al objeto, apunta al scope externo
  obtenerPerfilArrow: () => {
    return `Asesor: ${this.nombre}`;   // this.nombre es undefined
  }
};

console.log(agenteInmobiliario.obtenerPerfil());        // "Asesor: Carlos Proaño ha concretado 5 cierres este mes."
console.log(agenteInmobiliario.registrarNuevoCierre()); // "Felicidades Carlos Proaño, registraste una nueva venta. Total: 6."
console.log(agenteInmobiliario.obtenerPerfilArrow());   // "Asesor: undefined"



//Shorthand properties — sintaxis abreviada

const ubicacion = "Cumbayá";
const precio = 135000;
const estado = "Preventa";

// Sin shorthand — repetitivo
const inmueble1 = {
  ubicacion: ubicacion,
  precio: precio,
  estado: estado
};

// Con shorthand (ES6) — forma preferida
const inmueble2 = { ubicacion, precio, estado };

console.log(inmueble2);
// { ubicacion: 'Cumbayá', precio: 135000, estado: 'Preventa' }