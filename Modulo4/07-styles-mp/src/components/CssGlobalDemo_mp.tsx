// src/components/CssGlobalDemo_mp.tsx

import '../styles/global_mp.css'

export default function CssGlobalDemo() {
  return (
    <div className="globalCard">
      <h3 className="globalTitle">Casa en Cumbayá — CSS Global</h3>
      <p style={{ margin: 0, color: 'var(--muted)' }}>
        Clases definidas en un archivo <code>.css</code> importado en el componente.
        Scope global — pueden colisionar si dos componentes usan el mismo nombre de clase.
      </p>
    </div>
  )
}
