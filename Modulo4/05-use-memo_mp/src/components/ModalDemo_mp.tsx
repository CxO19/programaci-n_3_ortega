// Uso — renombra value al desestructurar para mayor claridad
import { useToggle } from '../hooks/useToggle_mp'

export default function ModalDemo_mp() {
  const { value: abierto, toggle, setFalse } = useToggle()

  return (
    <>
      <button onClick={toggle}>Ver detalle de la propiedad</button>
      {abierto && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            background: '#fff', borderRadius: 10,
            padding: 24, minWidth: 300,
          }}>
            <h3 style={{ marginTop: 0 }}>Casa en González Suárez</h3>
            <p>4 habitaciones, garaje, jardín. Precio: $185,000.</p>
            <button onClick={setFalse}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  )
}
