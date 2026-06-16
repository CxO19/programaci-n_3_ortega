type ClienteInmobiliario = {
  nombre: string;
  edad:   number;
  email:  string;
};

function mostrarCliente(u: ClienteInmobiliario): void {
  console.log(`${u.nombre} (${u.edad} años) — ${u.email}`);
}

function validarCliente(u: ClienteInmobiliario): boolean {
  return u.nombre.length > 0 && u.email.includes("@");
}

// Crear un objeto del tipo ClienteInmobiliario
const ana: ClienteInmobiliario = {
  nombre: "Ana García",
  edad:   28,
  email:  "ana@email.com"
};

mostrarCliente(ana);
console.log(`¿Válido? ${validarCliente(ana)}`);
