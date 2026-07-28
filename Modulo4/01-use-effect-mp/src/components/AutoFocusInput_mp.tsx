// src/components/AutoFocusInput.tsx

import { useEffect, useRef } from 'react'

export default function AutoFocusInput() {
  // useRef<HTMLInputElement>(null) — la referencia empieza en null
  // y se asigna automáticamente cuando React monta el <input>
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // inputRef.current puede ser null si el componente se desmontó
    // El operador ?. lo maneja de forma segura
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <input
        ref={inputRef}
        placeholder="Ingresa la dirección de la propiedad que buscas"
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          width: '100%',
          fontSize: 14,
        }}
      />
      <input
        placeholder="Este input NO recibe foco automático (comparación)"
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          width: '100%',
          fontSize: 14,
        }}
      />
    </>
  )
}
