// src/components/SearchWithEffect.tsx

import { useState, useEffect } from 'react'

const MOCK_DB: Record<string, string> = {
  casa:        'Vivienda unifamiliar, ideal para familias, con jardín y garaje propio.',
  departamento:'Unidad en edificio con áreas comunes, seguridad y ascensor.',
  terreno:     'Lote disponible para construcción, sin edificaciones previas.',
  oficina:     'Espacio comercial diseñado para actividades administrativas.',
  local:       'Local comercial en planta baja, ideal para negocios con atención al público.',
}

export default function SearchWithEffect() {
  const [query,  setQuery]  = useState('')
  const [result, setResult] = useState<string | null>(null)

  useEffect(() => {
    const normalized = query.toLowerCase().trim()

    if (!normalized) {
      setResult(null)
      return
    }

    const found = MOCK_DB[normalized]
    setResult(found ?? 'No se encontraron propiedades de ese tipo.')
  }, [query])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 340 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Busca: casa, departamento, terreno, oficina, local..."
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      {result && (
        <p style={{ margin: 0, fontSize: 14, color: '#374151', padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
          {result}
        </p>
      )}
    </div>
  )
}
