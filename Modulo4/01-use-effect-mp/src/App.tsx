// src/App.tsx
import DocumentTitle    from './components/DocumentTitle_mp'
import OnlineStatus     from './components/OnlineStatus_mp'
import WindowSize       from './components/WindowSize_mp'
import LiveClock        from './components/LiveClock_mp'
import SearchWithEffect from './components/SearchWithEffect_mp'
import DebounceSearch   from './components/DebounceSearch_mp'
import FetchAgente      from './components/FetchAgente_mp'
import AutoFocusInput   from './components/AutoFocusInput_mp'
// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.       │
// │  Tema: Inmobiliaria                                                  │
// │  1  DocumentTitle    — useEffect con array vacío, limpia al desmontar│
// │  2  OnlineStatus     — subscripción a eventos online/offline         │
// │  3  WindowSize       — evento resize con estado objeto tipado        │
// │  4  LiveClock        — setInterval con inicializador perezoso        │
// │  5  SearchWithEffect — efecto con dependencia, búsqueda sincronizada │
// │  6  DebounceSearch   — setTimeout/clearTimeout, patrón debounce      │
// │  7  FetchAgente      — fetch real, loading/error, flag cancelled     │
// │  8  AutoFocusInput   — useRef + useEffect para foco imperativo       │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 8

export default function App() {
  const content =
    PASO === 1 ? <DocumentTitle /> :
    PASO === 2 ? <OnlineStatus /> :
    PASO === 3 ? <WindowSize /> :
    PASO === 4 ? <LiveClock /> :
    PASO === 5 ? <SearchWithEffect /> :
    PASO === 6 ? <DebounceSearch /> :
    PASO === 7 ? <FetchAgente /> :
    PASO === 8 ? <AutoFocusInput /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h2 style={{ fontFamily: 'sans-serif', color: '#111827' }}>Inmobiliaria — Módulo useEffect</h2>
      {content}
    </main>
  )
}
