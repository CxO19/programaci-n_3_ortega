const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el sector de la propiedad: ", (sector) => {
  console.log(`Buscando inmuebles disponibles en ${sector}...`);
  rl.close();
});