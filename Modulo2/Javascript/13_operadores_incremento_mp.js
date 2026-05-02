let visitasAgendadas = 5;

// Incremento
visitasAgendadas++;           // post-incremento: registra la visita actual, luego suma 1
++visitasAgendadas;           // pre-incremento: suma 1 primero, luego registra la nueva visita

// Decremento
visitasAgendadas--;           // post-decremento
--visitasAgendadas;           // pre-decremento

// La diferencia importa cuando el resultado se asigna
let inmueblesDisponibles = 5;
let reservaActual = inmueblesDisponibles++;   // reservaActual = 5, inmueblesDisponibles = 6
let nuevaPromocion = ++inmueblesDisponibles;  // nuevaPromocion = 7, inmueblesDisponibles = 7

console.log(inmueblesDisponibles, reservaActual, nuevaPromocion);  // 7  5  7