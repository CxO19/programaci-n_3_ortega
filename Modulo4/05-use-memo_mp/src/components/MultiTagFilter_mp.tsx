// src/components/MultiTagFilter_mp.tsx

import { useState, useMemo } from 'react'

interface Propiedad {
  id:        number
  titulo:    string
  amenidades:string[]
  visitas:   number
}

const PROPIEDADES: Propiedad[] = [
  { id: 1, titulo: 'Casa en González Suárez',    amenidades: ['garaje', 'jardín', 'seguridad'],       visitas: 420 },
  { id: 2, titulo: 'Depto. La Carolina 8B',      amenidades: ['piscina', 'gimnasio', 'balcón'],       visitas: 310 },
  { id: 3, titulo: 'Terreno vía a Nayón',        amenidades: ['vista', 'seguridad'],                  visitas: 180 },
  { id: 4, titulo: 'Oficina Av. Amazonas',       amenidades: ['garaje', 'seguridad', 'ascensor'],     visitas: 150 },
  { id: 5, titulo: 'Depto. Cumbayá Norte',       amenidades: ['piscina', 'garaje', 'balcón'],         visitas: 510 },
  { id: 6, titulo: 'Casa en Tumbaco',            amenidades: ['jardín', 'piscina', 'garaje'],         visitas: 220 },
  { id: 7, titulo: 'Local comercial El Bosque',  amenidades: ['seguridad', 'ascensor'],               visitas: 360 },
  { id: 8, titulo: 'Penthouse Iñaquito',         amenidades: ['gimnasio', 'balcón', 'vista'],          visitas: 150 },
]

export default function MultiTagFilter_mp() {
  const [amenidadesActivas, setAmenidadesActivas] = useState<Set<string>>(new Set())
  const [ordenarPorVisitas, setOrdenarPorVisitas] = useState(false)

  // Todas las amenidades únicas con sus conteos
  const conteoAmenidades = useMemo(() => {
    const counts: Record<string, number> = {}
    PROPIEDADES.forEach(p => p.amenidades.forEach(a => { counts[a] = (counts[a] ?? 0) + 1 }))
    return counts
  }, []) // PROPIEDADES es estático

  // Propiedades que tienen TODAS las amenidades activas
  const filtradas = useMemo(() => {
    if (amenidadesActivas.size === 0) return PROPIEDADES
    return PROPIEDADES.filter(p => [...amenidadesActivas].every(a => p.amenidades.includes(a)))
  }, [amenidadesActivas])

  // Ordenar — depende de filtradas y ordenarPorVisitas
  const ordenadas = useMemo(
    () => ordenarPorVisitas
      ? [...filtradas].sort((a, b) => b.visitas - a.visitas)
      : filtradas,
    [filtradas, ordenarPorVisitas]
  )

  function toggleAmenidad(amenidad: string) {
    setAmenidadesActivas(prev => {
      const next = new Set(prev)
      next.has(amenidad) ? next.delete(amenidad) : next.add(amenidad)
      return next
    })
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 580, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Propiedades por Amenidades</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Amenidades múltiples con filtro AND. Conteos memoizados — se calculan una sola vez.
      </p>

      {/* Amenidades */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
        {Object.entries(conteoAmenidades).map(([amenidad, count]) => {
          const activa = amenidadesActivas.has(amenidad)
          return (
            <button
              key={amenidad}
              onClick={() => toggleAmenidad(amenidad)}
              style={{
                padding:      '4px 12px',
                borderRadius: 999,
                border:       '1px solid',
                borderColor:  activa ? '#0070f3' : '#ddd',
                background:   activa ? '#0070f3' : 'white',
                color:        activa ? 'white'    : '#555',
                fontSize:     13,
                cursor:       'pointer',
                fontWeight:   activa ? 700 : 400,
              }}
            >
              {amenidad} <span style={{ opacity: 0.7 }}>({count})</span>
            </button>
          )
        })}
      </div>

      {/* Controles secundarios */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 13, color: '#888' }}>
          {ordenadas.length} propiedad{ordenadas.length !== 1 ? 'es' : ''}
          {amenidadesActivas.size > 0 && ` (filtrado por: ${[...amenidadesActivas].join(', ')})`}
        </span>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={ordenarPorVisitas}
            onChange={e => setOrdenarPorVisitas(e.target.checked)}
          />
          Ordenar por visitas
        </label>
      </div>

      {/* Propiedades */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {ordenadas.map(p => (
          <div key={p.id} style={{
            padding:      '12px 16px',
            background:   '#f9f9f9',
            borderRadius: 10,
            border:       '1px solid #eee',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontWeight: 600, fontSize: 14 }}>{p.titulo}</span>
              <span style={{ fontSize: 12, color: '#888', whiteSpace: 'nowrap', marginLeft: 12 }}>
                {p.visitas.toLocaleString()} visitas
              </span>
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
              {p.amenidades.map(a => (
                <span
                  key={a}
                  onClick={() => toggleAmenidad(a)}
                  style={{
                    padding:      '2px 8px',
                    borderRadius: 999,
                    fontSize:     11,
                    background:   amenidadesActivas.has(a) ? '#0070f320' : '#f0f0f0',
                    color:        amenidadesActivas.has(a) ? '#0070f3'   : '#666',
                    cursor:       'pointer',
                    fontWeight:   amenidadesActivas.has(a) ? 700 : 400,
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {amenidadesActivas.size > 0 && (
        <button
          onClick={() => setAmenidadesActivas(new Set())}
          style={{
            marginTop:    16,
            padding:      '6px 16px',
            borderRadius: 6,
            border:       '1px solid #ddd',
            cursor:       'pointer',
            fontSize:     13,
            background:   'white',
          }}
        >
          Limpiar filtros
        </button>
      )}
    </div>
  )
}
