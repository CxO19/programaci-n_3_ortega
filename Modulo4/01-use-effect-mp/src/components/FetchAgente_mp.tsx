// src/components/FetchAgente.tsx

import { useState, useEffect } from 'react'

interface Agente {
  id:       number
  name:     string
  email:    string
  username: string
  address: any
  website: string
}

export default function FetchAgente() {
  const [agenteId, setAgenteId] = useState(1)
  const [agente,   setAgente]   = useState<Agente | null>(null)
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState<string | null>(null)

  useEffect(() => {
    // Flag de cancelación — evita race conditions y
    // actualizaciones de estado en componentes desmontados
    let cancelled = false

    async function fetchAgente() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${agenteId}`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: Agente = await res.json()

        // Solo actualiza si el componente sigue montado
        if (!cancelled) setAgente(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchAgente()

    return () => { cancelled = true }
  }, [agenteId])

  return (
    <div style={{ maxWidth: 420 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3, 4, 5].map((id) => (
          <button
            key={id}
            onClick={() => setAgenteId(id)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: agenteId === id ? '#0070f3' : '#fff',
              color:      agenteId === id ? '#fff'    : '#333',
              cursor: 'pointer',
              fontWeight: agenteId === id ? 600 : 400,
            }}
          >
            Agente {id}
          </button>
        ))}
      </div>

      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando agente...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {agente && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{agente.name}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            Agente inmobiliario — @{agente.username}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {agente.email}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            Oficina: {agente.address.street}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {agente.address.city}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {agente.website}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            Lat oficina: {agente.address.geo.lat}
          </p>
        </div>
      )}
    </div>
  )
}
