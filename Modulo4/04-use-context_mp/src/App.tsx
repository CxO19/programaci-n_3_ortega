// src/App.tsx

import { useAuth }  from './contexts/AuthContext_mp'
import AppHeader    from './components/AppHeader_mp'
import LoginForm    from './components/LoginForm_mp'
import ThemeToggle  from './components/ThemeToggle_mp'
import UserBadge    from './components/UserBadge_mp'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.       │
// │  Tema: Inmobiliaria                                                  │
// │  1  ThemeToggle   — botón que alterna el tema desde el contexto     │
// │  2  UserBadge     — badge de agente autenticado con logout          │
// │  3  LoginForm     — formulario de login conectado a AuthContext      │
// │  4  AppHeader     — header con dos contextos simultáneos            │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 4

export default function App() {
  const { state } = useAuth()

  const content =
    PASO === 1 ? <ThemeToggle /> :
    PASO === 2 ? <UserBadge /> :
    PASO === 3 ? <LoginForm /> :
    PASO === 4 ? <AppHeader /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {PASO === 4 ? content : (
        <>
          <h2 style={{ fontFamily: 'sans-serif', color: '#111827' }}>Inmobiliaria — Módulo useContext</h2>
          {state.user && (
            <p style={{ marginBottom: 16, fontSize: 14, color: '#6b7280' }}>
              Sesión activa: <strong>{state.user.name}</strong>
            </p>
          )}
          {content}
        </>
      )}
    </main>
  )
}
