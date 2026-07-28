// src/components/PrimeSieve_mp.tsx

import { useState, useMemo } from 'react'

// Criba de Eratóstenes — complejidad O(n log log n)
// Se usa para simular un cálculo costoso: analizar códigos de propiedad
// "primos" dentro de un rango de precios del sistema inmobiliario.
function criba(n: number): number[] {
  if (n < 2) return []
  const esPrimo = new Array(n + 1).fill(true)
  esPrimo[0] = esPrimo[1] = false
  for (let i = 2; i * i <= n; i++) {
    if (esPrimo[i]) {
      for (let j = i * i; j <= n; j += i) esPrimo[j] = false
    }
  }
  return esPrimo.reduce<number[]>((acc, ok, i) => (ok ? [...acc, i] : acc), [])
}

export default function PrimeSieve_mp() {
  const [rangoPrecio, setRangoPrecio] = useState(10_000)
  const [visitas,     setVisitas]     = useState(0)

  // useMemo: el cálculo solo corre cuando `rangoPrecio` cambia
  const codigosPrimos = useMemo(() => criba(rangoPrecio), [rangoPrecio])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 520, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Analizador de Códigos de Propiedad</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        El contador de visitas provoca re-renders — el cálculo solo recorre cuando cambia el rango de precio.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 14 }}>
          Rango de precio ($)
          <input
            type="range"
            min={1000}
            max={100_000}
            step={1000}
            value={rangoPrecio}
            onChange={e => setRangoPrecio(Number(e.target.value))}
            style={{ width: 200 }}
          />
          <span>{rangoPrecio.toLocaleString()}</span>
        </label>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 14 }}>
          Visitas registradas (dispara re-renders)
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button
              onClick={() => setVisitas(v => v - 1)}
              style={{ padding: '4px 12px', cursor: 'pointer' }}
            >−</button>
            <span style={{ minWidth: 32, textAlign: 'center' }}>{visitas}</span>
            <button
              onClick={() => setVisitas(v => v + 1)}
              style={{ padding: '4px 12px', cursor: 'pointer' }}
            >+</button>
          </div>
        </div>
      </div>

      <div style={{
        display:      'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap:          12,
        marginBottom: 20,
      }}>
        {[
          { label: 'Códigos encontrados', value: codigosPrimos.length.toLocaleString() },
          { label: 'Rango analizado',     value: `$${rangoPrecio.toLocaleString()}` },
          { label: 'Código mayor',        value: (codigosPrimos.at(-1) ?? 0).toLocaleString() },
        ].map(({ label, value }) => (
          <div key={label} style={{
            padding:    12,
            background: '#f5f5f5',
            borderRadius: 8,
            fontSize:   13,
          }}>
            <div style={{ color: '#888', marginBottom: 4 }}>{label}</div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>{value}</div>
          </div>
        ))}
      </div>

      <details style={{ fontSize: 13 }}>
        <summary style={{ cursor: 'pointer', color: '#555' }}>
          Primeros 20 códigos
        </summary>
        <div style={{ marginTop: 8, color: '#333', lineHeight: 1.8 }}>
          {codigosPrimos.slice(0, 20).join(', ')}
        </div>
      </details>
    </div>
  )
}
