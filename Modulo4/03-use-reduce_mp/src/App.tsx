// src/App.tsx

import BasicCounter     from './components/BasicCounter_mp'
import RegistrationForm from './components/RegistrationForm_mp'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.       │
// │  Tema: Inmobiliaria                                                  │
// │  1  BasicCounter      — useReducer básico con acciones tipadas       │
// │  2  RegistrationForm  — formulario con validación y estados de envío │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 2

export default function App() {
  const content =
    PASO === 1 ? <BasicCounter /> :
    PASO === 2 ? <RegistrationForm /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h2 style={{ fontFamily: 'sans-serif', color: '#111827' }}>Inmobiliaria — Módulo useReducer</h2>
      {content}
    </main>
  )
}
