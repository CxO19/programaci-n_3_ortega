const prompt = require("prompt-sync")();

let index = 0;
while(index <= 5) {
    console.log(index);
    index++;
}


// Ejemplo — procesamiento de una cola de solicitudes de clientes potenciales (Leads)
const leadsInmobiliarios = [
  { id: "L001", prioridad: "alta",   asunto: "Quiere visitar departamento hoy" },
  { id: "L002", prioridad: "media",  asunto: "Solicita info de financiamiento" },
  { id: "L003", prioridad: "baja",   asunto: "Pregunta si aceptan mascotas" },
  { id: "L004", prioridad: "alta",   asunto: "Separacion de suite con reserva" },
];

let indice = 0;

console.log("=== Procesando cola de leads inmobiliarios ===");

while (indice < leadsInmobiliarios.length) {
  const lead = leadsInmobiliarios[indice];

  if (lead.prioridad === "alta") {
    console.log(`[URGENTE] ${lead.id}: ${lead.asunto}`);
  } else if (lead.prioridad === "media") {
    console.log(`[NORMAL]  ${lead.id}: ${lead.asunto}`);
  } else {
    console.log(`[BAJO]    ${lead.id}: ${lead.asunto}`);
  }

  indice++;
}

console.log(`Total procesados: ${leadsInmobiliarios.length} leads`);

