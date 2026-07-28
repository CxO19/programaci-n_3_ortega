// src/App.tsx
import AutoFocusForm from './components/AutoFocusForm_mp'
import InlineEditor  from './components/InlineEditor_mp'
import PreviousValue from './components/PreviousValue_mp'
import Stopwatch      from './components/Stopwatch_mp'

const PASO = 4

export default function App() {
  const content =
    PASO === 1 ? <AutoFocusForm /> :
    PASO === 2 ? <Stopwatch /> :
    PASO === 3 ? <InlineEditor /> :
    PASO === 4 ? <PreviousValue /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 500, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h2 style={{ fontFamily: 'sans-serif', color: '#111827' }}>Inmobiliaria — Módulo useRef</h2>
      {content}
    </main>
  )
}
