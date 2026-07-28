// const — no se puede reasignar (datos fijos de la propiedad)
const codigoPropiedad = "QUITO-789";   // tipo inferido: string
const numeroPiso = 4;                  // tipo inferido: number
const tasaComision = 0.03;             // tipo inferido: number (3%)

// let — se puede reasignar (datos que cambian durante la negociación)
let precioVenta = 125000;
precioVenta = precioVenta - 5000;      // rebaja aplicada
let estadoDisponibilidad = "disponible";
estadoDisponibilidad = "reservado";     // cambio de estado

// codigoPropiedad = "OTRO-123";        // TypeError — no se puede cambiar el ID único

console.log(`La propiedad ${codigoPropiedad} tiene un precio de $${precioVenta}`); // template literal

// var — forma antigua, evitar en código moderno
var propietarioAnterior = "desconocido"; // evitar var por problemas de hoisting