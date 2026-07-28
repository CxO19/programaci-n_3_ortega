// src/pages/ProductsPage.tsx

import { useMemo }  from 'react'
import { Link, useSearchParams } from 'react-router-dom'

interface Product {
  id:       number
  name:     string
  category: string
  price:    number
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Casa en el centro', category: 'casas',      price: 189000 },
  { id: 2, name: 'Apartamento moderno', category: 'apartamentos', price: 134900 },
  { id: 3, name: 'Terreno comercial', category: 'terrenos',   price: 95000  },
  { id: 4, name: 'Penthouse de lujo', category: 'apartamentos', price: 359000 },
  { id: 5, name: 'Casa de campo',     category: 'casas',      price: 214900 },
]

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const query    = searchParams.get('q')        ?? ''
  const category = searchParams.get('category') ?? ''

  function handleQueryChange(value: string) {
    setSearchParams(
      (prev) => { prev.set('q', value); return prev },
      { replace: true }
    )
  }

  function handleCategoryChange(value: string) {
    setSearchParams(
      (prev) => {
        if (value) prev.set('category', value)
        else       prev.delete('category')
        return prev
      },
      { replace: true }
    )
  }

  const filtered = useMemo(() =>
    PRODUCTS
      .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
      .filter((p) => !category || p.category === category),
    [query, category]
  )

  const categories = [...new Set(PRODUCTS.map((p) => p.category))]

  return (
    <div>
      <h1 style={{ fontSize: 22, marginBottom: 16 }}>Propiedades</h1>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Buscar propiedades..."
          style={{ flex: 1, padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        />
        <select
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        >
          <option value="">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {filtered.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 8,
            }}>
              <div>
                <p style={{ margin: 0, fontWeight: 500 }}>{product.name}</p>
                <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>{product.category}</p>
              </div>
              <span style={{ fontWeight: 600 }}>${product.price}</span>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p style={{ color: '#9ca3af' }}>Sin resultados.</p>
        )}
      </div>
    </div>
  )
}