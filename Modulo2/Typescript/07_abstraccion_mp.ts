// abstraccion.ts

class ContratoAlquiler {
  private saldoPendiente: number;
  private historialPagos: string[] = [];

  constructor(inquilino: string, deudaInicial: number) {
    this.saldoPendiente = deudaInicial;
    this.historialPagos.push(`Contrato iniciado con saldo pendiente de $${deudaInicial}`);
    console.log(`Contrato de ${inquilino} creado.`);
  }


  registrarPago(cantidad: number): void {
    this.saldoPendiente -= cantidad;
    this.registrar(`Pago recibido: -$${cantidad}`); // método interno
    console.log(`  Abonado $${cantidad}. Saldo pendiente: $${this.saldoPendiente}`);
  }

  cargarPenalizacion(cantidad: number): void {
    this.saldoPendiente += cantidad;
    this.registrar(`Penalizacion: +$${cantidad}`);
    console.log(`  Cargado $${cantidad}. Saldo pendiente: $${this.saldoPendiente}`);
  }

  consultarSaldo(): number {
    return this.saldoPendiente;
  }

  verHistorial(): void {
    console.log("\n  Historial del Inmueble:");
    this.historialPagos.forEach(h => console.log(`    ${h}`));
  }

  private registrar(operacion: string): void {
    this.historialPagos.push(operacion);
  }
}

console.log("=== GESTION DE ALQUILER ===\n");
const contrato = new ContratoAlquiler("Ana García", 1000);

contrato.registrarPago(500);
contrato.cargarPenalizacion(200);

console.log(`\nSaldo pendiente actual: $${contrato.consultarSaldo()}`);
contrato.verHistorial();

