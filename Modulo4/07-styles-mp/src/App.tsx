// src/App.tsx

import CssGlobalDemo        from './components/CssGlobalDemo_mp'
import CssModuleDemo        from './components/CssModuleDemo_mp'
import InlineStyleDemo      from './components/InlineStyleDemo_mp'
import StyledComponentsDemo from './components/StyledComponentsDemo_mp'

import './styles/global_mp.css'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  Tema: Inmobiliaria                                                  │
// │  1  CssGlobalDemo        — clases globales y riesgo de colisión     │
// │  2  InlineStyleDemo      — objetos JS, sin :hover ni @media         │
// │  3  CssModuleDemo        — scope local, :hover con CSS Modules      │
// │  4  StyledComponentsDemo — CSS-in-JS con props transient ($)        │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 4

export default function App() {
  const content =
    PASO === 1 ? <CssGlobalDemo /> :
    PASO === 2 ? <InlineStyleDemo /> :
    PASO === 3 ? <CssModuleDemo /> :
    PASO === 4 ? <StyledComponentsDemo /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: '32px 16px' }}>
      {content}
    </main>
  )
}
