// src/components/LiveClock.tsx

import { useState, useEffect } from 'react'

export default function LiveClock() {
  // Inicializador perezoso — new Date() se llama una sola vez
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Actualizando hora de última revisión de precios');
      setTime(new Date())
      console.log('Intervalo Final')
    }, 100)

    // Limpieza obligatoria — detiene el interval al desmontar
    return () => clearInterval(interval)
  }, [])

  return (
    <p style={{ fontFamily: 'monospace', fontSize: 28, margin: 0, letterSpacing: 2 }}>
      Última actualización de precios: {time.toLocaleTimeString('en-US', { hour12: true })}
    </p>
  )
}
