import MascotasList from './components/MascotasList'

interface Mascota {
  id: number
  name: string
  type: string
  age: number
  price: number
}

const catalog: Mascota[] = [
  { id: 1, name: 'Max', type: 'Perro (Golden Retriever)', age: 2, price: 150.00 },
  { id: 2, name: 'Luna', type: 'Gato (Siamés)', age: 1, price: 95.00 },
  { id: 3, name: 'Rocky', type: 'Perro (Pastor Alemán)', age: 3, price: 200.00 },
  { id: 4, name: 'Coco', type: 'Loro (Amazonas)', age: 1, price: 120.00 },
  { id: 5, name: 'Mimi', type: 'Conejo (Angora)', age: 1, price: 45.00 },
]

export default function App() {
  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>

      < MascotasList 
      mascotas={catalog} 
      title="Mascotas disponibles" />
    </main>
  )
}