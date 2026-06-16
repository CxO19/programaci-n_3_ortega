// type-alias.ts

// Definir el alias
type Usuario = {
  nombre: string;
  edad:   number;
  email:  string;
};

// Ahora usas el nombre en todas partes
function mostrarUsuario(u: Usuario): void {
  console.log(`${u.nombre} (${u.edad} años) — ${u.email}`);
}

function validarUsuario(u: Usuario): boolean {
  return u.nombre.length > 0 && u.email.includes("@");
}

// Crear un objeto del tipo Usuario
const ana: Usuario = {
  nombre: "Ana García",
  edad:   28,
  email:  "ana@email.com"
};

mostrarUsuario(ana);
console.log(`¿Válido? ${validarUsuario(ana)}`);

// TypeScript verifica que el objeto tenga todos los campos
// const incompleto: Usuario = { nombre: "Luis" };  // ❌ falta edad y email