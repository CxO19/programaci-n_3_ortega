// src/pages/ProductDetailPage.tsx

import { useParams, Link } from 'react-router-dom'

interface ProductParams extends Record<string, string | undefined> {
  id: string
}

export default function ProductDetailPage() {
  const { id } = useParams<ProductParams>()

  const productId = Number(id)

  if (!id || isNaN(productId)) {
    return <p style={{ color: '#ef4444' }}>ID de propiedad inválido.</p>
  }

  return (
    <div>
      <Link
        to="/products"
        style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}
      >
        ← Volver a propiedades
      </Link>
      <h1 style={{ marginTop: 12 }}>Propiedad #{productId}</h1>
      <p style={{ color: '#6b7280' }}>
        Aquí iría el detalle de la propiedad con ID {productId}.
      </p>
    </div>
  )
}