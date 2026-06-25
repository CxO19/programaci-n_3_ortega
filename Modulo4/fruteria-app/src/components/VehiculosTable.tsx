interface TableRow {
  marca: string
  modelo: string
  año: number
  highlight?: boolean
}

interface VehiculosTableProps {
  title?: string
  rows: TableRow[]
}

export default function VehiculosTable({ title, rows }: VehiculosTableProps) {
  return (
    <div style={{ maxWidth: 360, fontFamily: 'system-ui, sans-serif' }}>
      {title && (
        <h3 style={{ marginBottom: 12, fontSize: 16, fontWeight: 600 }}>
          {title}
        </h3>
      )}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <tbody>
          {rows.map((row, index) => (
            <tr
              // Usamos una key única combinando marca, modelo e index
              key={`${row.marca}-${row.modelo}-${index}`}
              style={{
                // Usamos un amarillo sutil con opacidad para el highlight
                backgroundColor: row.highlight ? 'rgba(254, 240, 138, 0.15)' : 'transparent',
                // Un borde izquierdo resalta el elemento seleccionado elegantemente
                borderLeft: row.highlight ? '3px solid #facc15' : '3px solid transparent',
              }}
            >
              <td
                style={{
                  padding: '10px 12px',
                  // Borde semitransparente para que funcione en claro y oscuro
                  borderBottom: '1px solid rgba(156, 163, 175, 0.2)',
                  // Color principal con ligera opacidad para la marca
                  color: 'rgba(255, 255, 255, 0.6)', 
                  width: '40%',
                  verticalAlign: 'middle',
                }}
              >
                {row.marca}
              </td>
              <td
                style={{
                  padding: '10px 12px',
                  borderBottom: '1px solid rgba(156, 163, 175, 0.2)',
                  fontWeight: row.highlight ? 600 : 400,
                  // Si está destacado, le damos un toque de color al texto
                  color: row.highlight ? '#fef08a' : 'inherit',
                  verticalAlign: 'middle',
                }}
              >
                {row.modelo}{' '}
                <span style={{ opacity: 0.5, fontSize: 13 }}>({row.año})</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}