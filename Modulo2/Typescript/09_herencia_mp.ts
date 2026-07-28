// herencia.ts

// Clase padre
class Inmueble {
  constructor(
    protected referencia: string,
    protected areaM2:     number
  ) {}

  // Método heredado por todos los hijos
  mostrarUbicacion(): void {
    console.log(`  La propiedad ${this.referencia} está ubicada en zona autorizada.`);
  }

  validarEstructura(): void {
    console.log(`  La propiedad ${this.referencia} completó la revisión técnica.`);
  }

  toString(): string {
    return `Ref: ${this.referencia} (${this.areaM2} m²)`;
  }
}

// Clase hija — hereda de Inmueble
class Departamento extends Inmueble {
  private numeroPiso: number;

  constructor(referencia: string, areaM2: number, numeroPiso: number) {
    super(referencia, areaM2);  // ← llama al constructor del padre — OBLIGATORIO
    this.numeroPiso = numeroPiso;
  }

  // Método propio — solo existe en Departamento
  verificarAscensor(): void {
    console.log(`  ${this.referencia}: Acceso verificado para el piso ${this.numeroPiso}.`);
  }

  toString(): string {
    return `${super.toString()} — Piso ${this.numeroPiso}`;  // reutiliza el toString del padre
  }
}

class Casa extends Inmueble {
  private tienePatio: boolean;

  constructor(referencia: string, areaM2: number, tienePatio: boolean) {
    super(referencia, areaM2);
    this.tienePatio = tienePatio;
  }

  calcularJardin(): void {
    console.log(`  ${this.referencia}: Evaluando metros cuadrados de áreas verdes.`);
  }

  toString(): string {
    return `${super.toString()} — ${this.tienePatio ? "Con patio trasero" : "Sin patio"}`;
  }
}

console.log("=== HERENCIA ===\n");

const depto1 = new Departamento("D-401", 85, 4);
const casa1  = new Casa("C-202", 210, true);

// Métodos heredados del padre
depto1.mostrarUbicacion();
casa1.mostrarUbicacion();
depto1.validarEstructura();

// Métodos propios de cada hijo
depto1.verificarAscensor();
casa1.calcularJardin();

console.log(`\nDepartamento: ${depto1.toString()}`);
console.log(`Casa:         ${casa1.toString()}`);

// instanceof — comprobar si un objeto pertenece a una clase
console.log(`\n¿depto1 es Departamento? ${depto1 instanceof Departamento}`); // true
console.log(`¿depto1 es Inmueble?     ${depto1 instanceof Inmueble}`);     // true — hereda
console.log(`¿depto1 es Casa?         ${depto1 instanceof Casa}`);         // false