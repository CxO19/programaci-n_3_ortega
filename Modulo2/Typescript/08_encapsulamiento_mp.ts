// encapsulamiento.ts

class InmuebleComercial {
  // Atributos privados — nadie los cambia directamente
  private _codigo: string;
  private _canonArriendo: number;
  private _contactoAgente: string;

  constructor(codigo: string, canonArriendo: number, contactoAgente: string) {
    this._codigo         = codigo;
    this._canonArriendo  = canonArriendo;
    this._contactoAgente = contactoAgente;
  }

  // Getters — permiten LEER el valor
  get codigo():         string { return this._codigo; }
  get canonArriendo():  number { return this._canonArriendo; }
  get contactoAgente(): string { return this._contactoAgente; }

  // Setters — permiten ESCRIBIR con validación
  set codigo(valor: string) {
    if (valor.trim().length < 2) {
      throw new Error("El codigo de propiedad debe tener al menos 2 caracteres.");
    }
    this._codigo = valor.trim();
  }

  set canonArriendo(valor: number) {
    if (valor < 0) {
      throw new Error("El canon de arriendo no puede ser negativo.");
    }
    this._canonArriendo = valor;
  }

  set contactoAgente(valor: string) {
    if (!valor.includes("@")) {
      throw new Error("El email del agente no es valido.");
    }
    this._contactoAgente = valor.toLowerCase();
  }

  toString(): string {
    return `${this._codigo} — $${this._canonArriendo} USD — ${this._contactoAgente}`;
  }
}

console.log("=== ENCAPSULAMIENTO ===\n");
const local = new InmuebleComercial("L-101", 2500, "Ana@Inmobiliaria.COM");
console.log(local.toString());

// Usar los setters con validación
local.canonArriendo = 3000;
local.contactoAgente   = "ana@inmobiliaria.com";
console.log(`Nuevo canon: $${local.canonArriendo} USD`);

// El setter valida los datos
try {
  local.canonArriendo = -500;
} catch (e) {
  console.log(`Error al cambiar canon: ${(e as Error).message}`);
}

try {
  local.contactoAgente = "emailsinrobadillo";
} catch (e) {
  console.log(`Error al cambiar email: ${(e as Error).message}`);
}