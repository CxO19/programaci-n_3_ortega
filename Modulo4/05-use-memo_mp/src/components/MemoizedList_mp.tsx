// src/components/MemoizedList_mp.tsx

import { useState, useCallback, memo } from 'react'

interface Tarea {
  id:        number
  texto:     string
  completada:boolean
}

const TAREAS_INICIALES: Tarea[] = [
  { id: 1, texto: 'Publicar anuncio de la propiedad',   completada: false },
  { id: 2, texto: 'Agendar visita con el cliente',      completada: true  },
  { id: 3, texto: 'Actualizar fotos del inmueble',      completada: false },
  { id: 4, texto: 'Revisar documentación legal',        completada: false },
  { id: 5, texto: 'Confirmar firma de contrato',        completada: false },
]

// ─── Fila memoizada ──────────────────────────────────────────────────────
let renderContadorFila = 0

const TareaFila = memo(function TareaFila({
  tarea,
  onToggle,
  onEliminar,
}: {
  tarea:      Tarea
  onToggle:   (id: number) => void
  onEliminar: (id: number) => void
}) {
  renderContadorFila++
  const count = renderContadorFila

  return (
    <div style={{
      display:        'flex',
      alignItems:     'center',
      gap:            10,
      padding:        '10px 14px',
      background:     tarea.completada ? '#f0fdf4' : '#fafafa',
      borderRadius:   8,
      border:         '1px solid',
      borderColor:    tarea.completada ? '#86efac' : '#e5e5e5',
    }}>
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => onToggle(tarea.id)}
        style={{ cursor: 'pointer', width: 16, height: 16 }}
      />
      <span style={{
        flex:           1,
        fontSize:       14,
        textDecoration: tarea.completada ? 'line-through' : 'none',
        color:          tarea.completada ? '#666' : '#111',
      }}>
        {tarea.texto}
      </span>
      <span style={{ fontSize: 11, color: '#aaa' }}>render #{count}</span>
      <button
        onClick={() => onEliminar(tarea.id)}
        style={{
          padding:      '2px 8px',
          borderRadius: 4,
          border:       '1px solid #fca5a5',
          background:   '#fef2f2',
          color:        '#dc2626',
          cursor:       'pointer',
          fontSize:     12,
        }}
      >
        ✕
      </button>
    </div>
  )
})

// ─── Padre ───────────────────────────────────────────────────────────────
export default function MemoizedList_mp() {
  const [tareas,  setTareas]  = useState<Tarea[]>(TAREAS_INICIALES)
  const [visitas, setVisitas] = useState(0)

  // useCallback: onToggle y onEliminar tienen referencia estable
  // TareaFila no re-renderiza cuando solo cambia `visitas`
  const handleToggle = useCallback((id: number) => {
    setTareas(prev => prev.map(t => t.id === id ? { ...t, completada: !t.completada } : t))
  }, []) // sin dependencias externas — setTareas es estable

  const handleEliminar = useCallback((id: number) => {
    setTareas(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 520, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Gestión de Tareas — Inmobiliaria</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>React.memo</code> + <code>useCallback</code> — las filas no re-renderizan por un contador ajeno.
      </p>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
        <button
          onClick={() => setVisitas(v => v + 1)}
          style={{ padding: '6px 16px', borderRadius: 6, border: '1px solid #ccc', cursor: 'pointer' }}
        >
          Registrar visita agendada ({visitas})
        </button>
        <span style={{ fontSize: 13, color: '#888' }}>
          ← no debe re-renderizar las tareas
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {tareas.map(tarea => (
          <TareaFila
            key={tarea.id}
            tarea={tarea}
            onToggle={handleToggle}
            onEliminar={handleEliminar}
          />
        ))}
      </div>

      <p style={{ marginTop: 16, fontSize: 12, color: '#aaa' }}>
        Render total de filas: {renderContadorFila}
        {' '}(debería crecer solo al hacer toggle o eliminar, no al registrar visitas)
      </p>
    </div>
  )
}
