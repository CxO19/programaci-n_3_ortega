// polimorfismo.ts

// Clase abstracta — no se puede instanciar directamente
// Solo sirve como base para otras clases
abstract class EvaluacionInmueble {
  constructor(protected sector: string) {}

  // Método abstracto — CADA subclase DEBE implementarlo a su manera
  abstract calcularPlusvalia(): number;
  abstract calcularImpuestoAnual(): number;

  // Método concreto — igual para todas las formas de inmuebles
  describir(): string {
    return `${this.constructor.name} en ${this.sector}: ` +
           `plusvalía estimada=$${this.calcularPlusvalia().toFixed(2)}, impuesto=$${this.calcularImpuestoAnual().toFixed(2)}`;
  }
}

class DepartamentoPremium extends EvaluacionInmueble {
  constructor(sector: string, private precioBase: number, private numeroPiso: number) {
    super(sector);
  }

  // Cada clase implementa los métodos A SU MANERA
  calcularPlusvalia(): number { return this.precioBase * 0.05 * (1 + this.numeroPiso * 0.01); }
  calcularImpuestoAnual(): number { return this.precioBase * 0.002; }
}

class LocalComercial extends EvaluacionInmueble {
  constructor(sector: string, private precioBase: number, private flujoPeatonesAlta: boolean) {
    super(sector);
  }

  calcularPlusvalia(): number { return this.precioBase * (this.flujoPeatonesAlta ? 0.08 : 0.04); }
  calcularImpuestoAnual(): number { return this.precioBase * 0.005; }
}

class BodegaIndustrial extends EvaluacionInmueble {
  constructor(sector: string, private precioBase: number, private areaM2: number) {
    super(sector);
  }

  calcularImpuestoAnual(): number { return this.precioBase * 0.004; }
  calcularPlusvalia(): number {
    const factorArea = this.areaM2 > 500 ? 1.03 : 1.01;
    return this.precioBase * 0.03 * factorArea;
  }
}

console.log("=== POLIMORFISMO ===\n");

// Un array con distintos tipos — todos son EvaluacionInmueble
const portafolioInmuebles: EvaluacionInmueble[] = [
  new DepartamentoPremium("La Carolina", 150000, 12),
  new LocalComercial("Cumbayá", 220000, true),
  new BodegaIndustrial("Carcelén", 350000, 600),
  new DepartamentoPremium("Ponceano", 95000, 3),
];

// El mismo bucle llama a describir() en cada inmueble
// Sin saber si es DepartamentoPremium, LocalComercial o BodegaIndustrial
for (const inmueble of portafolioInmuebles) {
  console.log(`  ${inmueble.describir()}`);
}

// Calcular la plusvalía total — funciona con cualquier tipo de EvaluacionInmueble
const plusvaliaTotal = portafolioInmuebles.reduce((acc, f) => acc + f.calcularPlusvalia(), 0);
console.log(`\n  Plusvalía total del portafolio: $${plusvaliaTotal.toFixed(2)}`);
