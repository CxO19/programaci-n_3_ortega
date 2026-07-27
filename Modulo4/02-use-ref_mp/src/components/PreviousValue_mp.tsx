// src/components/PreviousValue_mp.tsx

import { useState, useRef, useEffect } from 'react'

export default function PreviousValue() {
  const [precio, setPrecio] = useState('')
  const previousRef = useRef('')

  useEffect(() => {
    // Se ejecuta DESPUÉS de renderizar con el nuevo `precio`,
    // así que aquí guardamos el valor que quedará "anterior" en el próximo render
    previousRef.current = precio
  }, [precio])

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <input
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        placeholder="Precio de la propiedad ($)..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 16, fontSize: 14 }}>
        <p style={{ margin: 0 }}>
          Precio actual: <strong>{precio || '—'}</strong>
        </p>
        <p style={{ margin: 0, color: '#6b7280' }}>
          Precio anterior: <strong>{previousRef.current || '—'}</strong>
        </p>
      </div>
    </div>
  )
}
