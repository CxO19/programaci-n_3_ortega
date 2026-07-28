// Uso — API idéntica a useState, pero persiste entre recargas
import { useLocalStorage } from '../hooks/useLocalStorage_mp'

export default function ThemeSelector_mp() {
  const [vista, setVista] = useLocalStorage<'lista' | 'mapa'>('vistaPropiedades', 'lista')

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {(['lista', 'mapa'] as const).map((v) => (
        <button
          key={v}
          onClick={() => setVista(v)}
          style={{
            padding: '6px 14px', borderRadius: 6,
            border: '1px solid #d1d5db',
            background: vista === v ? '#0070f3' : '#fff',
            color:      vista === v ? '#fff'    : '#333',
            cursor: 'pointer',
          }}
        >
          {v === 'lista' ? '📋 Vista Lista' : '🗺️ Vista Mapa'}
        </button>
      ))}
    </div>
  )
}
