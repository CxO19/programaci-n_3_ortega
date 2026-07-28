// Con tipo explícito
const sector: string    = "Cumbayá";
const precioMiles: number = 135;
const disponible: boolean = true;

// Sin tipo — TypeScript lo infiere automáticamente del valor
const sector2 = "Cumbayá";   // TypeScript sabe que es string
const precioMiles2 = 135;    // TypeScript sabe que es number
const disponible2 = true;    // TypeScript sabe que es boolean