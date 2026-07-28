import PrimeSieve_mp        from './components/PrimeSieve_mp'
import FilteredCatalog_mp   from './components/FilteredCatalog_mp'
import OrderMetrics_mp      from './components/OrderMetrics_mp'
import MultiTagFilter_mp    from './components/MultiTagFilter_mp'
//USE CALLBACK
import MemoizedList_mp    from './components/MemoizedList_mp'
// import SearchWithFetch from './components/SearchWithFetch'
// import FilterTable     from './components/FilterTable'
//import PaginatedFetch  from './components/PaginatedFetch'
import ModalDemo_mp from './components/ModalDemo_mp'
import ThemeSelector_mp from './components/ThemeSelector_mp'
import PostList_mp from './components/PostList_mp'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.       │
// │  Tema: Inmobiliaria                                                   │
// │  1  PrimeSieve_mp       — useMemo para cálculo costoso                │
// │  2  FilteredCatalog_mp  — dos useMemo encadenados: filtrar → ordenar │
// │  3  OrderMetrics_mp     — múltiples useMemo derivados de un filtro   │
// │  4  MultiTagFilter_mp   — filtro AND por amenidades memoizado        │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 15

export default function App() {
  const content =
  // USE MEMO
    PASO === 1 ? <PrimeSieve_mp /> :
    PASO === 2 ? <FilteredCatalog_mp /> :
    PASO === 3 ? <OrderMetrics_mp /> :
    PASO === 4 ? <MultiTagFilter_mp /> :
  // USE CALLBACK
    PASO === 5 ? <MemoizedList_mp /> :
    //PASO === 6 ? <SearchWithFetch /> :
    //PASO === 7 ? <FilterTable /> :
    PASO === 8 ? <PaginatedFetch_mp /> :
    // Hooks personalizados
    PASO === 9 ? <ModalDemo_mp /> : /*
    PASO === 10 ? <QuantitySelector /> : */
    PASO === 11 ? <ThemeSelector_mp /> : /*
    PASO === 12 ? <LiveSearch /> : */
    PASO === 13 ? <PostList_mp /> : /*
    PASO === 14 ? <ResponsiveLayout /> : */
    PASO === 15 ? <CodeBlock code={EXAMPLE_CODE} language="tsx" /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 620, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}
