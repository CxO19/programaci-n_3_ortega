const sector   = "Cumbayá";
const tipo     = "Departamento";
const precio   = 125000;

// Variable simple
console.log(`Ubicación: ${sector}`);

// Expresión dentro de ${ }
console.log(`Ficha Técnica: ${tipo.toUpperCase()} EN ${sector.toUpperCase()}`);
console.log(`Precio con impuestos: ${precio * 1.12}`);
console.log(`¿Disponible para crédito? ${precio <= 150000 ? "Sí" : "No"}`);

// String multilínea — sin caracteres especiales extra
const anuncio = `
  Propiedad: ${tipo}
  Ubicación: ${sector}
  Costo:     $${precio}
  Estado:    ${precio <= 150000 ? "Aplica a crédito VIP" : "Crédito convencional"}
`;

console.log(anuncio);