// src/components/DocumentTitle.tsx

import { useEffect } from 'react'

export default function DocumentTitle() {
  const codigoPropiedad = Math.random();
  useEffect(() => {
    document.title = 'InmoActual - Propiedades'
    console.log('efecto ejecutado')
    console.log('Código de propiedad', codigoPropiedad)

    // Limpieza: restaurar el título al desmontar
    return () => {
      document.title = 'React App'
      console.log('limpieza ejecutado')
    }
  }, [codigoPropiedad])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      El título de la pestaña cambió al montar este componente (InmoActual - Propiedades).
    </p>
  )
}
