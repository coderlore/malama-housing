import path from 'path'
import fs from 'fs'

type Property = {
  id: number
  name: string
  picture: string
  unit: [
    {
      type: string
      minOccupancy: number
      maxOccupancy: number
      sqft: number
      amenities: string[]
    }
  ]
} 

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'mockData.json')
  const jsonData = fs.readFileSync(filePath, 'utf-8')
  const data = JSON.parse(jsonData)
  return data
}

export default async function Home() {
  const data = await getData()
  return (
    <div>
      {data.map((property: Property) => (
        <>
          <h1>{property.name}</h1>
          <p>ID: {property.id}</p>
        </>
      ))}   
    </div>
  )
}
