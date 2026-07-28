// src/components/FilteredCatalog_mp.tsx

import { useState, useMemo } from 'react'

interface Propiedad {
  id:          number
  nombre:      string
  tipo:        string
  precio:      number
  disponible:  boolean
  habitaciones:number
}

const CATALOGO: Propiedad[] = [
  { id:  1, nombre: 'Casa en González Suárez',   tipo: 'Casa',        precio: 185000, disponible: true,  habitaciones: 4 },
  { id:  2, nombre: 'Depto. La Carolina 8B',     tipo: 'Departamento',precio:  98000, disponible: true,  habitaciones: 2 },
  { id:  3, nombre: 'Terreno vía a Nayón',       tipo: 'Terreno',     precio:  45000, disponible: false, habitaciones: 0 },
  { id:  4, nombre: 'Oficina Av. Amazonas',      tipo: 'Oficina',     precio: 132000, disponible: true,  habitaciones: 0 },
  { id:  5, nombre: 'Depto. Cumbayá Norte',      tipo: 'Departamento',precio: 210000, disponible: true,  habitaciones: 3 },
  { id:  6, nombre: 'Casa en Tumbaco',           tipo: 'Casa',        precio: 260000, disponible: true,  habitaciones: 5 },
  { id:  7, nombre: 'Local comercial El Bosque', tipo: 'Local',       precio:  76000, disponible: false, habitaciones: 0 },
  { id:  8, nombre: 'Penthouse Iñaquito',        tipo: 'Departamento',precio: 340000, disponible: true,  habitaciones: 3 },
  { id:  9, nombre: 'Terreno agrícola Los Chillos',tipo: 'Terreno',   precio:  58000, disponible: true,  habitaciones: 0 },
  { id: 10, nombre: 'Casa esquinera Quito Sur',  tipo: 'Casa',        precio: 112000, disponible: true,  habitaciones: 3 },
]

type SortKey = 'nombre' | 'precio' | 'habitaciones'

export default function FilteredCatalog_mp() {
  const [busqueda,   setBusqueda]   = useState('')
  const [soloDisp,   setSoloDisp]   = useState(true)
  const [tipo,       setTipo]       = useState('Todos')
  const [ordenarPor, setOrdenarPor] = useState<SortKey>('nombre')

  // useMemo 1 — filtrar (depende de busqueda, soloDisp, tipo)
  const filtradas = useMemo(() => {
    const q = busqueda.toLowerCase()
    return CATALOGO.filter(p =>
      (!soloDisp || p.disponible) &&
      (tipo === 'Todos' || p.tipo === tipo) &&
      (p.nombre.toLowerCase().includes(q) || p.tipo.toLowerCase().includes(q))
    )
  }, [busqueda, soloDisp, tipo])

  // useMemo 2 — ordenar (depende de filtradas y ordenarPor)
  const ordenadas = useMemo(
    () => [...filtradas].sort((a, b) =>
      ordenarPor === 'nombre' ? a.nombre.localeCompare(b.nombre) :
      ordenarPor === 'precio' ? a.precio - b.precio              :
                                 b.habitaciones - a.habitaciones  // habitaciones desc
    ),
    [filtradas, ordenarPor]
  )

  const tipos = useMemo(
    () => ['Todos', ...new Set(CATALOGO.map(p => p.tipo))],
    [] // El catálogo es estático — solo se calcula una vez
  )

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Catálogo de Propiedades</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Dos <code>useMemo</code> encadenados: filtrar → ordenar.
      </p>

      {/* Controles */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Buscar propiedad..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          style={{ flex: 1, minWidth: 140, padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        />
        <select
          value={tipo}
          onChange={e => setTipo(e.target.value)}
          style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        >
          {tipos.map(t => <option key={t}>{t}</option>)}
        </select>
        <select
          value={ordenarPor}
          onChange={e => setOrdenarPor(e.target.value as SortKey)}
          style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        >
          <option value="nombre">A–Z</option>
          <option value="precio">Precio ↑</option>
          <option value="habitaciones">Habitaciones ↓</option>
        </select>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={soloDisp}
            onChange={e => setSoloDisp(e.target.checked)}
          />
          Solo disponibles
        </label>
      </div>

      <p style={{ fontSize: 13, color: '#888', marginBottom: 12 }}>
        {ordenadas.length} de {CATALOGO.length} propiedades
      </p>

      {/* Lista */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {ordenadas.map(p => (
          <div key={p.id} style={{
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
            padding:        '10px 14px',
            background:     p.disponible ? '#f9f9f9' : '#f0f0f0',
            borderRadius:   8,
            border:         '1px solid #e5e5e5',
            opacity:        p.disponible ? 1 : 0.6,
          }}>
            <div>
              <span style={{ fontWeight: 600, fontSize: 14 }}>{p.nombre}</span>
              <span style={{ marginLeft: 8, fontSize: 12, color: '#888' }}>{p.tipo}</span>
            </div>
            <div style={{ textAlign: 'right', fontSize: 13 }}>
              <div style={{ fontWeight: 700 }}>${p.precio.toLocaleString()}</div>
              <div style={{ color: p.habitaciones > 0 && p.habitaciones < 2 ? '#e00' : '#888' }}>
                {p.habitaciones > 0 ? `${p.habitaciones} hab.` : '—'}
              </div>
            </div>
          </div>
        ))}
        {ordenadas.length === 0 && (
          <p style={{ textAlign: 'center', color: '#aaa', padding: 24 }}>
            Sin resultados.
          </p>
        )}
      </div>
    </div>
  )
}
