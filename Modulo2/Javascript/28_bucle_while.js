const prompt = require("prompt-sync")();

index = 0
while(index<=5) {
    console.log(index);
    index++;
}


// Ejemplo — procesamiento de cola de tickets de soporte
const ticketsPendientes = [
  { id: "T001", prioridad: "alta",   asunto: "Sistema caído" },
  { id: "T002", prioridad: "media",  asunto: "Error en reporte" },
  { id: "T003", prioridad: "baja",   asunto: "Actualizar perfil" },
  { id: "T004", prioridad: "alta",   asunto: "Acceso denegado" },
];

let indice = 0;

console.log("=== Procesando cola de soporte ===");

while (indice < ticketsPendientes.length) {
  const ticket = ticketsPendientes[indice];

  if (ticket.prioridad === "alta") {
    console.log(`🔴 [URGENTE] ${ticket.id}: ${ticket.asunto}`);
  } else if (ticket.prioridad === "media") {
    console.log(`🟡 [NORMAL]  ${ticket.id}: ${ticket.asunto}`);
  } else {
    console.log(`🟢 [BAJO]    ${ticket.id}: ${ticket.asunto}`);
  }

  indice++;
}

console.log(`Total procesados: ${ticketsPendientes.length} tickets`);
// 🔴 [URGENTE] T001: Sistema caído
// 🟡 [NORMAL]  T002: Error en reporte
// 🟢 [BAJO]    T003: Actualizar perfil
// 🔴 [URGENTE] T004: Acceso denegado
// Total procesados: 4 tickets


//Multiplicacion ejercicio


index = 1;
while (index <= 10){ 
    console.log(index, "*" , 5 ,"=", index*5); 
    index++;
}


