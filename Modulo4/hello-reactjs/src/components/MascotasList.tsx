interface Mascota {
  id: number
  name: string
  type: string
  age: number
  price: number
}

interface MascotasListProps {
  mascotas: Mascota[]
  title?: string
}

export default function MascotasList({
  mascotas,
  title = 'Catálogo',
}: MascotasListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {mascotas.length === 0 && (
        <p style={{ color: '#999' }}>No hay mascotas disponibles.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {mascotas.map((mascota) => (
          <li
            key={mascota.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <strong>{mascota.name}</strong>
              <span style={{ fontSize: 14, color: '#666' }}>
                {mascota.type} • {mascota.age} {mascota.age === 1 ? 'año' : 'años'}
              </span>
            </div>
            <strong style={{ fontSize: 18 }}>${mascota.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}