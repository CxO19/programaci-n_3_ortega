// src/components/OrderMetrics_mp.tsx

import { useState, useMemo } from 'react'

interface Venta {
  id:        number
  cliente:   string
  monto:     number
  estado:    'pendiente' | 'vendida' | 'cancelada'
  fecha:     string
}

const VENTAS: Venta[] = [
  { id: 1, cliente: 'Ana García',    monto:  185000, estado: 'vendida',   fecha: '2024-01-15' },
  { id: 2, cliente: 'Luis Pérez',    monto:   98000, estado: 'vendida',   fecha: '2024-01-18' },
  { id: 3, cliente: 'María López',   monto:   45000, estado: 'pendiente', fecha: '2024-01-20' },
  { id: 4, cliente: 'Carlos Ruiz',   monto:  132000, estado: 'cancelada', fecha: '2024-01-22' },
  { id: 5, cliente: 'Ana García',    monto:  210000, estado: 'vendida',   fecha: '2024-02-01' },
  { id: 6, cliente: 'Sofía Torres',  monto:   76000, estado: 'pendiente', fecha: '2024-02-05' },
  { id: 7, cliente: 'Luis Pérez',    monto:  340000, estado: 'vendida',   fecha: '2024-02-08' },
  { id: 8, cliente: 'Elena Díaz',    monto:  112000, estado: 'vendida',   fecha: '2024-02-10' },
]

export default function OrderMetrics_mp() {
  const [filtroEstado, setFiltroEstado] = useState<Venta['estado'] | 'todos'>('todos')
  const [montoMinimo,  setMontoMinimo]  = useState(0)

  // Filtrado base — depende de filtroEstado y montoMinimo
  const ventasVisibles = useMemo(
    () => VENTAS.filter(v =>
      (filtroEstado === 'todos' || v.estado === filtroEstado) &&
      v.monto >= montoMinimo
    ),
    [filtroEstado, montoMinimo]
  )

  // Métricas — cada una depende de ventasVisibles
  const total   = useMemo(() => ventasVisibles.reduce((s, v) => s + v.monto, 0), [ventasVisibles])
  const promedio = useMemo(() => ventasVisibles.length ? total / ventasVisibles.length : 0, [total, ventasVisibles.length])
  const mayorVenta = useMemo(
    () => ventasVisibles.reduce<Venta | null>((max, v) => (!max || v.monto > max.monto) ? v : max, null),
    [ventasVisibles]
  )
  const porEstado = useMemo(
    () => ({
      vendida:   ventasVisibles.filter(v => v.estado === 'vendida').length,
      pendiente: ventasVisibles.filter(v => v.estado === 'pendiente').length,
      cancelada: ventasVisibles.filter(v => v.estado === 'cancelada').length,
    }),
    [ventasVisibles]
  )

  const COLORES_ESTADO: Record<Venta['estado'], string> = {
    vendida:   '#15803d',
    pendiente: '#b45309',
    cancelada: '#9333ea',
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 580, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Métricas de Ventas Inmobiliarias</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Múltiples <code>useMemo</code> independientes derivados de un filtro base.
      </p>

      {/* Controles */}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
        <label style={{ fontSize: 14, display: 'flex', flexDirection: 'column', gap: 4 }}>
          Estado
          <select
            value={filtroEstado}
            onChange={e => setFiltroEstado(e.target.value as typeof filtroEstado)}
            style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
          >
            <option value="todos">Todos</option>
            <option value="vendida">Vendida</option>
            <option value="pendiente">Pendiente</option>
            <option value="cancelada">Cancelada</option>
          </select>
        </label>

        <label style={{ fontSize: 14, display: 'flex', flexDirection: 'column', gap: 4 }}>
          Monto mínimo: ${montoMinimo.toLocaleString()}
          <input
            type="range"
            min={0}
            max={300000}
            step={10000}
            value={montoMinimo}
            onChange={e => setMontoMinimo(Number(e.target.value))}
            style={{ width: 200 }}
          />
        </label>
      </div>

      {/* Métricas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 12,
        marginBottom: 24,
      }}>
        {[
          { label: 'Ventas visibles', value: ventasVisibles.length },
          { label: 'Total',           value: `$${total.toLocaleString()}` },
          { label: 'Promedio',        value: `$${promedio.toLocaleString(undefined, { maximumFractionDigits: 0 })}` },
          { label: 'Mayor venta',     value: mayorVenta ? `$${mayorVenta.monto.toLocaleString()} (${mayorVenta.cliente})` : '—' },
        ].map(({ label, value }) => (
          <div key={label} style={{
            padding: 14,
            background: '#f5f5f5',
            borderRadius: 10,
            fontSize: 13,
          }}>
            <div style={{ color: '#888', marginBottom: 4 }}>{label}</div>
            <div style={{ fontWeight: 700, fontSize: 16 }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Contador por estado */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        {(Object.entries(porEstado) as [Venta['estado'], number][]).map(([estado, count]) => (
          <span key={estado} style={{
            padding:    '4px 12px',
            borderRadius: 999,
            fontSize:   12,
            fontWeight: 600,
            background: `${COLORES_ESTADO[estado]}20`,
            color:      COLORES_ESTADO[estado],
          }}>
            {estado}: {count}
          </span>
        ))}
      </div>

      {/* Tabla de ventas */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr>
            {['#', 'Cliente', 'Monto', 'Estado', 'Fecha'].map(h => (
              <th key={h} style={{
                textAlign: 'left',
                padding:   '6px 8px',
                borderBottom: '2px solid #e5e5e5',
                color: '#666',
                fontWeight: 600,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ventasVisibles.map(v => (
            <tr key={v.id}>
              <td style={{ padding: '6px 8px', color: '#aaa' }}>{v.id}</td>
              <td style={{ padding: '6px 8px', fontWeight: 500 }}>{v.cliente}</td>
              <td style={{ padding: '6px 8px', fontWeight: 700 }}>${v.monto.toLocaleString()}</td>
              <td style={{ padding: '6px 8px' }}>
                <span style={{
                  padding:  '2px 8px',
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 700,
                  background: `${COLORES_ESTADO[v.estado]}20`,
                  color:      COLORES_ESTADO[v.estado],
                }}>
                  {v.estado}
                </span>
              </td>
              <td style={{ padding: '6px 8px', color: '#888' }}>{v.fecha}</td>
            </tr>
          ))}
          {ventasVisibles.length === 0 && (
            <tr>
              <td colSpan={5} style={{ textAlign: 'center', padding: 24, color: '#aaa' }}>
                Sin ventas para los filtros actuales.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
