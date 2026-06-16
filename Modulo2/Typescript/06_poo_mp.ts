// primera-clase.ts

class Propiedad {
  // Atributos
  codigo: string;
  precioMiles: number;

  // Constructor — se ejecuta al crear la propiedad con new
  constructor(codigo: string, precioMiles: number) {
    this.codigo = codigo;
    this.precioMiles = precioMiles;
  }

  // Métodos
  obtenerFicha(): string {
    return `Inmueble Ref: ${this.codigo} con un valor de $${this.precioMiles},000 USD.`;
  }

  reajustarPlusvalia(): void {
    this.precioMiles += 5;
    console.log(`¡Incremento aplicado a la propiedad ${this.codigo}! Nuevo valor estimado: $${this.precioMiles},000 USD.`);
  }
}

// Crear instancias (objetos) con new
const deptoAna = new Propiedad("D-302", 135);
const casaLuis = new Propiedad("C-105", 280);

console.log(deptoAna.obtenerFicha());
console.log(casaLuis.obtenerFicha());
deptoAna.reajustarPlusvalia();
console.log(deptoAna.obtenerFicha());