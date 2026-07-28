// Uso — toda la lógica de fetch en una línea
import { useFetch } from '../hooks/useFetch_mp'

// Nota: usamos la API pública de prueba (jsonplaceholder) como fuente de
// datos, simulando publicaciones/anuncios de propiedades de la inmobiliaria.
interface Publicacion { id: number; title: string; body: string }

export default function PostList_mp() {
  const { data: publicaciones, loading, error } = useFetch<Publicacion[]>(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  )

  if (loading) return <p style={{ color: '#6b7280' }}>Cargando anuncios...</p>
  if (error)   return <p style={{ color: '#ef4444' }}>Error: {error}</p>

  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {publicaciones?.map((pub) => (
        <li key={pub.id} style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600, fontSize: 14 }}>🏠 {pub.title}</p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {pub.body.slice(0, 80)}...
          </p>
        </li>
      ))}
    </ul>
  )
}
