"use strict";

class EvaluacionInmueble {
    sector;
    constructor(sector) {
        this.sector = sector;
    }
    // Método concreto — igual para todas las formas de inmuebles
    describir() {
        return `${this.constructor.name} en ${this.sector}: ` +
            `plusvalía estimada=$${this.calcularPlusvalia().toFixed(2)}, impuesto=$${this.calcularImpuestoAnual().toFixed(2)}`;
    }
}

class DepartamentoPremium extends EvaluacionInmueble {
    precioBase;
    numeroPiso;
    constructor(sector, precioBase, numeroPiso) {
        super(sector);
        this.precioBase = precioBase;
        this.numeroPiso = numeroPiso;
    }
    calcularPlusvalia() { return this.precioBase * 0.05 * (1 + this.numeroPiso * 0.01); }
    calcularImpuestoAnual() { return this.precioBase * 0.002; }
}

class LocalComercial extends EvaluacionInmueble {
    precioBase;
    flujoPeatonesAlta;
    constructor(sector, precioBase, flujoPeatonesAlta) {
        super(sector);
        this.precioBase = precioBase;
        this.flujoPeatonesAlta = flujoPeatonesAlta;
    }
    calcularPlusvalia() { return this.precioBase * (this.flujoPeatonesAlta ? 0.08 : 0.04); }
    calcularImpuestoAnual() { return this.precioBase * 0.005; }
}

class BodegaIndustrial extends EvaluacionInmueble {
    precioBase;
    areaM2;
    constructor(sector, precioBase, areaM2) {
        super(sector);
        this.precioBase = precioBase;
        this.areaM2 = areaM2;
    }
    calcularImpuestoAnual() { return this.precioBase * 0.004; }
    calcularPlusvalia() {
        const factorArea = this.areaM2 > 500 ? 1.03 : 1.01;
        return this.precioBase * 0.03 * factorArea;
    }
}

console.log("=== POLIMORFISMO ===\n");

// Un array con distintos tipos — todos son EvaluacionInmueble
const portafolioInmuebles = [
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
